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
  public round: String;
  public message: String;

  constructor(private rosterService: RosterService) { }

  ngOnInit(): void {
    this.setMatches();
    this.message = null;
  }

  setMatches() {
    let length = this.rosterService.getContestants().length;
    if (length == 2) {
      this.round = "Round 3";
      this.matches = [
        new Match(this.rosterService.getContestants()[0],
        this.rosterService.getContestants()[1])
      ];
    } else if (length == 4) {
      this.round = "Round 2";
      this.matches = [
        new Match(this.rosterService.getContestants()[0], this.rosterService.getContestants()[1]),
        new Match(this.rosterService.getContestants()[2], this.rosterService.getContestants()[3])
      ];
    } else if (length == 8) {
      this.round = "Round 1";
      this.matches = [
        new Match(this.rosterService.getContestants()[0], this.rosterService.getContestants()[1]),
        new Match(this.rosterService.getContestants()[2], this.rosterService.getContestants()[3]),
        new Match(this.rosterService.getContestants()[4], this.rosterService.getContestants()[5]),
        new Match(this.rosterService.getContestants()[6], this.rosterService.getContestants()[7])
      ];
    }
  }

  /* returns a list of all the matches in the current round */
  getMatches(): Array<Match> {
    return this.matches;
  }

  completeRound() {
    this.rosterService.getContestants().length = 0;
    for(var match in this.matches){
      this.rosterService.addContestant(this.matches[match].getWinner());
    }
    this.setMatches();
  }

}
