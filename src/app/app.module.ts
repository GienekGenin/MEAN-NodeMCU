import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SensorComponent} from './sensor/sensor.component';
import {SensorService} from './sensor.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import {AmChartsModule} from '@amcharts/amcharts3-angular';

const appRoutes: Routes = [
  { path: 'sensor', component: SensorComponent },
  { path: 'weather', component: WeatherComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SensorComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AmChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [SensorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
