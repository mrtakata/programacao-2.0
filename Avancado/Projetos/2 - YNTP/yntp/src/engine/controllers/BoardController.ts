import { Place } from "../interfaces/Place";
import { BoardState } from "../interfaces/BoardState";
import { cloneDeep } from "lodash";

const defaultSize = 10;
export class BoardController{
    private boardState: BoardState;

    constructor(sizeX?: number, sizeY?: number) {
        this.boardState = {
            boardSize: {
                positionX: sizeX || defaultSize,
                positionY: sizeY || defaultSize
            },
            playerPositions: [],
            board: [
                [1, 2],
                [2, 1]
            ],
            cookiePositions: {
                positionX: -1,
                positionY: -1
            }
        }
        for (let i = 0; i < sizeY; i++) {
            this.boardState.board[i] = [];
            for (let j = 0; j < sizeX; j++) {
                this.boardState.board[i].push(0)
            }
        }
        this.boardState.playerPositions[0] = this.generateRandomPlace();
        this.boardState.playerPositions[1] = this.getMirroredPosition(this.boardState.playerPositions[0]);
        // this.paintBoardWithPlayerColor();
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
                    this.boardState.playerPositions[playerIndex][key] = previousPosition[key];
                }
            })
        })
        // this.paintBoardWithPlayerColor();
    }

    private generateRandomPlace(): Place{
               
        const xValue: number = Math.floor(Math.random() * (this.boardState.boardSize.positionX));
        const yValue: number = Math.floor(Math.random() * (this.boardState.boardSize.positionY));

        let place: Place = {
            positionX: xValue,
            positionY: yValue
        }

        return place;

    }

    private getMirroredPosition(place: Place): Place{
        return {
            positionX: this.boardState.boardSize.positionX - (place.positionX) - 1,
            positionY: this.boardState.boardSize.positionY - (place.positionY) - 1,
        };
    }

    private isCookieValidPosition(place: Place){
        
        return place.positionX < this.boardState.boardSize.positionX && 
               place.positionY < this.boardState.boardSize.positionY &&
               place.positionX >= 0 &&
               place.positionX >= 0 &&
               place != this.boardState.playerPositions[0] &&
               place != this.boardState.playerPositions[1]

    }

    public generateCookie(): void{
        let cookiePosition: Place = this.boardState.cookiePositions;

        while (!this.isCookieValidPosition(cookiePosition)){
            cookiePosition = this.generateRandomPlace();
        }

        this.boardState.cookiePositions = cookiePosition;

    }

}