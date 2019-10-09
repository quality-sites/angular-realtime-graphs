import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'radar-chart', component: RadarChartComponent},
  {path: 'pie-chart', component: PieChartComponent},
  {path: '**', component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
