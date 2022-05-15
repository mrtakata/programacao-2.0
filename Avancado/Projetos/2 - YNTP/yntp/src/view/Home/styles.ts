import styled from 'styled-components'
import { Box, theme } from '@chakra-ui/react' 

export const Container = styled(Box)`
    width: 100vw;
    min-height: min(100vh - 80px);
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.black};
    color: ${theme.colors.gray[50]};
`