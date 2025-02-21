import { screen } from '@testing-library/react'

import WishListButton from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<WishListButton />', () => {
  it('should render the button with the text', () => {
    renderWithTheme(<WishListButton />)
    const element = screen.getByLabelText(/add to wishlist/i).parentElement
    expect(element).toHaveTextContent(/wishlist/i)
  })

  it('should render the link withouth text', () => {
    renderWithTheme(<WishListButton withText={false} />)
    const element = screen.getByLabelText(/add to wishlist/i).parentElement
    expect(element).not.toHaveTextContent(/wishlist/i)
  })

  it('should render a filled icon when favorite is true', () => {
    renderWithTheme(<WishListButton onWishList />)
    const element = screen.getByLabelText(/remove from wishlist/i)
    expect(element).toHaveStyle({ fill: '#F231A5' })
  })
})
