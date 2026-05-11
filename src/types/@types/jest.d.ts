import '@emotion/jest'

// NOTE jest-styled-components shipped its own 
// type declaration file (.d.ts) that augmented 
// the jest.Matchers interface... @emotion/jest 
// doesn't include the equivalent out of the box

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveStyleRule(property: string, value?: string | RegExp, options?: {
        target?: string
        media?: string
      }): R
    }
  }
}
