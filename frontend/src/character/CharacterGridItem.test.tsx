import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterGridItem from './CharacterGridItem';
import { MemoryRouter } from 'react-router-dom';

const character = {
  id: '1',
  birth_year: '19 BBY',
  eye_color: 'Blue',
  gender: 'Male',
  hair_color: 'Blond',
  height: '172',
  mass: '77',
  name: 'Luke Skywalker',
  skin_color: 'Fair',
};

test('renders character name', () => {
  render(<CharacterGridItem character={character} />, {
    wrapper: MemoryRouter,
  });
  const element = screen.getByText(/Luke Skywalker/);
  expect(element).toBeInTheDocument();
});
