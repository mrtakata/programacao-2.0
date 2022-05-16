import { useState } from "react"
import { GameManager } from "../engine/controllers/GameManager";
import { BoardState } from "../engine/interfaces/BoardState";
import { PlayerManager } from "../PlayerManager";

const useRunGame = (player1: string, player2: string) => {
    console.log('run game');
    const playerManager = new PlayerManager();
    playerManager?.setPlayer(player1, 0);
    playerManager?.setPlayer(player2, 1);

    const gameManager = new GameManager(1, 3, 3, 10, 10);
    gameManager.setupGame();
    const mockGameState: BoardState = {
      boardSize: {
        positionX: 3,
        positionY: 3
      },
      board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      playerPositions: [
        {
          positionX: 0,
          positionY: 0
        },
        {
          positionX: 2,
          positionY: 2
        }
      ],
      cookiePositions: {
          positionX: -1,
          positionY: -1
      }
    }
    // Game loop
    while (1) {
      if (gameManager.endGame()) {
        break;
      }
      // get input
      // run turn
      gameManager.runTurn(playerManager.getPlayerMoves(mockGameState))
      // render
    }
    return {}
  }
  
export default useRunGame