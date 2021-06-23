import { TestBed } from '@angular/core/testing';

import { RosterServiceService } from './roster-service.service';

describe('RosterServiceService', () => {
  let service: RosterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
