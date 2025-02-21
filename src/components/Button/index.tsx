import theme from '@/styles/theme'
import * as S from './styles'
export type ButtonProps = {
  children?: React.ReactNode
  hasCartIcon?: boolean
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  alreadInCart?: boolean
}
const icon = (alreadInCart: boolean) => {
  if (alreadInCart) {
    return (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        aria-label="already in cart icon"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.607 7.875H5.262L4.62 9.042h7v1.166h-7c-.887 0-1.447-.95-1.021-1.732l.788-1.424-2.1-4.427H1.12V1.458h1.907l2.485 5.25h4.095l2.258-4.083 1.015.56-2.252 4.09c-.198.36-.583.6-1.02.6ZM4.62 10.792c-.642 0-1.16.525-1.16 1.166 0 .642.518 1.167 1.16 1.167a1.17 1.17 0 0 0 1.167-1.167 1.17 1.17 0 0 0-1.167-1.166Zm5.833 0c-.641 0-1.16.525-1.16 1.166 0 .642.519 1.167 1.16 1.167a1.17 1.17 0 0 0 1.167-1.167 1.17 1.17 0 0 0-1.167-1.166Z"
          fill={theme.colors.white}
        />
        <path d="M6 3.5 7.5 5l3-3" stroke={theme.colors.white} />
      </svg>
    )
  }
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      aria-label="cart icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.18 8.313h-1.75V5.687H7.805v-1.75h2.625V1.313h1.75v2.625h2.625v1.75H12.18v2.625Zm-6.991 9.624c0-.962.778-1.75 1.74-1.75.963 0 1.75.788 1.75 1.75 0 .963-.787 1.75-1.75 1.75a1.748 1.748 0 0 1-1.74-1.75Zm10.49-1.75c-.962 0-1.74.788-1.74 1.75 0 .963.778 1.75 1.74 1.75.963 0 1.75-.787 1.75-1.75 0-.962-.787-1.75-1.75-1.75Zm-1.268-4.375H7.892l-.962 1.75h10.5v1.75H6.93c-1.33 0-2.17-1.426-1.531-2.598l1.18-2.135-3.15-6.642H1.68v-1.75h2.862l3.728 7.876h6.142l3.386-6.126 1.523.84-3.378 6.134a1.742 1.742 0 0 1-1.53.902Z"
        fill={theme.colors.white}
      />
    </svg>
  )
}
const Button = ({
  children,
  hasCartIcon = false,
  size = 'medium',
  fullWidth = false,
  alreadInCart = false
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    hasCartIcon={hasCartIcon}
    fullWidth={fullWidth}
    alreadInCart={alreadInCart}
  >
    {hasCartIcon && icon(alreadInCart)}
    {children}
  </S.Wrapper>
)

export default Button
