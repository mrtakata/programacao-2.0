import { Button } from '@chakra-ui/react';
import React from 'react';
import useInitialize from './hooks/useInitialize';
import useRunGame from './hooks/useRunGame';

import Home from './view/Home'

const App: React.FC = () => {
  // ver arquivo hooks/useInitialize
  useRunGame("RandomAI", "GreedyAI");
  
  return <Home />
}

export default App;
