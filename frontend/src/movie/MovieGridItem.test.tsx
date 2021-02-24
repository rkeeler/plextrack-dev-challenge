import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieGridItem from './MovieGridItem';
import { MemoryRouter } from 'react-router-dom';

const movie = {
  id: '4',
  title: 'The Phantom Menace',
  episode_id: 1,
  release_date: '1999-05-19',
  director: 'George Lucas',
  producer: 'Rick McCallum',
  characters: [],
};

test('renders movie title', () => {
  render(<MovieGridItem movie={movie} />, { wrapper: MemoryRouter });
  const element = screen.getByText(/The Phantom Menace/);
  expect(element).toBeInTheDocument();
});

test('renders movie release year', () => {
  render(<MovieGridItem movie={movie} />, { wrapper: MemoryRouter });
  const element = screen.getByText(/(1999)/);
  expect(element).toBeInTheDocument();
});

test('renders movie episode number', () => {
  render(<MovieGridItem movie={movie} />, { wrapper: MemoryRouter });
  const element = screen.getByText(/Episode I/);
  expect(element).toBeInTheDocument();
});
