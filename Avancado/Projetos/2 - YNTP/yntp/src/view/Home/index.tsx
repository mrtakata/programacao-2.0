import React from 'react';
import { theme } from '@chakra-ui/react' 
import { BoardState } from '../../engine/interfaces/BoardState';

import PlayerField from '../../components/PlayerField';
import Navbar from '../../components/Navbar';
import GameBoard from '../../components/GameBoard'

import { GameProvider } from '../../context/gameContext';

import { Container } from './styles'

interface HomeProps {
  startGame: () => any
  endGame: () => any
  playerMove: () => any
  boardState: BoardState
}

const Home: React.FC<HomeProps>= ({
  startGame,
  endGame,
  playerMove,
  boardState
}) => {

  const runGameProps = {
    startGame,
    endGame,
    playerMove,
    boardState,
  }

  return (
    <GameProvider runGameProps={runGameProps}>
      <Navbar />
      <Container>
        <PlayerField
          color={theme.colors.blue[800]}
          player="1"
        />
        <GameBoard {...boardState}/>
        <PlayerField
          color={theme.colors.red[800]}
          player="2"
        />
      </Container>
    </GameProvider>
  )
}

export default Home
