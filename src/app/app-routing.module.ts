import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {UnitDetailPageComponent} from "./pages/unit-detail-page/unit-detail-page.component";
import {UnitsComponent} from "./pages/units/units.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'units/:id',
    component: UnitDetailPageComponent
  },
  {
    path: 'units',
    component: UnitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
