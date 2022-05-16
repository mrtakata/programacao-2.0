import styled from 'styled-components'
import { Box, theme } from '@chakra-ui/react' 

export const CellStyled = styled(Box)`
  background-color: ${theme.colors.white};
  height: 5vw;
  width: 5vw;
  background-color: ${theme.colors.green[100]};
  margin-bottom: 2rem;
`