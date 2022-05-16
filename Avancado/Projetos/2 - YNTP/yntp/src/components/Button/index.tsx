import React from 'react';
import { Button as ChakraButton, theme } from'@chakra-ui/react'

interface ButtonProps  {
  onClick: () => any
  color?: string
  children: string
}

const Button: React.FC<ButtonProps> = ({ onClick, color, children }) => {

  return (
    <ChakraButton
      onClick={onClick}
      h="3rem"
      p="1rem"
      border="none"
      borderRadius="0.5rem"
      backgroundColor={color}
      color={theme.colors.white}
      boxShadow={theme.shadows.base}
      cursor="pointer"
      my="1rem"
    >
      {children}
    </ChakraButton>
  )
}

export default Button
