import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {UnitsComponent} from './pages/units/units.component';
import {UnitDetailPageComponent} from './pages/unit-detail-page/unit-detail-page.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {unitsReducer} from './store/units/reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnitsComponent,
    UnitDetailPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({units: unitsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
