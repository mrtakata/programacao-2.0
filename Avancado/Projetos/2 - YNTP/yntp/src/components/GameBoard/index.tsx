import React, { useContext } from 'react';
import { Box, theme } from'@chakra-ui/react'

import { Board } from './styles'
import StartGame from '../StartGame';
import Button from '../Button';
import { GameContext } from '../../context/gameContext';
import { BoardState } from '../../engine/interfaces/BoardState';
import RenderGrid from './Grid';

const GameBoard: React.FC<BoardState> = (boardState: BoardState) => {
  const { isRunning, setRunningGame, endGame } = useContext(GameContext)

  const handleRestartGame = () => {
    endGame()
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
            <RenderGrid
              {...boardState}
            />
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
