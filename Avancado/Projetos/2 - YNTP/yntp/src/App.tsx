import { Button } from '@chakra-ui/react';
import React from 'react';
import useInitialize from './hooks/useInitialize';
import useRunGame from './hooks/useRunGame';

import Home from './view/Home'

const App: React.FC = () => {
  // ver arquivo hooks/useInitialize
  const {startGame, endGame, playerMove } = useRunGame("RandomAI", "GreedyAI");
  
  return <Home
    startGame={startGame}
    endGame={endGame}
    playerMove={playerMove}
  />
}

export default App;
