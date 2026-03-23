import { FC, useState } from 'react'
import { StyledCounter } from '../styles/Counter.styled'

// NOTE update count then edit App.tsx... thanks
// to ReactRefreshWebpackPlugin state is preserved

type Count = number

export const Counter: FC = () => {
  const [count, setCount] = useState<Count>(0)

  const handleClickCounter = () => setCount((count: Count) => ++count)

  return (
    <div>
      <StyledCounter onClick={handleClickCounter}>
        count:&nbsp;{count}
      </StyledCounter>
    </div>
  )
}
