import styled, { css } from 'styled-components'
import { ButtonProps } from '.'
import { DefaultTheme } from 'styled-components/dist/types'

export const wrapperModifiers = {
  small: (theme: DefaultTheme, fullWidth: boolean) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
    width: ${fullWidth ? '100%' : 'auto'};
    padding-inline: ${fullWidth ? '0' : theme.spacings.small};
    svg {
      width: ${theme.font.sizes.small};
    }
  `,
  medium: (theme: DefaultTheme, fullWidth: boolean) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    width: ${fullWidth ? '100%' : 'auto'};
    padding-inline: ${fullWidth ? '0' : theme.spacings.small};
    svg {
      width: ${theme.font.sizes.large};
    }
  `,
  large: (theme: DefaultTheme, fullWidth: boolean) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
    width: ${fullWidth ? '100%' : 'auto'};
    padding-inline: ${fullWidth ? '0' : theme.spacings.large};
    svg {
      width: ${theme.font.sizes.xlarge};
    }
  `
}

const onlyIcon = () => css`
  padding: 0.4rem 0.7rem;
`

const backgroundAnimation = (theme: DefaultTheme, alreadInCart: boolean) => {
  if (alreadInCart) {
    return css`
      background-color: ${theme.colors.secondary};
      &:hover {
        background-color: ${theme.colors.darkSecondary};
      }
      transition: background-color ${theme.transitions.default};
    `
  }
  return css`
    background-image: ${theme.colors.gradientButton}; /* Gradiente do botão */
    background-size: 100% 300%; /* Gradiente maior do que o botão */
    transition: background-position ${theme.transitions.default}; /* Transição suave do gradiente */

    &:hover {
      background-position: 0 100%; /* Transição do gradiente para baixo */
    }
  `
}

export const Wrapper = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['hasCartIcon', 'alreadInCart', 'fullWidth'].includes(prop)
})<ButtonProps>`
  ${({ theme, size, children, fullWidth, alreadInCart }) => css`
    all: unset;
    position: relative;
    overflow: hidden;
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    border: 0;
    font-weight: ${theme.font.medium};
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    svg {
      margin-right: ${Array.isArray(children) && children[1]
        ? theme.spacings.xxsmall
        : 0};
      padding: 0;
    }
    ${!!size && wrapperModifiers[size](theme, fullWidth!)}
    ${Array.isArray(children) && !children[1] && onlyIcon()}
    ${backgroundAnimation(theme, alreadInCart!)}
  `}
`
