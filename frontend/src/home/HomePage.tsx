import * as React from 'react';
import { Card } from 'antd';
import { MoviesGrid, useMovies } from '../movies';

const cardStyle = {
  marginBottom: 48,
};

export default function Home() {
  const movies = useMovies();

  return (
    <div
      style={{
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: 48,
      }}
    >
      <Card style={cardStyle} title="Popular Pages"></Card>
      <Card style={cardStyle} title="Movies">
        <MoviesGrid movies={movies} />
      </Card>
      <Card style={cardStyle} title="Characters"></Card>
    </div>
  );
}
