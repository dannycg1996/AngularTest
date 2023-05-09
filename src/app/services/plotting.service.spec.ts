import { TestBed } from '@angular/core/testing';

import { PlottingService } from './plotting.service';

describe('PlotlyService', () => {
  let service: PlottingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlottingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
