import styled from 'styled-components'
import { Box, theme } from '@chakra-ui/react' 

export const Board = styled(Box)`
  background-color: ${theme.colors.white};
  height: 40vw;
  width: 40vw;
  color: ${theme.colors.blackAlpha[500]};
`