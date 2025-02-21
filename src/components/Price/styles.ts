import styled, { css } from 'styled-components'
import { PriceProps } from '.'
import { DefaultTheme } from 'styled-components/dist/types'
type ComponentProps = Pick<PriceProps, 'size'>
const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    width: 7.8rem;
    height: 2.2rem;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    width: 10.6rem;
    height: 3.3rem;
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    width: 14.3rem;
    height: 4.5rem;
  `
}
export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size'].includes(prop)
})<ComponentProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    box-sizing: border-box;
    background-color: ${theme.colors.secondary};
    font-weight: ${theme.font.medium};
    border-radius: ${theme.border.radiusSmall};
    display: flex;
    align-items: center;
    justify-content: center;
    ${wrapperModifiers[size!](theme)}
  `}
`
