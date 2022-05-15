import { createContext, useState } from "react";

export const GameContext = createContext({
  isRunning: false,
  selectedAIs: {},
  setRunningGame: (_state) => {},
  setPlayerAI: (_player, _ai) => {},
})

export const GameProvider = ({ children }) => {
  const [isRunning, setRunning] = useState(false)
  const [selectedAIs, setSelectedAIs] = useState({})

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
        selectedAIs
      }}>
          {children}
      </GameContext.Provider>
  )
}