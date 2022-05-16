import { useState } from "react";
import { GameManager } from "../engine/controllers/GameManager";
import { PlayerManager } from "../PlayerManager";

const playerManager = new PlayerManager();

const useRunGame = (player1: string, player2: string) => {
  const [gameManager, setGameManager] = useState<any>()

    playerManager?.setPlayer(player1, 0);
    playerManager?.setPlayer(player2, 1);

    const startGame = () => {
      const gameManagerInst = new GameManager(1, 3, 3, 10, 10);
      setGameManager(gameManagerInst)
      gameManagerInst.setupGame();
    }
    
    const endGame = () => {
      gameManager.endGame()
    }

    const playerMove = () => {
      gameManager.runTurn(playerManager.getPlayerMoves(gameManager.getBoardState()))
    }

    return {
      startGame,
      endGame,
      playerMove
    }
  }
  
export default useRunGame