import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    RadarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
