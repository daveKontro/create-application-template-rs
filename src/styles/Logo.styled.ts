import { styled, keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(0.8);
  }

  50% {
    opacity: 1.0;
    transform: scale(1.2);
  }

  100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
`

export const StyledLogo = styled.img`
  height: 240px;
  pointer-events: none;
  animation: ${pulse} infinite 10s ease;
`
