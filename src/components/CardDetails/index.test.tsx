import { renderWithTheme } from '@/utils/tests/helpers'
import CardDetails from '.'
import { screen } from '@testing-library/react'

describe('<CardDetails />', () => {
  it('should render a small detail card for mobile', () => {
    renderWithTheme(
      <CardDetails title="My title" price={10}>
        Teste
      </CardDetails>
    )
    const heading = screen.getByRole('heading', { name: /my title/i })
    const element = heading.parentElement?.parentElement
    expect(element).toHaveStyle({
      width: '36.6rem'
    })
  })

  it('should render the detail card for desktop', () => {
    renderWithTheme(
      <CardDetails title="My title" price={10}>
        Teste
      </CardDetails>
    )

    const heading = screen.getByRole('heading', { name: /my title/i })
    const element = heading.parentElement?.parentElement

    expect(element).toHaveStyleRule('width', '87%', {
      media: '(min-width:  768px)'
    })
  })
})
