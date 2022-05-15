import React from 'react';
import { Box } from '@chakra-ui/react'

import Dropdown from '../Dropdown'
import { PlayerFieldProps } from './types';


const PlayerField: React.FC<PlayerFieldProps> = ({ color, options, player }: PlayerFieldProps) => {
  return (
    <Box
      p="2rem"
      backgroundColor={color}
      width={"min(20%, 350px)"}
    >
      <Dropdown
        options={options}
        player={player}
      />
    </Box>
  )
}

export default PlayerField

