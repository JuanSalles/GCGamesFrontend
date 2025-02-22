import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Button />', () => {
  it('should render a small button and icon', () => {
    renderWithTheme(
      <Button hasCartIcon size="small">
        Buy now
      </Button>
    )
    const element = screen.getByRole('button')
    expect(element).toHaveStyleRule('width', '1.4rem', {
      modifier: 'svg'
    })
  })

  it('should render a medium size button and icon', () => {
    renderWithTheme(<Button hasCartIcon>Buy now</Button>)
    const element = screen.getByRole('button', { name: /buy now/i })
    expect(element).toHaveStyle({
      'font-size': '1.4rem'
    })

    expect(element).toHaveStyleRule('width', '1.8rem', {
      modifier: 'svg'
    })
  })

  it('should render a large size button and icon', () => {
    renderWithTheme(
      <Button hasCartIcon size="large">
        Buy now
      </Button>
    )
    const element = screen.getByRole('button', { name: /buy now/i })
    expect(element).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(element).toHaveStyleRule('width', '2.0rem', {
      modifier: 'svg'
    })
  })

  it('should render a button with icon', () => {
    renderWithTheme(<Button hasCartIcon>Buy now</Button>)
    const element = screen.getByLabelText(/cart icon/i)
    expect(element).toBeInTheDocument()
  })

  it('should render a button without icon', () => {
    renderWithTheme(<Button>Buy now</Button>)
    const element = screen.queryByLabelText(/cart icon/i)
    expect(element).not.toBeInTheDocument()
  })

  it('should render a small padding and zero margin when has only icon', () => {
    renderWithTheme(<Button hasCartIcon />)
    const element = screen.getByRole('button')
    expect(element).toHaveStyle({
      padding: '0.4rem 0.7rem'
    })
    expect(element).toHaveStyleRule('margin-right', '0', {
      modifier: 'svg'
    })
  })

  it('should render a full width version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)
    const element = screen.getByRole('button', { name: /buy now/i })
    expect(element).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a button with background gradient when is not already in cart', () => {
    renderWithTheme(<Button />)
    const element = screen.getByRole('button')
    expect(element).toHaveStyle({
      backgroundImage:
        'linear-gradient(180deg, #FF5F5F 0%, #F062C0 33%, #E35565 66%, #D958A6 100%)'
    })
    expect(element).toHaveStyleRule('background-position', '0 100%', {
      modifier: ':hover'
    })
  })

  it('should render a button with background secondary and diferent icon when already in cart', () => {
    renderWithTheme(<Button hasCartIcon alreadInCart />)
    const element = screen.getByRole('button')
    expect(element).toHaveStyleRule('background-color', '#35BDAC', {
      modifier: ':hover'
    })
    expect(element).toHaveStyleRule('background-color', '#3CD3C1')

    expect(screen.getByLabelText(/already in cart icon/i)).toBeInTheDocument()
  })
})
