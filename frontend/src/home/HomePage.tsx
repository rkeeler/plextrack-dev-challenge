import * as React from 'react';
import { Card, Spin } from 'antd';
import { MoviesGrid, useMovies } from '../movies';
import { CharactersGrid, useCharacters } from '../characters';
import { Link } from 'react-router-dom';
import FetchStatus from '../util/FetchStatus';

const cardStyle = {
  marginBottom: 48,
};

export default function Home() {
  const { status: moviesStatus, movies } = useMovies('popular');
  const { status: charactersStatus, characters } = useCharacters('popular');

  return (
    <div
      style={{
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: 48,
      }}
    >
      <Card
        style={cardStyle}
        title="Popular Movies"
        extra={<Link to="/movies">View All</Link>}
      >
        {moviesStatus === FetchStatus.Loading ? (
          <Spin />
        ) : (
          <MoviesGrid movies={movies} />
        )}
      </Card>

      <Card
        style={cardStyle}
        title="Popular Characters"
        extra={<Link to="/characters">View All</Link>}
      >
        {charactersStatus === FetchStatus.Loading ? (
          <Spin />
        ) : (
          <CharactersGrid characters={characters} />
        )}
      </Card>
    </div>
  );
}
