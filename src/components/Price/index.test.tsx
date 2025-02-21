import { screen } from '@testing-library/react'

import Price from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Price />', () => {
  it('should render the price in correct format', () => {
    renderWithTheme(<Price value={100} />)
    const element = screen.getByText('R$100,00')
    expect(element).toBeInTheDocument()
  })

  it('should render the price in small size', () => {
    renderWithTheme(<Price value={100} size="small" />)
    const element = screen.getByText('R$100,00').parentElement
    expect(element).toHaveStyle({
      'font-size': '1.2rem',
      width: '7.8rem',
      height: '2.2rem'
    })
  })

  it('should render the price in medium size', () => {
    renderWithTheme(<Price value={100} />)
    const element = screen.getByText('R$100,00').parentElement
    expect(element).toHaveStyle({
      'font-size': '1.8rem',
      width: '10.6rem',
      height: '3.3rem'
    })
  })

  it('should render the price in large size', () => {
    renderWithTheme(<Price value={100} size="large" />)
    const element = screen.getByText('R$100,00').parentElement
    expect(element).toHaveStyle({
      'font-size': '2.0rem',
      width: '14.3rem',
      height: '4.5rem'
    })
  })
})
