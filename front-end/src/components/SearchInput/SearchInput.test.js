import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';
import UserService from '../../services/UserService';
import { act } from 'react-dom/test-utils';

jest.mock('../../services/UserService');

const mockDataChanged = jest.fn();

describe('SearchInput', () => {
  it('renders search input field', () => {
    render(<SearchInput dataChanged={mockDataChanged} />);
    const inputElement = screen.getByPlaceholderText('Pesquisar');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls UserService and dataChanged when query changes', async () => {
    const mockUsers = [{ id: 1, name: 'John Doe' }];
    UserService.findUsers = jest.fn().mockResolvedValue({ data: mockUsers });

    render(<SearchInput dataChanged={mockDataChanged} />);

    const inputElement = screen.getByPlaceholderText('Pesquisar');

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'John' } });
    });

    expect(UserService.findUsers).toHaveBeenCalledWith('John');
    expect(mockDataChanged).toHaveBeenCalledWith(mockUsers);
  });
});
