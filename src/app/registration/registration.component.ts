import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public players: String[];
  public message;

  constructor(private rosterService: RosterService) { }

  ngOnInit(): void {
    this.players = ['test', 'new', '','', '', '', '', ''];
    this.message = null;
  }

  /* Looks through the players and adds any non-empty player names to the RosterService
  */
  registerContestants() {
	  for (let player in this.players) {
		     if (this.players[player].trim() == '') {
			        continue;
		}
		this.rosterService.addContestant(this.players[player]);
	}
	  if (this.rosterService.getContestants().length == 2
    || this.rosterService.getContestants().length == 4
    || this.rosterService.getContestants().length == 8) {
		    this.message = this.rosterService.getContestants().toString();
	  } else {
		    this.message = "Roster can only be 2, 4, or 8 players"
	  }
  }

  /* Tracks players by index number to deal with primitive array
  */
  trackByPlayerIndex(index: any, item: any) {
	return index;
  }

}
