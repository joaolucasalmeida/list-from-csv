import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import HeaderBar from './HeaderBar'

describe('HeaderBar', () => {
    test('renders logo correctly', () => {
        render(<HeaderBar />)

        const logoElement = screen.getByAltText(/logo/i)
        expect(logoElement).toBeInTheDocument()
    })
})
