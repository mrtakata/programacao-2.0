import { createContext, useState } from "react";

export const GameContext = createContext({
  isRunning: false,
  selectedAIs: {},
  setRunningGame: (_state) => {},
  setPlayerAI: (_player, _ai) => {},
  startGame: () => {},
  endGame:  () => {},
  playerMove:  () => {},
})



export const GameProvider = ({ children, functions }) => {
  const [isRunning, setRunning] = useState(false)
  const [selectedAIs, setSelectedAIs] = useState({})
  const { startGame, endGame, playerMove } = functions

  const setRunningGame = (state) => {
    setRunning(state)
  }

  const setPlayerAI = (player, ai) => {
    setSelectedAIs(ais => ({
      ...ais,
      [player]: ai,
    }))
  }

  return (
    <GameContext.Provider value={{
      setRunningGame,
      isRunning,
      setPlayerAI,
      selectedAIs,
      startGame,
      endGame,
      playerMove,
    }}>
      {children}
    </GameContext.Provider>
  )
}
