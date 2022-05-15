import { AI } from "../Model/AI";

export function getPlayer() {
    if (Math.random())
    return new RandomAI("Hehe");
}

class RandomAI extends AI {
    constructor(name: string) {
        super(name);
    }
    public nextMove(): string {
        return "hehe";
    }
    public getAIName(): string {
        return this.AIName;
    }
}
