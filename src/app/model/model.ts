export class Match {

public winner: String;

constructor(public firstContestant: String, public secondContestant: String) {
         this.winner = '';
      }
/* sets the winner of the particular match */
  setWinner(winner: String) {
    if (winner == null) {
      throw "winner cannot be null";
    } else if (winner.trim() == '') {
      throw "winner cannot be empty";
    } else if (winner != this.firstContestant && winner != this.secondContestant) {
      throw "winner must be a contestant in the match";
    }
    this.winner = winner;
  }

  /* returns the winner of the particular match*/
  getWinner() {
    return this.winner;
  }

  }
}
