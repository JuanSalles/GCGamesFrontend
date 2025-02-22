import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    background-color: ${theme.colors.white};
    width: 36.6rem;
    padding: ${theme.spacings.small} ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    justify-content: center;
    align-items: center;

    p {
      margin-bottom: 1rem;
    }

    ${media.greaterThan('medium')`
      width: 87%;
      align-items: end;
      gap: ${theme.spacings.xxsmall};
      p{
        width: 100%;
      }
    `}
  `}
`
export const TextContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    p {
      margin-bottom: 1rem;
    }

    ${media.greaterThan('medium')`
      
      display: flex;
      justify-content: start;
      p{
        width: 68%;
      }
    `}
  `}
`
export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: start;
    gap: ${theme.spacings.xsmall};
    div {
      position: relative;
      right: -34px;

      ${media.greaterThan('medium')`
        right: 0;
      `}
    }
  `}
`

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap: ${theme.spacings.xsmall};
    width: 100%;
  `}

  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row-reverse;
    width: 34.8rem;
    button{
      width: 50%;
    }
  `}
`
