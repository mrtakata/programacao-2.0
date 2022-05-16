import React, { useContext } from 'react';
import { Box, theme } from'@chakra-ui/react'

import { Board } from './styles'
import StartGame from '../StartGame';
import Button from '../Button';
import { GameContext } from '../../context/gameContext';


const GameBoard: React.FC = () => {
  const { isRunning, setRunningGame } = useContext(GameContext)

  const handleRestartGame = () => {
    setRunningGame(false)
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        pt="4rem"
      >
        <StartGame />
        <Board>
          GameBoard
        </Board>
        {isRunning && 
          <Button
            onClick={handleRestartGame}
            color={theme.colors.red[500]}
          >
            END GAME
          </Button>
        }
      </Box>
    </>
  )
}

export default GameBoard
