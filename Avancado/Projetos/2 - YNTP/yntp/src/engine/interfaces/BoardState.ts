import { Place } from './Place';

export interface BoardState {
    board: number[][],
    playerPositions: Place[],
    cookiePositions: Place[],
    boardSize: {
        xSize: number,
        ySize: number
    }
}