import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { MediaMatchProps, Breakpoint } from '.'

const mediaMatchModifiers = {
  lessThan: (size: Breakpoint) => css`
    ${media.lessThan(size)`
        display: block
    `}
  `,
  greaterThan: (size: Breakpoint) => css`
    ${media.greaterThan(size)`
       display: block
    `}
  `
}

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['lessThan', 'greaterThan'].includes(prop)
})<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
