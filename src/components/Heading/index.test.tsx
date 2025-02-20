import { screen } from '@testing-library/react'

import Heading from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Heading />', () => {
  it('should render a white text by default', () => {
    renderWithTheme(<Heading>GeekCrow Games</Heading>)

    const heading = screen.getByRole('heading', { name: /geekcrow games/i })

    expect(heading).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black text when color is passed', () => {
    renderWithTheme(<Heading color="black">GeekCrow Games</Heading>)

    const heading = screen.getByRole('heading', { name: /geekcrow games/i })

    expect(heading).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>GeekCrow Games</Heading>)

    const heading = screen.getByRole('heading', { name: /geekcrow games/i })

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1',
      'padding-left': '0.8rem'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>GeekCrow Games</Heading>)

    const heading = screen.getByRole('heading', { name: /geekcrow games/i })

    expect(heading).toHaveStyle({
      position: 'relative'
    })

    expect(heading).toHaveStyleRule('position', 'absolute', {
      modifier: '::after'
    })

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })
})
