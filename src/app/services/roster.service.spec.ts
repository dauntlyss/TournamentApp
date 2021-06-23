import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });

  describe('Constructor', () => {
  		it('should be created', () => {
    			expect(service).toBeTruthy();
  		});
	});

  describe('Duplicate names', () => {
    it('should not allow duplicate names', () => {
      let result = function () {
        service.addContestant('Alyssa');
      	service.addContestant('Alyssa');
      }
      expect(result).toThrow('player is a duplicate');
    });

    it('should not allow duplicate names-test 2', () => {
      let result = function () {
        service.addContestant('Betty');
  			service.addContestant('Jose');
      	service.addContestant('betty');
      }
      expect(result).toThrow('player is a duplicate');
    });
  });

  describe('Null names', () => {
    it('should not allow null names', () => {
      let result = function () {
        service.addContestant(null);
      }
      expect(result).toThrow('player is null');
    });

    it('should not allow null names-test 2', () => {
      let result = function () {
        service.addContestant('Penny');
        service.addContestant('Ulysses');
        service.addContestant(null);
      }
      expect(result).toThrow('player is null');
  });
});

  describe('Empty names', () => {
		it('should not allow empty names', () => {
      let result = function () {
        service.addContestant('');
      }
			expect(result).toThrow('player is empty');
		});

		it('should not allow empty names test-2', () => {
      let result = function () {
        service.addContestant('     ');
      }
			expect(result).toThrow('player is empty');
		});
	});

  describe('Add one constestant', () => {
		it('should add one contestant', () => {
			service.addContestant('Izayah');
			var result = service.getContestants();
			expect(result).toEqual(['Izayah']);
		});

		it('should add one contestant-test 2', () => {
			service.addContestant('Jared');
			var result = service.getContestants();
			expect(result).toEqual(['Jared']);
		});
	});

	describe('Add several contestants', () => {
		it('should add two contestant', () => {
			service.addContestant('Willie');
			service.addContestant('McKenna');
			var result = service.getContestants();
			expect(result).toEqual(['Willie', 'McKenna']);
		});
		it('should add four contestants', () => {
			service.addContestant('Johanna');
			service.addContestant('Chip');
			service.addContestant('Dylan');
			service.addContestant('Christine');
			var result = service.getContestants();
			expect(result).toEqual(['Johanna', 'Chip', 'Dylan', 'Christine']);
		});

		it('should add eight contestants', () => {
			service.addContestant('Micheal Scott');
			service.addContestant('Dwight Schrute');
			service.addContestant('Pam Beesly');
			service.addContestant('Jim Halpert');
			service.addContestant('Stanley Hudson');
			service.addContestant('Angela Martin');
			service.addContestant('Toby Flenderson');
			service.addContestant('Andy Bernard');
			var result = service.getContestants();

			expect(result).toEqual(['Micheal Scott', 'Dwight Schrute', 'Pam Beesly',
       'Jim Halpert', 'Stanley Hudson', 'Angela Martin',
       'Toby Flenderson', 'Andy Bernard']);
		});

	});

});
