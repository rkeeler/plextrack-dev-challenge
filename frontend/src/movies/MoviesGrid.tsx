import * as React from 'react';
import MovieGridItem from '../movie/MovieGridItem';

interface Props {
  movies: Movie[];
}

export default function MoviesGrid(props: Props) {
  const { movies } = props;

  return (
    <>
      {movies.map((movie) => (
        <MovieGridItem movie={movie} />
      ))}
    </>
  );
}
