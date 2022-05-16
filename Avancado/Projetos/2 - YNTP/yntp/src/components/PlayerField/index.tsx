import React from 'react';
import { Box, theme } from '@chakra-ui/react'

import usePlayerList from '../../hooks/usePlayerList'

import Dropdown from '../Dropdown'
import Button from '../Button'

import { PlayerFieldProps } from './types'

const PlayerField: React.FC<PlayerFieldProps> = ({ color, player }: PlayerFieldProps) => {
  const { playerList } = usePlayerList()
  const handleNextMove = () => {
    console.log('proxima jogada')
  }

  return (
    <Box
      p="2rem"
      backgroundColor={color}
      width={"min(20%, 350px)"}
    >
      <Dropdown
        options={playerList}
        player={player}
      />

      <Button
        color={theme.colors.blackAlpha[500]}
        onClick={handleNextMove}
      >
        Next move
      </Button>
    </Box>
  )
}

export default PlayerField
