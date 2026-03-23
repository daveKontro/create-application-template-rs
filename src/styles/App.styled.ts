import { styled, keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: max(1em, 18px);
  color: ${({ theme }) => theme.colors.palette.primary};
  background-color: ${({ theme }) => theme.colors.palette.background};
`

export const StyledHeader = styled.header`
  text-align: center;
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2vh;
  animation: 3s ${fadeIn} ease;
`

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.link.regular};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.link.hover};
  }
`
