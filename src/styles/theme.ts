import { transparentize } from 'polished'

const palette = {
  background: '#081e28',
  primary: '#fd05a0',
}

const theme = {
  font: 'orbitron',
  colors: {
    palette,
    link: {
      main: transparentize(0.4, palette.primary),
      hover: transparentize(0.6, palette.primary),
    },
  },
}

export default theme

