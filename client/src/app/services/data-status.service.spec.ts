import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataStatusService } from './data-status.service';

describe('DataStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [DataStatusService]
    });
  });

  it('should be created', inject([DataStatusService], (service: DataStatusService) => {
    expect(service).toBeTruthy();
  }));
});
