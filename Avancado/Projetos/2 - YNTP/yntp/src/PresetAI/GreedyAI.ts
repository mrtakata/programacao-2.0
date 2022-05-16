import { BoardState } from "../engine/interfaces/BoardState";
import { AI } from "../Model/AI";

export function getPlayer() {
    return new GreedyAI("Hehe");
}

class GreedyAI extends AI {
    constructor(name: string) {
        super(name);
    }
    public nextMove(boardState: BoardState): string {
        return "Greedy";
    }
    public getAIName(): string {
        return this.AIName;
    }
}
