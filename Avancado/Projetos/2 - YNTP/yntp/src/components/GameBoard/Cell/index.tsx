import React, { useContext } from 'react';
import { Box, theme } from'@chakra-ui/react'


const Cell: React.FC<any> = (cellState: {
    cellValue,
    havePlayer,
    haveCookie
}) => {
  return (
    <>
        <Box
            display="flex"
            flexDirection="column"
            pt="4rem"
        >
        </Box>
    </>
  )
}
export default Cell