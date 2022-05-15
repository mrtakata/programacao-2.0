import React from 'react';
import { Box, theme } from '@chakra-ui/react'

const Navbar: React.FC = () => {

  const showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      console.log(text)
      alert(text)
    };
    reader.readAsText(e.target.files[0])
  }


  return (
    <Box
      height="80px"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      px="2rem"
      backgroundColor={theme.colors.blackAlpha[50]}
      color={theme.colors.blackAlpha[800]}
      
    >
      <input type="file" onChange={showFile} />
    </Box>
  )
}

export default Navbar;
