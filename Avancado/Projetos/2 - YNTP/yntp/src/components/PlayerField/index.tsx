import React, { useContext } from 'react';
import { Box, theme } from '@chakra-ui/react'

import usePlayerList from '../../hooks/usePlayerList'

import Dropdown from '../Dropdown'
import Button from '../Button'

import { PlayerFieldProps } from './types'
import { GameContext } from '../../context/gameContext';

const PlayerField: React.FC<PlayerFieldProps> = ({ color, player }: PlayerFieldProps) => {
  
  const { playerList } = usePlayerList()
  const { playerMove } = useContext(GameContext)

  const handleNextMove = () => {
    playerMove()
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
