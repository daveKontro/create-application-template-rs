import { styled } from 'styled-components'

export const StyledCounter = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 142px;
  padding: 10px;
  font-size: 18px;
  font-family: '${({ theme }) => theme.font}';
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
