import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule as browserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule as httpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    browserAnimationsModule,
    httpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }