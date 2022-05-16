import React from 'react';
import { Box } from '@chakra-ui/react'

import usePlayerList from '../../hooks/usePlayerList'

import Dropdown from '../Dropdown'

import { PlayerFieldProps } from './types';

const PlayerField: React.FC<PlayerFieldProps> = ({ color, player }: PlayerFieldProps) => {
  const { playerList } = usePlayerList()

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
    </Box>
  )
}

export default PlayerField
