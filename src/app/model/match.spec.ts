import { Match } from './match';

describe('MatchModel tests', () => {
  describe('Constructor and Initialization', () => {
    it('should be truthy', () => {
      var result = new Match('Jim','Pam');
      expect(result).toBeTruthy();;
    });

    it('should return Jim as the first contestant', () => {
      var result = new Match('Jim','Pam');
      expect(result.firstContestant).toEqual('Jim');
    });

    it('should return Pam as the second contestant', () => {
      var result = new Match('Jim','Pam');
      expect(result.secondContestant).toEqual('Pam');
    });

    it('should have empty string as initial winner', () => {
      var result = new Match('Jim','Pam');
      expect(result.getWinner()).toEqual('');
    });
  });

  describe('Set winner tests', () => {
    it('should set and return winner as Jim', () => {
      var match1 = new Match('Jim','Pam');
      match1.setWinner(match1.firstContestant);
      var result = match1.getWinner();
      expect(result).toEqual('Jim');
    });

    it('should set and return winner as Pam', () => {
      var match1 = new Match('Jim','Pam');
      match1.setWinner(match1.secondContestant);
      var result = match1.getWinner();
      expect(result).toEqual('Pam');
    });

    it('should set and return winner as expected- 2 matches', () => {
      var match1 = new Match('Michael','Kevin');
      var match2 = new Match('Darryl','Stanley');

      match1.setWinner(match1.firstContestant);
      match2.setWinner(match2.secondContestant);

      var result1 = match1.getWinner();
      var result2 = match2.getWinner();

      expect(result1).toEqual('Michael');
      expect(result2).toEqual('Stanley');
    });

    it('should set and return winner as expected- 4 matches', () => {
      var match1 = new Match('Michael','Kevin');
      var match2 = new Match('Darryl','Stanley');
      var match3 = new Match('Jim','Pam');
      var match4 = new Match('Creed','Ryan');

      match1.setWinner(match1.secondContestant);
      match2.setWinner(match2.firstContestant);
      match3.setWinner(match3.secondContestant);
      match4.setWinner(match4.firstContestant);

      var result1 = match1.getWinner();
      var result2 = match2.getWinner();
      var result3 = match3.getWinner();
      var result4 = match4.getWinner();

      expect(result1).toEqual('Kevin');
      expect(result2).toEqual('Darryl');
      expect(result3).toEqual('Pam');
      expect(result4).toEqual('Creed');
    });
  });

  describe('Null winner', () => {
    it('should not allow null names', () => {
      var match1 = new Match('Jim','Pam');
      var result = function () {
        match1.setWinner(null);
      }

      expect(result).toThrow('winner cannot be null');
    });

    it('should not allow null names- test 2', () => {
      var match1 = new Match('Michael','Kevin');
      var match2 = new Match('Darryl','Stanley');
      var result = function () {
        match1.setWinner(match1.firstContestant);
        match2.setWinner(null);
      }

      expect(result).toThrow('winner cannot be null');
    });
  });

  describe('Empty winner', () => {
    it('should not allow empty winner', () => {
      var match1 = new Match('Michael','Kevin');
      var result = function () {
        match1.setWinner('');
      }

      expect(result).toThrow('winner cannot be empty');
    });

    it('should not allow empty names- test 2', () => {
      var match1 = new Match('Michael','Kevin');
      var match2 = new Match('Darryl','Stanley');
      var result = function () {
        match1.setWinner(match1.firstContestant);
        match2.setWinner('     ');
      }

      expect(result).toThrow('winner cannot be empty');
    });
  });
});
