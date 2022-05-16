import React from 'react';
import useRunGame from './hooks/useRunGame';

import Home from './view/Home'

const App: React.FC = () => {
  // ver arquivo hooks/useInitialize
  const {startGame, endGame, playerMove, boardState } = useRunGame();
  
  return <Home
    startGame={startGame}
    endGame={endGame}
    playerMove={playerMove}
    boardState={boardState}
  />
}

export default App;
