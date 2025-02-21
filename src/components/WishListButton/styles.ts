import styled, { css } from 'styled-components'
import { WishListButtonProps } from '.'

type ComponentProps = Pick<WishListButtonProps, 'onWishList'>
export const Wrapper = styled.button<ComponentProps>`
  ${({ theme, onWishList }) => css`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primary};
    cursor: pointer;
    background: none;
    border: none;
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.medium};
    transition: color ${theme.transitions.default};
    width: max-content;
    padding: ${theme.spacings.xxsmall};
    gap: ${theme.spacings.xxsmall};
    &&:hover {
      color: ${theme.colors.darkPrimary};
      svg {
        fill: ${onWishList ? theme.colors.darkPrimary : 'none'};
        path {
          stroke: ${theme.colors.darkPrimary};
        }
      }
    }
    svg {
      width: 2.4rem;
      fill: ${onWishList ? theme.colors.primary : 'none'};
    }
  `}
`
