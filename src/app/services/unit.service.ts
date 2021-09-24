import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {setUnits, toggleCostFilter, updateAgeFilter, updateCostFilter} from "../store/units/actions";
import {Store} from "@ngrx/store";
import {selectUnit, selectUnits} from "../store/units/reducer";

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  constructor(private http: HttpClient, private _store: Store) {
    this.loadUnits().subscribe(({units: list}) => {
      this._store.dispatch(setUnits({list}));
    });
  }

  loadUnits() {
    return this.http.get<{ units: any[] }>("./assets/units.json")
  }

  getUnits() {
    return this._store.select(selectUnits);
  }

  getUnit(id: number) {
    return this._store.select(selectUnit(id));
  }

  updateCostFilter(value: number, name: any) {
    this._store.dispatch(updateCostFilter({name, value}))
  }

  toggleCostFilter(name: any, value: boolean) {
    this._store.dispatch(toggleCostFilter({name, value}))
  }

  ageChange(age: string) {
    this._store.dispatch(updateAgeFilter({age}));
  }
}
