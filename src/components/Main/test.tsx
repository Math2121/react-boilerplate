import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main component', () => {
  it('should render the heading', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { name: /react/i })).toBeInTheDocument()
  })
})
