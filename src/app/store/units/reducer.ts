import {createReducer, createSelector, on} from "@ngrx/store";
import {
  updateAgeFilter,
  updateCostFilter,
  toggleCostFilter,
  setUnits
} from "./actions";

export const initialState = {
  list: [] as any[],
  filters: {
    age: "all",
    costs: {
      food: {enabled: false, value: 0},
      wood: {enabled: false, value: 0},
      gold: {enabled: false, value: 0},
    },
  },
};
export const unitsReducer = createReducer(
  initialState,
  on(setUnits, (state, action) => {
    return {...state, list: action.list};
  }),
  on(updateAgeFilter, (state, action) => {
    const {filters} = state
    return {...state, filters: {...filters, age: action.age}};
  }),
  on(updateCostFilter, (state, action) => {
    const {filters} = state
    const {costs} = filters;
    const cost = costs[action.name];
    return {...state, filters: {...filters, costs: {...costs, [action.name]: {...cost, value: action.value}}}};
  }),
  on(toggleCostFilter, (state, action) => {
    const {filters} = state
    const {costs} = filters;
    const cost = costs[action.name];
    return {...state, filters: {...filters, costs: {...costs, [action.name]: {...cost, enabled: action.value}}}};
  })
);

export const selectUnits = createSelector(
  (state: any) => state.units,
  ({list, filters}) => {

    let units = list;
    if (filters.age !== "all") {
      units = units.filter((unit: any) => unit.age === filters.age);
      
    }
    if (filters.costs.food.enabled) {
      units = units.filter(
        (unit: any) => unit.cost?.Food >= filters.costs.food.value
      );
    }
    if (filters.costs.wood.enabled) {
      units = units.filter(
        (unit: any) => unit.cost?.Wood >= filters.costs.wood.value
      );
    }
    if (filters.costs.gold.enabled) {
      units = units.filter(
        (unit: any) => unit.cost?.Gold >= filters.costs.gold.value
      );
    }
    return units;
  }
);

export const selectUnit = (id: number) => createSelector(
  (state: any) => state.units.list || [],
  units => {
    return units?.find((unit: any) => unit.id === id)
  }
);
