import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';
import { Match } from '../../model/match';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
  public matches: Array<Match>;
  public match: Match;

  constructor(private rosterService: RosterService) { }

  ngOnInit(): void {
    this.setMatches();
  }

  setMatchOneWinner (winner: String) {
  	this.winners[0] = winner;
  }

  setMatches() {
  	let length = this.rosterService.getContestants().length;
    if (length == 2) {
      this.matches = [
        new Match(this.rosterService.getContestants()[0],
        this.rosterService.getContestants()[1])
  		];
  	} else if (length == 4) {
      this.matches = [
        new Match(this.rosterService.getContestants()[0], this.rosterService.getContestants()[1]),
  			new Match(this.rosterService.getContestants()[2], this.rosterService.getContestants()[3])
      ];
  	} else if (length == 8) {
  		this.matches = [
  			new Match(this.rosterService.getContestants()[0], this.rosterService.getContestants()[1]),
  			new Match(this.rosterService.getContestants()[2], this.rosterService.getContestants()[3]),
  			new Match(this.rosterService.getContestants()[4], this.rosterService.getContestants()[5]),
  			new Match(this.rosterService.getContestants()[6], this.rosterService.getContestants()[7])
      ];
  	}

  completeRound() {
    this.message = this.matchOne;
    for (let winner in this.winners) {
      if (this.winners[winner].trim() == '') {
        continue;
      }
    }
    this.message = this.winners.toString();
  }

}
