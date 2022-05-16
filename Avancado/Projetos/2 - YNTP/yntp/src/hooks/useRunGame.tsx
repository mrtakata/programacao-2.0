import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/gameContext";
import { GameManager } from "../engine/controllers/GameManager";
import { PlayerManager } from "../PlayerManager";

const playerManager = new PlayerManager();

const useRunGame = () => {
  const [gameManager, setGameManager] = useState<any>()

  const { selectedAIs } = useContext(GameContext);

  selectedAIs["1"] && playerManager?.setPlayer(selectedAIs["1"], 0);
  selectedAIs["2"] && playerManager?.setPlayer(selectedAIs["2"], 1);

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
    playerMove,
    boardState: gameManager?.getBoardState()
  }
}
  
export default useRunGame