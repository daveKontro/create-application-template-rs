import { createGlobalStyle } from 'styled-components'
import Orbitron from '../fonts/Orbitron-Regular.woff2'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: '${({ theme }) => theme.font}';
    src: url('${Orbitron}') format('woff2');
  }

  body {
    margin: 0;
    font-family: '${({ theme }) => theme.font}', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyles
