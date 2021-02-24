import * as React from 'react';
import { Card } from 'antd';
import { MoviesGrid, useMovies } from '../movies';
import { CharactersGrid, useCharacters } from '../characters';
import { Link } from 'react-router-dom';

const cardStyle = {
  marginBottom: 48,
};

export default function Home() {
  const { movies } = useMovies();
  const { characters } = useCharacters();

  return (
    <div
      style={{
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: 48,
      }}
    >
      <Card style={cardStyle} title={<Link to="/movies">Movies</Link>}>
        <MoviesGrid movies={movies} />
      </Card>

      <Card style={cardStyle} title={<Link to="/characters">Characters</Link>}>
        <CharactersGrid characters={characters} />
      </Card>
    </div>
  );
}
