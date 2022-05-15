export abstract class AI {
    protected AIName: string;
    abstract getAIName(): string;
    abstract nextMove();
    constructor(name: string) {
        this.AIName = name;
    }
}