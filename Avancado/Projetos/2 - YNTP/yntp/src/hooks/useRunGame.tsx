import { useContext, useState } from "react";
import { GameContext } from "../context/gameContext";
import { GameManager } from "../engine/controllers/GameManager";
import { PlayerManager } from "../PlayerManager";

const playerManager = new PlayerManager();

const useRunGame = () => {
  const [gameManager, setGameManager] = useState<any>()
  const [boardState, setBoardState] = useState<any>()

  const { selectedAIs } = useContext(GameContext);
  // TODO: selectedAI bug fix
  selectedAIs["1"] && playerManager?.setPlayer(selectedAIs["1"], 0);
  selectedAIs["2"] && playerManager?.setPlayer(selectedAIs["2"], 1);

  const startGame = () => {
    const gameManagerInst = new GameManager(1, 3, 3, 10, 10);
    setGameManager(gameManagerInst)
    gameManagerInst.setupGame();
    console.log('start')
    setBoardState(gameManagerInst.getBoardState())
  }
  
  const endGame = () => {
    gameManager.endGame()
    console.log('end')
  }

  const playerMove = () => {
    console.log('next')
    console.log(playerManager.getPlayerMoves(gameManager.getBoardState()));
    gameManager.runTurn(playerManager.getPlayerMoves(gameManager.getBoardState()))
  }

  return {
    startGame,
    endGame,
    playerMove,
    boardState
  }
}
  
export default useRunGame