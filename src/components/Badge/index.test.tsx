import { screen } from '@testing-library/react'

import Badge from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Badge />', () => {
  it('should render the badge with the text "new"', () => {
    renderWithTheme(<Badge>new</Badge>)
    const element = screen.getByText(/new/i)
    expect(element).toBeInTheDocument()
  })
})
