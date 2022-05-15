import React from 'react';
import { theme } from '@chakra-ui/react' 

import PlayerField from '../../components/PlayerField';
import Navbar from '../../components/Navbar';
import GameBoard from '../../components/GameBoard'

import usePlayerList from '../../hooks/usePlayerList'

import { GameProvider } from '../../context/gameContext';

import { Container } from './styles'

const Home: React.FC = () => {
  const { playerList } = usePlayerList()

  return (
    <GameProvider>
      <Navbar />
      <Container>
        <PlayerField
          color={theme.colors.blue[800]}
          options={playerList}
          player="1"
        />
        <GameBoard />
        <PlayerField
          color={theme.colors.red[800]}
          options={playerList}
          player="2"
        />
      </Container>
    </GameProvider>
  )
}

export default Home
