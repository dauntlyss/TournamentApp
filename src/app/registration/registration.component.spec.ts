import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { RosterService } from '../services/roster.service';
import { FormsModule } from '@angular/forms';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      providers: [ RosterService ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Constructor and load test', () => {
  	it('should create', () => {
    	expect(component).toBeTruthy();
  	});

    it('should load array of empty strings', () => {
    	expect(component.players).toEqual(['','','','','','','','']);
  	});

    it('should load players of length 8 on init', () => {
    	expect(component.players.length).toEqual(8);
  	});

    it('should load message field as null', () => {
    	expect(component.message).toEqual(null);
  	});
	});

	describe('Duplicate names test', () => {
		it('should update message to say player is duplicate', () => {
			component.players[0] = 'Jim';
			component.players[1] = 'Pam';
			component.players[2] = 'Michael';
			component.players[3] = 'MiCHael';
			component.registerContestants();
    	expect(component.message).toEqual('player is a duplicate');
  		});

		it('should update message to say player is duplicate with empty strings in between', () => {
			component.players[0] = 'Toby';
			component.players[8] = 'Jan';
			component.players[7] = 'TOBY';
			component.registerContestants();
    	expect(component.message).toEqual('player is a duplicate');
  		});
	});

	describe('Invalid number of players', () => {
		it('should update message with information on roster size', () => {
			component.players[0] = 'Erin';
			component.players[1] = 'Andy';
			component.players[2] = 'Holly';
			component.registerContestants();
    	expect(component.message).toEqual('Roster must be 2, 4, or 8 players');
  		});
		it('should update message with information on roster size with empty space between', () => {
			component.players[0] = 'RYan';
			component.players[2] = 'KarEn';
			component.players[4] = 'meredith';
			component.players[5] = 'Kelly';
			component.players[6] = 'DARRYL';
			component.registerContestants();
    	expect(component.message).toEqual('Roster must be 2, 4, or 8 players');
  		});

		it('should update message with information on roster size with no valid players submitted', () => {
			component.registerContestants();
    	expect(component.message).toEqual('Roster must be 2, 4, or 8 players');
  		});

		it('should update message with information on roster size with empty players submitted', () => {
			component.players[0] = '';
			component.players[2] = '           ';
			component.registerContestants();
    	expect(component.message).toEqual('Roster must be 2, 4, or 8 players');
  		});
	});

	describe('Successful registration', () => {
		it('should return a message with the full roster of eight contestants', () => {
			component.players[0] = 'Michael';
			component.players[1] = 'Andy Bernard';
			component.players[2] = 'Stanley H';
			component.players[3] = 'Angela';
			component.players[4] = 'ryan';
			component.players[5] = 'KAREN';
			component.players[6] = 'JIM';
			component.players[7] = 'Creed';
			component.registerContestants();
    			expect(component.message).toEqual('Michael,Andy Bernard,Stanley H,Angela,ryan,KAREN,JIM,Creed');
  		});

		it('should return a message with the roster of four contestants with empty spaces', () => {
      component.players[0] = 'Michael';
			component.players[2] = 'Andy Bernard';
			component.players[4] = 'Stanley H';
			component.players[6] = 'Angela';
			component.registerContestants();
    			expect(component.message).toEqual('Michael,Andy Bernard,Stanley H,Angela');
  		});

		it('should return a message with the roster of two contestants with empty spaces', () => {
      component.players[6] = 'JIM';
			component.players[7] = 'Creed';
			component.registerContestants();
    			expect(component.message).toEqual('JIM,Creed');
  		});

	});

});
