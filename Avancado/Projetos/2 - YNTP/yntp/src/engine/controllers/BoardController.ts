import { BoardState } from "../interfaces/BoardState";
import { cloneDeep } from "lodash";
const defaultSize = 10;
export class BoardController{
    private boardState: BoardState;
    constructor(sizeX?: number, sizeY?: number) {
        this.boardState.boardSize.positionX = sizeX || defaultSize;
        this.boardState.boardSize.positionY = sizeY || defaultSize;
    }
    public getBoardState(){
        return this.boardState;
    };
    private paintBoard(){
        
    };
    public updateBoardState(playerMoves: string[]) {
        playerMoves.forEach((move, playerIndex) => {
            const previousPosition = cloneDeep(this.boardState.playerPositions[playerIndex]);
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
                if (currentPosition < 0 || currentPosition > this.boardState.boardSize[key]) {
                    this.boardState.playerPositions[playerIndex][key] = previousPosition;
                }
            })
        })
        this.paintBoard();
    }
}