import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
  public players: String[];
  public message;
  public winners: String[];
  public matchOne: String[];

  constructor(private rosterService: RosterService) { }

  ngOnInit(): void {
    this.players = this.rosterService.getContestants();
	  this.message = null;
    this.winners = ['','','',''];
    this.matchOne = [this.players[0], this.players[1]];
  }

  setMatchOneWinner (winner: String) {
  	this.winners[0] = winner;
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
