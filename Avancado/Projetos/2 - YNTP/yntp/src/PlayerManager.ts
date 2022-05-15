import { AI } from "./Model/AI";

export class PlayerManager {
    private playerArray: AI[] = [];

    public setPlayer(aiName: string, port: number) {
        const newPlayer = require(`./PresetAI/${aiName}`);
        this.playerArray[port] = newPlayer?.getPlayer(aiName);
    }

    public getPlayerList(): string[] {
        return this.playerArray.map((player) => {
            return player.getAIName();
        });
    }

    public getPlayerMoves(): string[] {
        const playerMoves: string[] = [];
        // Consider two players
        // TODO: set timeout
        for (let i = 0; i < 2; i++) {
            playerMoves[i] = this.playerArray[i]?.nextMove();
        }

        return playerMoves;
    }
}