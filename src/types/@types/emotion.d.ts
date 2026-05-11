import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    font: string,
    colors: {
      palette: {
        background: string,
        primary: string,
      },
      link: {
        main: string,
        hover: string,
      },
    },
    // ...rest of theme shape
  }
}
