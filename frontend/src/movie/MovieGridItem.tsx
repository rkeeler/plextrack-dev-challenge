import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import getRomanNumeral from '../util/getRomanNumeral';

interface Props {
  movie: Movie;
}

const width = 300;

export default function MovieGridItem(props: Props) {
  const { movie } = props;

  return (
    <Link to={`/movies/${movie.id}`} style={{ width }}>
      <Card.Grid
        style={{
          width,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h4 style={{ marginBottom: 0 }}>
          {movie.title} ({movie.release_date.substr(0, 4)})
        </h4>
        <h5 style={{ color: 'gray' }}>
          Episode {getRomanNumeral(movie.episode_id)}
        </h5>
      </Card.Grid>
    </Link>
  );
}
