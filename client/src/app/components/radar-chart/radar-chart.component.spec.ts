import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadarChartComponent } from './radar-chart.component';
import { ChartsModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import "node_modules/chart.js/dist/Chart.js";

describe('RadarChartComponent', () => {
  let component: RadarChartComponent;
  let fixture: ComponentFixture<RadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ChartsModule
      ],
      declarations: [ RadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
