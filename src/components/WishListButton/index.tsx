import theme from '@/styles/theme'
import * as S from './styles'
export type WishListButtonProps = {
  onWishList?: boolean
  size?: 'small' | 'medium' | 'large'
  withText?: boolean
}
const WishListButton = ({
  onWishList = false,
  withText = true
}: WishListButtonProps) => (
  <S.Wrapper onWishList={onWishList}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-label={onWishList ? 'remove from wishlist' : 'Add to wishlist'}
    >
      <path
        d="M5.405 13.643c1.427 1.667 3.45 3.5 5.805 5.632l.083.082.707.707.707-.707.083-.082c2.354-2.132 4.378-3.965 5.805-5.632C20.015 11.983 21 10.314 21 8.5 21 5.948 19.052 4 16.5 4c-1.682 0-3.34.931-4.184 2.36h-.625C10.84 4.933 9.185 4 7.5 4 4.948 4 3 5.948 3 8.5c0 1.814.984 3.482 2.405 5.143Z"
        stroke={theme.colors.primary}
        strokeWidth="2"
      />
    </svg>
    {withText && <span>Wishlist</span>}
  </S.Wrapper>
)

export default WishListButton
