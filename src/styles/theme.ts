import { transparentize } from 'polished'

const theme = {
  font: 'exo2',
  colors: {
    palette: {
      background: '#454145',
      primary: '#cec2eb',
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
