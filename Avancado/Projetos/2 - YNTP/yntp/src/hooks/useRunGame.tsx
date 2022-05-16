import { GameManager } from "../engine/controllers/GameManager";
import { PlayerManager } from "../PlayerManager";

const useRunGame = (player1: string, player2: string) => {
    const playerManager = new PlayerManager();
    playerManager?.setPlayer(player1, 0);
    playerManager?.setPlayer(player2, 1);

    const gameManager = new GameManager(1, 3, 3, 10, 10);
    gameManager.setupGame();

    // Game loop
    while (1) {
      if (gameManager.endGame()) {
        break;
      }
      gameManager.runTurn(playerManager.getPlayerMoves(gameManager.getBoardState()))
      // render
    }

    return {}
  }
  
export default useRunGame