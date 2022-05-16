import { BoardState } from "../engine/interfaces/BoardState";
import { AI } from "../Model/AI";

export function getPlayer() {
    return new RandomAI("Hehe");
}

class RandomAI extends AI {
    constructor(name: string) {
        super(name);
    }
    public nextMove(boardState: BoardState): string {
        return "right";
    }
    public getAIName(): string {
        return this.AIName;
    }
}
