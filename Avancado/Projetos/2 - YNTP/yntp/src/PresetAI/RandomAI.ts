import { AI } from "../Model/AI";

export function getPlayer() {
    return new RandomAI();
}

class RandomAI extends AI {
    public nextMove(): string {
        return "hehe";
    }
}
