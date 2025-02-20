import styled, { css } from 'styled-components'
import { ButtonProps } from '.'
import { DefaultTheme } from 'styled-components/dist/types'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.8rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    min-width: 9.5rem;
    svg {
      width: ${theme.font.sizes.small};
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 2.1rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    min-width: 12.2rem;
    svg {
      width: ${theme.font.sizes.large};
    }
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: 2.4rem;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    min-width: 15rem;
    svg {
      width: ${theme.font.sizes.xlarge};
    }
  `
}

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['hasCartIcon'].includes(prop)
})<ButtonProps>`
  ${({ theme, size, hasCartIcon }) => css`
    background: ${theme.colors.gradientButton};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    border: 0;
    font-weight: ${theme.font.medium};
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      display: ${hasCartIcon ? 'block' : 'none'};
      margin-right: ${theme.spacings.xxsmall};
    }
    &:hover {
      background: ${theme.colors.hoverGrandientButton};
    }

    ${!!size && wrapperModifiers[size](theme)}
  `}
`
