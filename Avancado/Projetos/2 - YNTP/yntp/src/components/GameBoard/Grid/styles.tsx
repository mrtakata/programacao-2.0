import styled from 'styled-components'
import { Box, theme } from '@chakra-ui/react' 

export const RenderGridStyled = styled(Box)`
    display: grid;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
`