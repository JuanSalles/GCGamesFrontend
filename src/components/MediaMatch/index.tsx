import { DefaultBreakpoints } from 'styled-media-query'
import * as S from './styles'
export type Breakpoint = keyof DefaultBreakpoints
export type MediaMatchProps = {
  children: React.ReactNode
  lessThan?: Breakpoint
  greaterThan?: Breakpoint
}

const mediaMatch = ({
  children,
  lessThan = undefined,
  greaterThan = undefined
}: MediaMatchProps) => (
  <S.Wrapper lessThan={lessThan} greaterThan={greaterThan}>
    {children}
  </S.Wrapper>
)

export default mediaMatch
