import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BracketsComponent } from './brackets.component';
import { RosterService } from '../../services/roster.service';
import { Match } from '../../model/match';
import { FormsModule } from '@angular/forms';

describe('BracketsComponent', () => {
  let component: BracketsComponent;
  let service: RosterService;
  let fixture: ComponentFixture<BracketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketsComponent ],
      providers: [ RosterService ],
      imports: [ FormsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsComponent);
    service = TestBed.inject(RosterService);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  describe('Constructor and load', () => {
    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('should load message field as null', () => {
      expect(component.message).toEqual(null);
    });

    it('should load round field as undefined', () => {
    			expect(component.round).toEqual(undefined);
  	});
  });

  describe('Set Matches', () => {
    it('should run setMatches()', () => {
      service.addContestant('Jim Halpert');
      service.addContestant('Pam Halpert');
      service.addContestant('Stanley Hudson');
      service.addContestant('Michael Scott');
      service.addContestant('Kevin Malone');
      service.addContestant('Creed Bratton');
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      var result = function () {
        component.setMatches();
      }
      expect(result).toBeTruthy();
    });

    it('should create four matches given eight contestants', () => {
      service.addContestant('Jim Halpert');
      service.addContestant('Pam Halpert');
      service.addContestant('Stanley Hudson');
      service.addContestant('Michael Scott');
      service.addContestant('Kevin Malone');
      service.addContestant('Creed Bratton');
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      component.setMatches();

      expect(component.getMatches().length).toEqual(4);
    });

    it('should create four matches given eight contestants with correct values for matches', () => {
      service.addContestant('Jim Halpert');
      service.addContestant('Pam Halpert');
      service.addContestant('Stanley Hudson');
      service.addContestant('Michael Scott');
      service.addContestant('Kevin Malone');
      service.addContestant('Creed Bratton');
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      component.setMatches();
      var result = component.getMatches();

      expect(result).toEqual([new Match('Jim Halpert', 'Pam Halpert'),
      new Match('Stanley Hudson', 'Michael Scott'),
      new Match('Kevin Malone', 'Creed Bratton'),
      new Match('Andy Bernard', 'Toby Flenderson'),
    ]);
  });

    it('should create two matches when given four contestants', () => {
      service.addContestant('Kevin Malone');
      service.addContestant('Creed Bratton');
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      component.setMatches();

      expect(component.getMatches().length).toEqual(2);
    });

    it('should create two matches when given four contestants with correct values for matches', () => {
      service.addContestant('Kevin Malone');
      service.addContestant('Creed Bratton');
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      component.setMatches();
      var result = component.getMatches();

      expect(result).toEqual([new Match('Kevin Malone', 'Creed Bratton'),
      new Match('Andy Bernard', 'Toby Flenderson'),
      ]);
    });

    it('should create one match when given two contestants', () => {
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      component.setMatches();

      expect(component.getMatches().length).toEqual(1);
    });

    it('should create one match when given two contestants with correct values for matches', () => {
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      component.setMatches();
      var result = component.getMatches();

      expect(result).toEqual([new Match('Andy Bernard', 'Toby Flenderson')
      ]);
    });
  });

  describe('Complete Round', () => {
    it('should run completeRound method', () => {
      service.addContestant('Jim Halpert');
      service.addContestant('Pam Halpert');
      service.addContestant('Stanley Hudson');
      service.addContestant('Michael Scott');
      service.addContestant('Kevin Malone');
      service.addContestant('Creed Bratton');
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      component.setMatches();

      expect(component.getMatches().length).toEqual(4);
      component.getMatches()[0].setWinner(component.getMatches()[0].firstContestant);
      component.getMatches()[1].setWinner(component.getMatches()[1].firstContestant);
      component.getMatches()[2].setWinner(component.getMatches()[2].secondContestant);
      component.getMatches()[3].setWinner(component.getMatches()[3].secondContestant);
      var result = function () {
        component.completeRound();
      }

      expect(result).toBeTruthy();
    });

    it('should change match length from 4 to 2 to 1', () => {
      service.addContestant('Jim Halpert');
      service.addContestant('Pam Halpert');
      service.addContestant('Stanley Hudson');
      service.addContestant('Michael Scott');
      service.addContestant('Kevin Malone');
      service.addContestant('Creed Bratton');
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      component.setMatches();

      expect(component.getMatches().length).toEqual(4);
      component.getMatches()[0].setWinner(component.getMatches()[0].firstContestant);
      component.getMatches()[1].setWinner(component.getMatches()[1].firstContestant);
      component.getMatches()[2].setWinner(component.getMatches()[2].secondContestant);
      component.getMatches()[3].setWinner(component.getMatches()[3].secondContestant);
      component.completeRound();
      expect(component.getMatches().length).toEqual(2);
      component.getMatches()[0].setWinner(component.getMatches()[0].firstContestant);
      component.getMatches()[1].setWinner(component.getMatches()[1].secondContestant);
      component.completeRound();
      expect(component.getMatches().length).toEqual(1);
    });

    it('should change getContestants array after each complete round call', () => {
      service.addContestant('Jim Halpert');
      service.addContestant('Pam Halpert');
      service.addContestant('Stanley Hudson');
      service.addContestant('Michael Scott');
      service.addContestant('Kevin Malone');
      service.addContestant('Creed Bratton');
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      component.setMatches();

      var starters = service.getContestants();
      expect(starters).toEqual(['Jim Halpert', 'Pam Halpert', 'Stanley Hudson',
      'Michael Scott', 'Kevin Malone', 'Creed Bratton', 'Andy Bernard', 'Toby Flenderson']);

      component.getMatches()[0].setWinner(component.getMatches()[0].firstContestant);
      component.getMatches()[1].setWinner(component.getMatches()[1].firstContestant);
      component.getMatches()[2].setWinner(component.getMatches()[2].secondContestant);
      component.getMatches()[3].setWinner(component.getMatches()[3].secondContestant);

      component.completeRound();
      var round1Winners = service.getContestants();
      expect(round1Winners).toEqual(['Jim Halpert', 'Stanley Hudson', 'Creed Bratton', 'Toby Flenderson']);

      component.getMatches()[0].setWinner(component.getMatches()[0].firstContestant);
      component.getMatches()[1].setWinner(component.getMatches()[1].secondContestant);

      component.completeRound();
      var round2Winners = service.getContestants();
      expect(round2Winners).toEqual(['Jim Halpert','Toby Flenderson']);
    });

    it('should change values of matches after each completeRound call (round 1, 2, and 3)', () => {
      service.addContestant('Jim Halpert');
      service.addContestant('Pam Halpert');
      service.addContestant('Stanley Hudson');
      service.addContestant('Michael Scott');
      service.addContestant('Kevin Malone');
      service.addContestant('Creed Bratton');
      service.addContestant('Andy Bernard');
      service.addContestant('Toby Flenderson');
      component.setMatches();

      var round1 = component.getMatches();
      expect(round1).toEqual([new Match('Jim Halpert', 'Pam Halpert'),
      new Match('Stanley Hudson', 'Michael Scott'),
      new Match('Kevin Malone', 'Creed Bratton'),
      new Match('Andy Bernard', 'Toby Flenderson'),
      ]);

    component.getMatches()[0].setWinner(component.getMatches()[0].firstContestant);
    component.getMatches()[1].setWinner(component.getMatches()[1].firstContestant);
    component.getMatches()[2].setWinner(component.getMatches()[2].secondContestant);
    component.getMatches()[3].setWinner(component.getMatches()[3].secondContestant);

    component.completeRound();
    var round2 = component.getMatches();
    expect(round2).toEqual([new Match('Jim Halpert', 'Stanley Hudson'),
    new Match('Creed Bratton', 'Toby Flenderson')
    ]);

    component.getMatches()[0].setWinner(component.getMatches()[0].firstContestant);
    component.getMatches()[1].setWinner(component.getMatches()[1].secondContestant);

    component.completeRound();
    var round3 = component.getMatches();
    expect(round3).toEqual([new Match('Jim Halpert','Toby Flenderson')
    ]);
    });
  });
});
