import '@testing-library/jest-dom';

describe("Starting a new game should", () => {
  
    test("Have two players registered", async () => {
      let game = new Game(player1, player2)

      game.start()
  
      expect(game.player1).toEqual(player1);
      expect(game.player1).toEqual(player2);
    });

})