import { FC } from 'react'
import { Global, css } from '@emotion/react'
import Orbitron from '../fonts/Orbitron-Regular.woff2'

const GlobalStyles: FC = () => {
  return (
    <Global
      styles={(theme) => css`
        @font-face {
          font-family: '${theme.font}';
          src: url('${Orbitron}') format('woff2');
        }

        body {
          margin: 0;
          font-family: '${theme.font}', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  )
}

export default GlobalStyles
