import { BoardState } from "../engine/interfaces/BoardState";

export abstract class AI {
    protected AIName: string;
    abstract getAIName(): string;
    abstract nextMove(boardState: BoardState);
    constructor(name: string) {
        this.AIName = name;
    }
}