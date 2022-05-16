import React from 'react';
import useRunGame from './hooks/useRunGame';

import Home from './view/Home'

const App: React.FC = () => {
  // ver arquivo hooks/useInitialize
  const {startGame, endGame, playerMove } = useRunGame();
  
  return <Home
    startGame={startGame}
    endGame={endGame}
    playerMove={playerMove}
  />
}

export default App;
