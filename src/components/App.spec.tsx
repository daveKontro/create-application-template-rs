import { render, screen, act } from '@testing-library/react'
import 'jest-styled-components'
import { App } from './App'

jest.useFakeTimers()

test('renders title', () => {
  render(<App />)

  const text = 'Create Application Template'

  for (let i = 1; i <= text.length; i++) {
    act(() => {
      jest.advanceTimersByTime(50)
    })
  }

  expect(screen).toMatchSnapshot()
  expect(screen.getByText(text)).toBeInTheDocument()
})

afterEach(() => {
  jest.useRealTimers()
})
