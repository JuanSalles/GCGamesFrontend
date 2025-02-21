import { formatPrice } from '@/utils/tests/helpers'
import * as S from './styles'
export type PriceProps = {
  size?: 'small' | 'medium' | 'large'
  value: number
}

const Price = ({ size = 'medium', value }: PriceProps) => (
  <S.Wrapper size={size}>
    <span>R${formatPrice(value)}</span>
  </S.Wrapper>
)

export default Price
