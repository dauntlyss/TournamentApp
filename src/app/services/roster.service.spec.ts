import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not allow duplicate names', () => {
    expect(function () {
	    service.addContestant('Alyssa');
    	service.addContestant('Alyssa');
    }).toThrow('player is duplicate');
  });

  it('should not allow duplicate names test 2', () => {
    expect(function () {
      service.addContestant('Betty');
			service.addContestant('Jose');
    	service.addContestant('Betty');
    }).toThrow('player is duplicate');
  });

  describe('Null names', () => {
    it('should not allow null names', () => {
      expect(function () {
      service.addContestant(null);
      }).toThrow('player is null');
    });
    it('should not allow null names test 2', () => {
      expect(function () {
        service.addContestant('Penny');
        service.addContestant('Ulysses');
        service.addContestant(null);
    }).toThrow('player is null');
  });
});

  describe('Empty names', () => {
		it('should not allow empty names', () => {
			expect(function () {
				service.addContestant('');
			}).toThrow('player is empty');
		});
		it('should not allow empty names test 2', () => {
			expect(function () {
				service.addContestant('     ');
			}).toThrow('player is empty');
		});
	});
});
