import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartComponent } from './pie-chart.component';
import { ChartsModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import "node_modules/chart.js/dist/Chart.js";

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ChartsModule
      ],
      declarations: [ PieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
