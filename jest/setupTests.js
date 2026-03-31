require('dotenv-flow').config()

// additional jest matchers
// https://jest-extended.jestcommunity.dev/docs/matchers
const matchers = require('jest-extended')
expect.extend(matchers)

// custom jest matchers for asserting on DOM nodes
// https://www.npmjs.com/package/@testing-library/jest-dom
require('@testing-library/jest-dom')
// require('@testing-library/jest-dom/jest-globals')

afterEach(() => {
  jest.useRealTimers()
})
