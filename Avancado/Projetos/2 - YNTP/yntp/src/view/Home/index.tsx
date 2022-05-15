import React from 'react';
import { theme } from '@chakra-ui/react' 

import PlayerField from '../../components/PlayerField';
import Navbar from '../../components/Navbar';
import GameBoard from '../../components/GameBoard'

import usePlayer from '../../hooks/usePlayer'

import { Container } from './styles'

const Home: React.FC = () => {
  const { optionsPlayer1, optionsPlayer2 } = usePlayer()

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <PlayerField
          color={theme.colors.blue[800]}
          options={optionsPlayer1}
        />
        <GameBoard />
        <PlayerField
          color={theme.colors.red[800]}
          options={optionsPlayer2}
        />
      </Container>
    </React.Fragment>
  )
}

export default Home
