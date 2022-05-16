import { Place } from './Place';

export interface BoardState {
    board?: number[][],
    playerPositions: Place[],
    cookiePositions: Place,
    boardSize: Place
}