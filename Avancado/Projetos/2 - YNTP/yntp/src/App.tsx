import React from 'react';
import useInitialize from './hooks/useInitialize';

import Home from './view/Home'

const App: React.FC = () => {
  // ver arquivo hooks/useInitialize
  useInitialize()
  
  return <Home />
}

export default App;
