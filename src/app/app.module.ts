import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import {SensorService} from './sensor.service';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SensorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
