import { styled } from 'styled-components'

export const StyledCounter = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 142px;
  height: 40px;
  padding: 10px;
  font-family: '${({ theme }) => theme.font}', sans-serif;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.palette.primary};
  background-color: ${({ theme }) => theme.colors.palette.background};
  border: 1px solid ${({ theme }) => theme.colors.palette.primary};
  border-radius: 12px;
  transition-duration: 0.5s;

  &:hover {
    border-radius: 20px;
  }
`

export const StyledCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  width: 42px;
`
