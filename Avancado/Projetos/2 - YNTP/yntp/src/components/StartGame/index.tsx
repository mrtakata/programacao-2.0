import React, { useContext } from 'react';
import { Box, theme } from '@chakra-ui/react'
import { GameContext } from '../../context/gameContext';
import Button from '../Button';


const StartGame: React.FC = () => {
  const { isRunning, setRunningGame, startGame } = useContext(GameContext)

  const handleStartGame = () => {
    setRunningGame(true)
    startGame()
  }

  return !isRunning ? (
    <Box
      backgroundColor={theme.colors.blackAlpha[700]}
      width="40vw"
      height="40vw"
      display="flex"
      justifyContent="center"
      position="absolute"
      alignItems="center"
    >
      <Button
        onClick={handleStartGame}
        color={theme.colors.cyan[500]}
      >
        START GAME
      </Button>
    </Box>
  ) : null
}

export default StartGame
