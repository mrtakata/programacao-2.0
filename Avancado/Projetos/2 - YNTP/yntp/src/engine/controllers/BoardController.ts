import { BoardState } from "../interfaces/BoardState";

export class BoardController{
    private boardState: BoardState;
    constructor() {
    }
    public getBoardState(){
        return this.boardState;
    };
    private paintBoard(){
        
    };
    public updateBoardState(playerMoves: string[]) {
        playerMoves.forEach((move, playerIndex) => {
            switch (move) {
                case "up":
                    this.boardState.playerPositions[playerIndex].positionY -= 1;
                    break;
                case "down":
                    this.boardState.playerPositions[playerIndex].positionY += 1;
                    break;
                case "left":
                    this.boardState.playerPositions[playerIndex].positionX -= 1;
                    break;
                case "right":
                    this.boardState.playerPositions[playerIndex].positionX += 1;
                    break;
                default:
            }
            Object(this.boardState.playerPositions[playerIndex]).keys.forEach((position) => {
            })
        })
        this.paintBoard();
    }
}