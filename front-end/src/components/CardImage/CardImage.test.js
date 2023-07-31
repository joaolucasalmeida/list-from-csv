import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardImage from './CardImage';

describe('CardImage', () => {
    test('renders image correctly for known users', () => {
        const knownUser = { name: 'John Doe' };
        render(<CardImage user={knownUser} />);
        const imgElement = screen.getByAltText(knownUser.name);
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', expect.stringContaining('john'));
    });

    test('renders empty div for unknown users', () => {
        const unknownUser = { name: 'Unknown User' };
        render(<CardImage user={unknownUser} />);
        expect(screen.queryByAltText(unknownUser.name)).not.toBeInTheDocument();
    });

    test('sets alt text correctly', () => {
        const user = { name: 'Jane Smith' };
        render(<CardImage user={user} />);
        const imgElement = screen.getByAltText(user.name);
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('alt', user.name);
    });
});
