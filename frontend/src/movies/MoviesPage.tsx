import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Card, Spin } from 'antd';
import { MoviesGrid, useMovies } from '../movies';
import { MovieDetailPage } from '../movie';
import FetchStatus from '../util/FetchStatus';

const cardStyle = {
  marginBottom: 48,
};

export default function MoviesPage() {
  const { path } = useRouteMatch();
  const { status: popularStatus, movies: popularMovies } = useMovies('popular');
  const {
    status: chronologicalStatus,
    movies: chronologicalMovies,
  } = useMovies('chronological');

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        {({ match }) => {
          const movie = chronologicalMovies.find(
            (movie) => movie.id === match?.params.id
          );
          return (
            <MovieDetailPage
              movie={movie}
              loading={chronologicalStatus === FetchStatus.Loading}
            />
          );
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
            {popularStatus === FetchStatus.Loading ? (
              <Spin />
            ) : (
              <MoviesGrid movies={popularMovies} />
            )}
          </Card>

          <Card style={cardStyle} title="Chronological">
            {chronologicalStatus === FetchStatus.Loading ? (
              <Spin />
            ) : (
              <MoviesGrid movies={chronologicalMovies} />
            )}
          </Card>
        </div>
      </Route>
    </Switch>
  );
}
