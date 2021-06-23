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
    getContestants() : String[] {
      return this.theContestants;
  }

  /* adds a single contestant to the registry */
  addContestant(player: String) {
  if (player == null) {
		 throw "player is null";
	} else if (player.trim() == '') {
		 throw "player is empty";
	}

  for (var contestant in this.theContestants) {
    if (this.theContestants[contestant].toLowerCase() == player.toLowerCase()) {
      throw "player is a duplicate"
    }
  }
	 this.theContestants.push(player);
  }

}
