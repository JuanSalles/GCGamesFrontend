import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'
import { DefaultTheme } from 'styled-components/dist/types'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    border-left: 0.7rem solid ${theme.colors.secondary};
    padding-left: ${theme.spacings.xxsmall};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.small};
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2.withConfig({
  shouldForwardProp: (prop) => !['lineLeft', 'lineBottom'].includes(prop)
})<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};
    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};`}
    line-height: ${theme.font.sizes.xxlarge};
    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`
