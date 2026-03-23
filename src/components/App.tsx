import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/Global'
import theme from '../styles/theme'
import * as app from '../styles/App.styled'
import { StyledLogo } from '../styles/Logo.styled'
import '../styles/env.css'
import logo from '../assets/logo.svg'
import { Counter } from './Counter'
import { Typewriter } from './Typewriter'

const TemplateLink: FC = () => {
  return (
    <app.StyledLink
      href='https://www.npmjs.com/package/@epic-effx/create-application-template'
      rel='noreferrer'
      target='_blank'
    >
      here
    </app.StyledLink>
  )
}

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <app.StyledContainer>
        <app.StyledHeader>
          <h1>
            <Typewriter
              text={'Create Application Template'}
              speed={50}
            />
          </h1>
          <h2>
            <Typewriter
              text={'Configured and under your control!'}
              speed={50}
              delay={300}
            />
          </h2>
          <h2>
            <Typewriter
              text={'Access the template'}
              speed={50}
              delay={1300}
            >
              <TemplateLink />
            </Typewriter>
          </h2>
        </app.StyledHeader>
        <app.StyledSection>
          <code className='card--env'>[NODE_ENV={process.env.NODE_ENV}]</code>
          <code className='card--env'>[EXAMPLE={process.env.EXAMPLE}]</code>
        </app.StyledSection>
        <app.StyledSection>
          <StyledLogo src={logo} alt='logo'/>
        </app.StyledSection>
        <app.StyledSection>
          <Counter />
        </app.StyledSection>
      </app.StyledContainer>
    </ThemeProvider>
  )
}
