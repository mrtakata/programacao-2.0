import { AI } from "./Model/AI";

export class PlayerManager {
    private playerArray: AI[];
    constructor() {
    };

    public setPlayer(aiName: string, port: number) {
        const newPlayer = require(`./PresetAI/${aiName}`);
        this.playerArray[port] = newPlayer.getPlayer();
    }

    public getPlayerList(): string[] {
        return [];
    }

    public getPlayerMoves(): string[] {
        const playerMoves: string[] = [];
        // Consider two players
        // TODO: set timeout
        for (let i = 0; i < 2; i++) {
            playerMoves[i] = this.playerArray[i].nextMove();
        }

        return playerMoves;
    }
}