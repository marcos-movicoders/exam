import '@testing-library/jest-dom';
import { CellColor, Game } from '../../app/game/Game';
import { PiecesColor, Player } from '../../app/game/Player';

describe("Starting a new game should", () => {

    test("Have two players registered", async () => {
        let player1 = new Player("John")
        let player2 = new Player("Mac")
        let game = new Game(player1, player2)

        game.start()

        expect(game.whites).toEqual(player1);
        expect(game.blacks).toEqual(player2);
    });

    test("Player colors attributes are properly set", async () => {
        let game = generateGame()

        game.start()

        expect(game.whites.color).toEqual(PiecesColor.White);
        expect(game.blacks.color).toEqual(PiecesColor.Black);
    });

    test("Board is initialized", async () => {
        let game = generateGame()

        game.start()

        expect(game.board.length).toEqual(8);
        expect(game.board[0].length).toEqual(8);
        expect(game.board[1].length).toEqual(8);
        expect(game.board[2].length).toEqual(8);
        expect(game.board[3].length).toEqual(8);
        expect(game.board[4].length).toEqual(8);
        expect(game.board[5].length).toEqual(8);
        expect(game.board[6].length).toEqual(8);
        expect(game.board[7].length).toEqual(8);
        
    });

    test("Board Cells are properly disposed", async () => {
        let game = generateGame()

        game.start()

        expect(game.board[0][0].color).toEqual(CellColor.White);
        expect(game.board[1][0].color).toEqual(CellColor.Black);
        expect(game.board[7][7].color).toEqual(CellColor.White);
        expect(game.board[0][7].color).toEqual(CellColor.Black);
        expect(game.board[7][0].color).toEqual(CellColor.Black);
        
    });

    test("Pieces are properly disposed", async () => {
        
        let game = generateGame()

        game.start()

        expect(game.board[0][0].piece).toEqual(undefined);
        expect(game.board[1][0].piece).toEqual(PiecesColor.Black);
        expect(game.board[0][7].piece).toEqual(PiecesColor.Black);
        expect(game.board[1][7].piece).toEqual(undefined);
        
    });

    function generateGame(){
        let player1 = new Player("John")
        let player2 = new Player("Mac")
        return new Game(player1, player2)
    }

})