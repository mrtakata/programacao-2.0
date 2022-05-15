import React from 'react';
import { Box } from '@chakra-ui/react'

import Dropdown from '../Dropdown';

interface OptionProps {
  value: string
  label: string
} 

interface PlayerFieldProps {
  color: string
  options: OptionProps[]
}

const PlayerField: React.FC<PlayerFieldProps> = ({ color, options }: PlayerFieldProps) => {
  return (
    <Box
      p="2rem"
      backgroundColor={color}
      width={"min(20%, 350px)"}
    >
      <Dropdown options={options} />
    </Box>
  )
}

export default PlayerField

