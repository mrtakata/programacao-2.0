import React from 'react';
import { Box, theme } from'@chakra-ui/react'

import { Board } from './styles'

const GameBoard: React.FC = () => {
  return (
    <Box
      display="flex"
      pt="4rem"
    >
      <Board>
        GameBoard
      </Board>
    </Box>
  )
}

export default GameBoard
