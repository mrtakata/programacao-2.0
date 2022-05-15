import { BoardState } from "../interfaces/BoardState";

const defaultSize = 10;
export class BoardController{
    private boardState: BoardState;
    constructor(sizeX?: number, sizeY?: number) {
        this.boardState.boardSize.xSize = sizeX || defaultSize;
        this.boardState.boardSize.ySize = sizeY || defaultSize;
    }
    public getBoardState(){
        return this.boardState;
    };
    private paintBoard(){
        
    };
    public updateBoardState(playerMoves: string[]) {
        playerMoves.forEach((move, playerIndex) => {
            const previousPosition = this.boardState.playerPositions[playerIndex];
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
            Object.keys(this.boardState.playerPositions[playerIndex]).forEach((key: string) => {
                const currentPosition = this.boardState.playerPositions[playerIndex][key];
                
            })
        })
        this.paintBoard();
    }
}