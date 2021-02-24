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

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        {({ match }) => <MovieDetailPage id={match?.params.id} />}
      </Route>

      <Route exact path={path}>
        <MoviesList />
      </Route>
    </Switch>
  );
}

function MoviesList() {
  const { status: popularStatus, movies: popularMovies } = useMovies('popular');
  const {
    status: chronologicalStatus,
    movies: chronologicalMovies,
  } = useMovies('chronological');

  return (
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
  );
}
