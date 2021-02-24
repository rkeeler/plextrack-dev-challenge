import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Card } from 'antd';
import { MoviesGrid, useMovies } from '../movies';
import { MovieDetailPage } from '../movie';

const cardStyle = {
  marginBottom: 48,
};

export default function Home() {
  const { path } = useRouteMatch();
  const movies = useMovies();

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        {({ match }) => {
          const movie = movies.find((movie) => movie.id === match?.params.id);
          if (!movie) return null;
          return <MovieDetailPage movie={movie} />;
        }}
      </Route>

      <Route exact path={path}>
        <div
          style={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 48,
          }}
        >
          <Card style={cardStyle} title="Popular">
            <MoviesGrid movies={movies} />
          </Card>
          <Card style={cardStyle} title="Chronological">
            <MoviesGrid movies={movies} />
          </Card>
        </div>
      </Route>
    </Switch>
  );
}
