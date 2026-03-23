import { render, screen, act } from '@testing-library/react'
import 'jest-styled-components'
import { Typewriter } from './Typewriter'

jest.useFakeTimers()

test('renders text and children', () => {
  const text = 'testing'

  render(
    <Typewriter
      text={text}
      speed={50}
    >
      <div data-testid='child-element'>child</div>
    </Typewriter>
  )

  for (let i = 1; i <= text.length; i++) {
    // full text available only after all 
    // timeouts complete, see Typewriter.tsx
    act(() => {
      jest.advanceTimersByTime(50)
    })
  }

  expect(screen).toMatchSnapshot()
  expect(screen.getByText(text)).toBeInTheDocument()
  expect(screen.getByTestId('child-element')).toBeInTheDocument()
})

afterEach(() => {
  // reset real timers so other tests
  // are not affected by mock timers
  jest.useRealTimers()
})
