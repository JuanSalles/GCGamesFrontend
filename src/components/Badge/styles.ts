import styled, { css } from 'styled-components'
import { BadgeProps } from '.'
import { DefaultTheme } from 'styled-components/dist/types'
type ComponentProps = Pick<BadgeProps, 'size' | 'priceValue'>

const wrapperModifiers = (theme: DefaultTheme) => ({
  small: css`
    font-size: ${theme.font.sizes.xsmall};
    width: 8.8rem;
    height: 2.4rem;

    &&::after {
      content: '';
      position: absolute;
      bottom: -6px;
      right: 0;
      border-right: 13px solid transparent;
      border-top: 6px solid ${theme.colors.secondary};
      mix-blend-mode: multiply;
    }
    &&::before {
      content: '';
      position: absolute;
      bottom: -6px;
      right: 0;
      border-right: 13px solid transparent;
      border-top: 6px solid rgba(0, 0, 0, 0.29);
    }
  `,
  medium: css`
    font-size: ${theme.font.sizes.small};
    width: 12.5rem;
    height: 3.3rem;

    &&::after {
      content: '';
      position: absolute;
      bottom: -8px;
      right: 0;
      border-right: 14px solid transparent;
      border-top: 8px solid ${theme.colors.secondary};
      mix-blend-mode: multiply;
    }
    &&::before {
      content: '';
      position: absolute;
      bottom: -8px;
      right: 0;
      border-right: 14px solid transparent;
      border-top: 8px solid rgba(0, 0, 0, 0.29);
    }
  `,
  large: css`
    font-size: ${theme.font.sizes.large};
    width: 15.3rem;
    height: 4rem;

    &&::after {
      content: '';
      position: absolute;
      bottom: -10px;
      right: 0;
      border-right: 22px solid transparent;
      border-top: 10px solid ${theme.colors.secondary};
      mix-blend-mode: multiply;
    }
    &&::before {
      content: '';
      position: absolute;
      bottom: -10px;
      right: 0;
      border-right: 22px solid transparent;
      border-top: 10px solid rgba(0, 0, 0, 0.29);
    }
  `
})
export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size', 'priceValue'].includes(prop)
})<ComponentProps>`
  ${({ theme, size, priceValue }) => css`
    position: relative;
    color: ${theme.colors.white};
    box-sizing: border-box;
    background-color: ${theme.colors.secondary};
    font-weight: ${priceValue ? theme.font.medium : theme.font.bold};
    display: flex;
    align-items: center;
    justify-content: center;
    ${wrapperModifiers(theme)[size!]}
  `}
`
