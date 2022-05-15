import { Place } from './Place';

export interface BoardState {
    board: Number[][],
    playerPositions: Place[],
    cookiePositions: Place[]
}