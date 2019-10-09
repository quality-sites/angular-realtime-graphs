import { Component } from '@angular/core';
import { DataStatusService } from '../../services/data-status.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  constructor(private dataService:DataStatusService) { }

  ngOnInit() {
    this.dataService.getUpdates().subscribe((dataStatus: any) => {
      this.chartDatasets = [{data: dataStatus.data, label: 'Stock Prices'}];
    });
  }

  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [0,0,0,0,0,0,0,0], label: 'Stock Prices' }
  ];

  public chartLabels: Array<any> = ['Coca Cola', 'Apple', 'BitCoin', 'Microsoft', 'Samsung', 'Google', 'Amazon'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}