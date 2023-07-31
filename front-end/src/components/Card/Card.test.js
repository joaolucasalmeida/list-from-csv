import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
jest.mock('../CardImage/CardImage');

describe('Card', () => {
    const mockUser = {
        name: 'John Doe',
        country: 'USA',
        city: 'New York',
        favorite_sport: 'Basketball'
    };

    test('renders Card correctly', () => {
        render(<Card user={mockUser} />);
        const nameElement = screen.getByText(mockUser.name);
        const countryElement = screen.getByText(`Country: ${mockUser.country}`);
        const cityElement = screen.getByText(`City: ${mockUser.city}`);
        const sportElement = screen.getByText(`Sport: ${mockUser.favorite_sport}`);

        expect(nameElement).toBeInTheDocument();
        expect(countryElement).toBeInTheDocument();
        expect(cityElement).toBeInTheDocument();
        expect(sportElement).toBeInTheDocument();
    });
});
