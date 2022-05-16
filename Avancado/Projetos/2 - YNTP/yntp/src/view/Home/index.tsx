import React from 'react';
import { theme } from '@chakra-ui/react' 

import PlayerField from '../../components/PlayerField';
import Navbar from '../../components/Navbar';
import GameBoard from '../../components/GameBoard'

import { GameProvider } from '../../context/gameContext';

import { Container } from './styles'
import useRunGame from '../../hooks/useRunGame';

const Home: React.FC = () => {

  const { boardState } = useRunGame()
  return (
    <GameProvider>
      <Navbar />
      <Container>
        <PlayerField
          color={theme.colors.blue[800]}
          player="1"
        />
        <GameBoard
          {...boardState}
        />
        <PlayerField
          color={theme.colors.red[800]}
          player="2"
        />
      </Container>
    </GameProvider>
  )
}

export default Home
