import { createAction, props } from '@ngrx/store';

export const updateAgeFilter = createAction('[Units] Update Age Filter', props<{ age: string }>());
export const updateCostFilter = createAction('[Units] Update Cost Filter', props<{ name: 'food' | 'wood' | 'gold', value:number }>());
export const toggleCostFilter = createAction('[Units] Toggle Cost Filter', props<{ name:  'food' | 'wood' | 'gold', value:boolean }>());
export const setUnits = createAction('[Units] Set Units', props<{ list: any[] }>() );
