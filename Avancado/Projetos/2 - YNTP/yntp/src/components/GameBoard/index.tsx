import React, { useContext } from 'react';
import { Box, theme } from'@chakra-ui/react'

import { Board } from './styles'
import StartGame from '../StartGame';
import Button from '../Button';
import { GameContext } from '../../context/gameContext';
import { BoardState } from '../../engine/interfaces/BoardState';
import Cell from './Cell';
import { Place } from '../../engine/interfaces/Place';


const RenderGrid: React.FC<BoardState> = ({
  board,
  cookiePositions,
  playerPositions
}: BoardState) => {
  return <>
    {
      board?.map((row: Array<number>, rowIndex: number) => {
        row?.map((cellValue: number, columnIndex: number) => {
          const currentPlace: Place = {
            positionX: columnIndex,
            positionY: rowIndex
          }
          
          return (
            <Cell
                cellValue= {cellValue}
                havePlayer= {playerPositions.find((playerPosition) => playerPosition === currentPlace)}
                haveCookie= {cookiePositions === currentPlace}
            />
          )
        })
      })
    }
  </>
}

const GameBoard: React.FC<BoardState> = (boardState: BoardState) => {
  const { isRunning, setRunningGame, endGame } = useContext(GameContext)

  const handleRestartGame = () => {
    endGame()
    setRunningGame(false)
  }

  console.log(boardState);
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
