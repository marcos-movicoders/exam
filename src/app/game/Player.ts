export enum PiecesColor {
    Black="Black", White="White"
}

export class Player{
    constructor(name: string){
        this.name = name
    }
    name: string = ""
    color: PiecesColor = PiecesColor.Black
}

