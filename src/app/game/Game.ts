import { PiecesColor, Player } from "./Player"

export enum CellColor {
    Black = "Black", White = "White"
}

export class Cell {
    constructor(color: CellColor, piece?: PiecesColor) {
        this.color = color
        this.piece = piece
    }
    color?: CellColor = undefined
    piece?: PiecesColor = undefined
}

export class Game {
    constructor(whites: Player, blacks: Player) {
        this.whites = whites
        this.blacks = blacks
        this.whites.color = PiecesColor.White
        this.blacks.color = PiecesColor.Black
        this.board = new Array<Array<Cell>>(8).fill([])
            .map((row, rowIndex, rowArr) =>
                new Array<Cell>(8).fill({}).map((cell, cellIndex, arr) => new Cell(determineCellColor(rowIndex, cellIndex),
                    determineInitialPiece(rowIndex, cellIndex)))
            );
        console.log(this.board)
    }
    whites: Player
    blacks: Player
    board: Cell[][] = []
    start() {
        //not implemented yet
    }
}

function determineCellColor(row: number, col: number): CellColor {
    if (row % 2 === 0) {
        if (col % 2 === 0) {
            return CellColor.White
        }
        if (col % 2 !== 0) {
            return CellColor.Black
        }
    }
    if (row % 2 !== 0) {
        if (col % 2 === 0) {
            return CellColor.Black
        }
        if (col % 2 !== 0) {
            return CellColor.White
        }
    }
    return CellColor.Black
}

function determineInitialPiece(row: number, col: number): PiecesColor | undefined {
    if (row <= 2) {
        if (row % 2 === 0) {
            if (col % 2 === 0) {
                return undefined
            }
            if (col % 2 !== 0) {
                return PiecesColor.Black
            }
        }
        if (row % 2 !== 0) {
            if (col % 2 === 0) {
                return PiecesColor.Black
            }
            if (col % 2 !== 0) {
                return undefined
            }
        }
    }

    if (row >= 5) {
        if (row % 2 === 0) {
            if (col % 2 === 0) {
                return undefined
            }
            if (col % 2 !== 0) {
                return PiecesColor.White
            }
        }
        if (row % 2 !== 0) {
            if (col % 2 === 0) {
                return PiecesColor.White
            }
            if (col % 2 !== 0) {
                return undefined
            }
        }
    }
    return undefined
}