import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  private theContestants: String[];

  constructor() {
    this.theContestants = [];
  }

  /* returns the list of registered contestants' names (as a list of strings) */
    getConstestants() : String[] {
    return this.theContestants;
  }

  /* adds a single contestant to the registry */
  addContestant(player: String) {
  if (player == null) {
		 throw "player is null";
	} else if (player.trim() == '') {
		 throw "player is empty";
	} else if (this.theContestants.includes(player.valueOf())) {
		 throw "player is duplicate";
	}
	 this.theContestants.push(player);
  }

}
