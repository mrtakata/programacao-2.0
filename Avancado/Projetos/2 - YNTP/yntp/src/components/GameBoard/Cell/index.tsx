import React, { useContext } from 'react';
import { Box, theme } from'@chakra-ui/react'


const Cell: React.FC<any> = (cellState: {
    cellValue,
    havePlayer,
    haveCookie
}) => {
  console.log("cell?");
  return (
    <Box
      display="flex"
      flexDirection="column"
      pt="4rem"
    >
      oi
    </Box>
  )
}
export default Cell
