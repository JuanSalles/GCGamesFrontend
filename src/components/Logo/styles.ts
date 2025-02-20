import styled, { css } from 'styled-components'
import { LogoProps } from '.'
import media from 'styled-media-query'

const wrapperModifiers = {
  normal: () => css`
    height: 5rem;
    width: 17.5rem;
  `,
  large: () => css`
    width: 26.3rem;
    height: 7.5rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 5.8rem;
      svg {
        height: 5.8rem;
        pointer-events: none;
      }
      .slogan-text {
        display: none;
      }
    `}
  `
}
export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size', 'hideOnMobile'].includes(prop)
})<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]}
    ${hideOnMobile ? wrapperModifiers.hideOnMobile : ''}
  `}
`
