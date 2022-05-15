import { BoardState } from "../interfaces/BoardState";
import { cloneDeep } from "lodash";

const defaultSize = 10;
export class BoardController{
    private boardState: BoardState;

    constructor(sizeX?: number, sizeY?: number) {
        this.boardState.boardSize.positionX = sizeX || defaultSize;
        this.boardState.boardSize.positionY = sizeY || defaultSize;
        this.boardState.playerPositions = [];
        this.boardState.playerPositions = [];
        this.boardState.playerPositions[0] = {
            positionX: 0,
            positionY: 0
        }
        this.boardState.playerPositions[1] = {
            positionX: this.boardState.boardSize.positionX - 1,
            positionY: this.boardState.boardSize.positionY - 1
        }
        this.paintBoardWithPlayerColor();
    }

    public getBoardState(){
        return this.boardState;
    }

    /**
     * Paints the squares where the players lies
     */
    private paintBoardWithPlayerColor() {
        if (this.boardState.playerPositions[0] === this.boardState.playerPositions[1]) {
            return;
        }
        for (let playerIndex = 0; playerIndex < 2; playerIndex++) {
            const playerSquareIndexes = this.boardState.playerPositions[playerIndex];
            this.boardState.board
            [playerSquareIndexes.positionX]
            [playerSquareIndexes.positionY] = playerIndex + 1;

            if (this.boardState.playerPositions[playerIndex] === this.boardState.cookiePositions[0]) {
                this.boardState.board
                [playerSquareIndexes.positionX + 1]
                [playerSquareIndexes.positionY] = playerIndex + 1;
                
                this.boardState.board
                [playerSquareIndexes.positionX - 1]
                [playerSquareIndexes.positionY] = playerIndex + 1;
                
                this.boardState.board
                [playerSquareIndexes.positionX]
                [playerSquareIndexes.positionY + 1] = playerIndex + 1;
                
                this.boardState.board
                [playerSquareIndexes.positionX]
                [playerSquareIndexes.positionY - 1] = playerIndex + 1;
                
                this.boardState.board
                [playerSquareIndexes.positionX + 1]
                [playerSquareIndexes.positionY + 1] = playerIndex + 1;
                
                this.boardState.board
                [playerSquareIndexes.positionX - 1]
                [playerSquareIndexes.positionY + 1] = playerIndex + 1;
                
                this.boardState.board
                [playerSquareIndexes.positionX + 1]
                [playerSquareIndexes.positionY - 1] = playerIndex + 1;
                
                this.boardState.board
                [playerSquareIndexes.positionX - 1]
                [playerSquareIndexes.positionY - 1] = playerIndex + 1;
            }
        }
        
    }

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
            // Out of boundaries scenario will revert position so player doesn't move
            Object.keys(this.boardState.playerPositions[playerIndex]).forEach((key: string) => {
                const currentPosition = this.boardState.playerPositions[playerIndex][key];
                if (currentPosition < 0 || currentPosition > this.boardState.boardSize[key]) {
                    this.boardState.playerPositions[playerIndex][key] = previousPosition;
                }
            })
        })
        this.paintBoardWithPlayerColor();
    }
}