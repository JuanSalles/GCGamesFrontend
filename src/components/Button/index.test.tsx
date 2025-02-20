import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Button />', () => {
  it('should color text white', () => {
    renderWithTheme(<Button>Buy now</Button>)
    const element = screen.getByText(/buy now/i)
    expect(element).toHaveStyle({ color: '#FAFAFA' })
  })
})
