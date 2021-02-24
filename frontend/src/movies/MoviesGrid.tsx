import * as React from 'react';
import { Movie, MovieGridItem } from '../movie';

interface Props {
  movies: Movie[];
}

export default function MoviesGrid(props: Props) {
  const { movies } = props;

  return (
    <>
      {movies.map((movie) => (
        <MovieGridItem movie={movie} key={movie.id} />
      ))}
    </>
  );
}
