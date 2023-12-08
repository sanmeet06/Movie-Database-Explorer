
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  it('renders Home component without errors', () => {
    render(<Home addToFavorites={() => {}} favorites={[]} />, { wrapper: MemoryRouter });

    expect(screen.getByText('Movie Database Explorer')).toBeInTheDocument();
  });
});
