import React, { useContext } from 'react';
import { Box, theme } from'@chakra-ui/react'
import { CellStyled } from './styles';


const Cell: React.FC<any> = (cellState: {
    cellValue,
    havePlayer,
    haveCookie
}) => {
  return (
    <CellStyled>
      <Box
        display="flex"
        flexDirection="column"
        pt="4rem"
      >
      </Box>
    </CellStyled>
    
  )
}
export default Cell
