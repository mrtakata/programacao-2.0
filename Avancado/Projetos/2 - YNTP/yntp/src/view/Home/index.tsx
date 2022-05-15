import React from 'react';
import { theme } from '@chakra-ui/react' 

import PlayerField from '../../components/PlayerField';
import Navbar from '../../components/Navbar';
import GameBoard from '../../components/GameBoard'

import usePlayerList from '../../hooks/usePlayerList'

import { Container } from './styles'

const Home: React.FC = () => {
  const { playerList } = usePlayerList()

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <PlayerField
          color={theme.colors.blue[800]}
          options={playerList}
        />
        <GameBoard />
        <PlayerField
          color={theme.colors.red[800]}
          options={playerList}
        />
      </Container>
    </React.Fragment>
  )
}

export default Home
