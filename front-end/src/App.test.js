import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Routes, Route } from 'react-router-dom';
import UsersView from './views/UsersView/UsersView'; 

jest.mock('./views/UsersView/UsersView', () => {
  return function DummyUsersView() {
    return (
      <div data-testid="users-view">UsersView</div>
    );
  };
});

function TestApp() {
  return (
    <Routes>
      <Route path="/" element={<UsersView />} />
    </Routes>
  );
}

describe('App', () => {
  it('renders UsersView at "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <TestApp />
      </MemoryRouter>
    )
    expect(screen.getByTestId('users-view')).toBeInTheDocument();
  });
});
