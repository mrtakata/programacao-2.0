import React, { useContext } from 'react';
import { Box, theme } from'@chakra-ui/react'
import { CellStyled } from './styles';


const Cell: React.FC<any> = (cellState: {
    cellValue: number,
    playerIndex: number,
    hasCookie: boolean
}) => {
  return (
    <CellStyled
      value={cellState.cellValue}
      playerindex={cellState.playerIndex}
      hascookie={cellState.hasCookie.toString()}
    >
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
