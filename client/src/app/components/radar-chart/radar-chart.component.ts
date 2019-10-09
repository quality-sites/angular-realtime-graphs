import { Component } from '@angular/core';
import { DataStatusService } from '../../services/data-status.service';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {

  constructor(private dataService:DataStatusService) { }

  ngOnInit(){
    this.dataService.getUpdates().subscribe((dataStatus: any) => {
      this.chartDatasets = [{data: dataStatus.data, label: 'Stock Prices'}];
    });
  }

  public chartType: string = 'radar';

  public chartDatasets: Array<any> = [
    {data: [], label: 'Stock Prices'}
  ];

  public chartLabels: Array<any> = ['Coca Cola', 'Apple', 'BitCoin', 'Microsoft', 'Samsung', 'Google', 'Amazon'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 250, 220, .2)',
      borderColor: 'rgba(0, 213, 132, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}