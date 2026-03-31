import { transparentize } from 'polished'

const theme = {
  font: 'orbitron',
  colors: {
    palette: {
      background: '#081e28',
      primary: '#fd05a0',
    },
    get link() {
      const link = this.palette.primary

      return {
        regular: transparentize(0.4, link),
        hover: transparentize(0.6, link),
      }
    },
  },
}

export default theme
