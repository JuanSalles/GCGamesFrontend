import { formatPrice } from '@/utils/tests/helpers'
import * as S from './styles'

export type BadgeProps = {
  priceValue?: number
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

const priceOrChildren = (priceValue?: number, children?: React.ReactNode) => {
  if (priceValue) {
    return <span>R${formatPrice(priceValue)}</span>
  }
  return children
}
const Badge = ({ priceValue, children, size = 'medium' }: BadgeProps) => (
  <S.Wrapper size={size} priceValue={priceValue}>
    {priceOrChildren(priceValue, children)}
  </S.Wrapper>
)

export default Badge
