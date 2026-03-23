import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import { userEvent } from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { Counter } from './Counter'

test('count increases per click', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Counter />
    </ThemeProvider>
  )
  const button = await screen.findByRole('button', { name: /count/i })

  const user = userEvent.setup()
  await user.click(button)
  const results = button.innerHTML.match(/\d/g)

  expect(results).toBeArrayOfSize(1)
  expect(results).toIncludeAllMembers(['1'])
})


test('styled with palette colors', async() => {
  render(
    <ThemeProvider theme={theme}>
      <Counter />
    </ThemeProvider>
  )
  const button = await screen.findByRole('button', { name: /count/i })

  const { primary, background } = theme.colors.palette

  expect(button).toMatchSnapshot()
  expect(button).toHaveStyleRule('color', primary)
  expect(button).toHaveStyleRule('background-color', background)
})
