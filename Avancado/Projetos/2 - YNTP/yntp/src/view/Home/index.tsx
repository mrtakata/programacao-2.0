import React from 'react';
import { theme } from '@chakra-ui/react' 

import PlayerField from '../../components/PlayerField';
import Navbar from '../../components/Navbar';
import GameBoard from '../../components/GameBoard'

import { GameProvider } from '../../context/gameContext';

import { Container } from './styles'
import useRunGame from '../../hooks/useRunGame';

interface HomeProps {
  startGame: () => any
  endGame: () => any
  playerMove: () => any
}

const Home: React.FC<HomeProps>= ({
  startGame,
  endGame,
  playerMove
}) => {

  const functions = {
    startGame,
    endGame,
    playerMove,
  }

  const { boardState } = useRunGame()
  return (
    <GameProvider functions={functions}>
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
