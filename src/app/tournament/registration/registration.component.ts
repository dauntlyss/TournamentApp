import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public players: String[];
  public message: String;

  constructor(private rosterService: RosterService) { }

  ngOnInit(): void {
    this.players = ['', '', '','', '', '', '', ''];
    this.message = null;
  }

  /* Looks through the players and adds any non-empty player names to the RosterService
  */
  registerContestants() {
	   try {
       for (let player in this.players) {
         if (this.players[player].trim() == '') {
				   continue;
			   }
			   this.rosterService.addContestant(this.players[player]);
		   }
	      if (this.rosterService.getContestants().length == 2  || this.rosterService.getContestants().length == 4 || this.rosterService.getContestants().length == 8) {
          this.message = this.rosterService.getContestants().toString();
        } else {
          this.message = "Roster must be 2, 4, or 8 players"
        }
      }
      catch(err) {
        this.message = err;
      }
    }

  /* Presets the name of the first two players to be registered */
  autofillTwo() {
    this.players[0] = 'Michael';
    this.players[1] = 'Jim';
  }

  /* Presets the name of the first four players to be registered */
  autofillFour() {
    this.players[0] = 'Pam';
    this.players[1] = 'Jim';
    this.players[2] = 'Stanley';
    this.players[3] = 'Creed';
  }

  /* Presets the name of the first eight players to be registered */
  autofillEight() {
    this.players[0] = 'Micheal';
    this.players[1] = 'Meredith';
    this.players[2] = 'Creed';
    this.players[3] = 'Ryan';
    this.players[4] = 'Dwight';
    this.players[5] = 'Jan';
    this.players[6] = 'Andy';
    this.players[7] = 'Kevin';
  }
  /* Tracks players by index number to deal with primitive array
  */
  trackByPlayerIndex(index: any, item: any) {
  	return index;
  }

}
