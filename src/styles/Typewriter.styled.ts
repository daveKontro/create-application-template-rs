import styled from '@emotion/styled'
import type { TransientProp } from '../types'

export const StyledText = styled('div', {
  shouldForwardProp: (prop) => (
    !['$minHeightRem'].includes(prop as TransientProp)
  ),
})<{
    $minHeightRem: number,
  }>`
  min-height: ${({ $minHeightRem }) => `${$minHeightRem}rem`};
`
