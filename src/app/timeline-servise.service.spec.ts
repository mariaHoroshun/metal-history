import { TestBed } from '@angular/core/testing';

import { TimelineServiseService } from './timeline-servise.service';

describe('TimelineServiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimelineServiseService = TestBed.get(TimelineServiseService);
    expect(service).toBeTruthy();
  });
});
