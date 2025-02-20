import 'jest-styled-components'
import { screen } from '@testing-library/react'
import Logo from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Logo />', () => {
  // render the component
  // select the element to test with 'screen' (queries) - getLabel
  //expect - assertion - compare (we expect to have a color white of theme)

  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    const element = screen.getByLabelText(/GeekCrow Games/i).parentElement
    expect(element).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    const element = screen.getByLabelText(/GeekCrow Games/i).parentElement
    expect(element).toHaveStyle({
      color: '#030517'
    })
  })

  it('Should render a normal logo', () => {
    renderWithTheme(<Logo />)
    const element = screen.getByLabelText(/GeekCrow Games/i).parentElement
    expect(element).toHaveStyle({
      height: '5rem',
      width: '17.5rem'
    })
  })

  it('Should render a big logo', () => {
    renderWithTheme(<Logo size="large" />)
    const element = screen.getByLabelText(/GeekCrow Games/i).parentElement
    expect(element).toHaveStyle({
      height: '7.5rem',
      width: '26.3rem'
    })
  })

  it('Should render a normal logo', () => {
    renderWithTheme(<Logo />)
    const element = screen.getByLabelText(/GeekCrow Games/i).parentElement
    expect(element).toHaveStyle({
      height: '5rem',
      width: '17.5rem'
    })
  })

  it('Should render a big logo', () => {
    renderWithTheme(<Logo size="large" />)
    const element = screen.getByLabelText(/GeekCrow Games/i).parentElement
    expect(element).toHaveStyle({
      height: '7.5rem',
      width: '26.3rem'
    })
  })

  it('should render a normal logo with the text if hideOnMobile = false', () => {
    renderWithTheme(<Logo />)

    const elements = screen
      .getByLabelText(/GeekCrow Games/i)
      .querySelectorAll('.slogan-text')

    for (const text of elements) {
      expect(text).not.toHaveStyle({
        display: 'none'
      })
    }
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile={true} />)

    const element = screen.getByLabelText(/GeekCrow Games/i).parentElement
    expect(element).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width:  768px)' //problem with styled-media-query, must there are two spaces beetwen max-width: and the pixels.
    })
  })
})
