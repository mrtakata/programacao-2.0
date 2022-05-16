import styled from 'styled-components'
import { Box, theme } from '@chakra-ui/react' 

export const CellStyled = styled(Box)`
  background-color: ${theme.colors.white};
  height: 5vw;
  width: 5vw;
  background-color: ${(props) => {
    switch (props.playerindex) {
      case 0:
        return theme.colors.red[900]
      case 1:
        return theme.colors.blue[900]
      default:
    }
    switch (props.value) {
      case 0:
        return theme.colors.gray[400]
      case 1:
        return theme.colors.red[400]
      case 2:
        return theme.colors.blue[400]
      default:
    }
  }};
  margin-bottom: 2rem;
`