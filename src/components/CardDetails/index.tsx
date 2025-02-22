import Button from '../Button'
import Heading from '../Heading'
import Price from '../Price'
import WishListButton from '../WishListButton'
import * as S from './styles'
export type CardDetailsProps = {
  title: string
  children: React.ReactNode
  price: number
}
const CardDetails = ({ title, children, price }: CardDetailsProps) => (
  <S.Wrapper>
    <S.Header>
      <Heading color="black" lineBottom>
        {title}
      </Heading>
      <Price value={price} />
    </S.Header>
    <S.TextContainer>
      <p>{children}</p>
    </S.TextContainer>
    <S.ButtonsContainer>
      <Button hasCartIcon fullWidth>
        Add to cart
      </Button>
      <WishListButton />
    </S.ButtonsContainer>
  </S.Wrapper>
)

export default CardDetails
