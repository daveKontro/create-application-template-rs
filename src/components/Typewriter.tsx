import {
  useState,
  useEffect,
  FC,
  ReactElement,
  PropsWithChildren,
} from 'react'
import { StyledText } from '../styles/Typewriter.styled'

export const Typewriter: FC<
  PropsWithChildren<{
    text:string,
    speed:number,
    delay?:number,
    children?:ReactElement,
  }>
> = ({
  text,
  speed,
  delay = 0,
  children,
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  // NOTE: supports hot reload behavior in development:
  // A) when the `text` prop changes (e.g. via hot reload), reset internal state
  // B) this triggers the typing animation effect to restart with the new text

  useEffect(() => {  // A
    const timeoutIdInit = setTimeout(() => {
      setDisplayedText('')
      setCurrentIndex(0)
    }, 0)

    return () => clearTimeout(timeoutIdInit)
  }, [text])

  useEffect(() => {  // B
    const mySpeed = (currentIndex === 0) ? delay + speed : speed

    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text.charAt(currentIndex))
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, mySpeed)

      return () => clearTimeout(timeoutId)
    }
  }, [
    currentIndex,
    text,
    speed,
    delay,
  ])

  return (
    <StyledText>
      {displayedText}
      {
        (currentIndex === text.length && children) &&
          <>&nbsp;{children}</>
      }
    </StyledText>
  )
}
