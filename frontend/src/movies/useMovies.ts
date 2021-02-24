import * as React from 'react';
import FetchStatus from '../util/FetchStatus';

export default function useMovies() {
  const [status, setStatus] = React.useState<FetchStatus>(FetchStatus.Init);
  const [movies, setMovies] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    async function fetchMovies() {
      console.log('fetching movies');
      const response = await fetch('/api/movies');
      const movies = await response.json();
      setMovies(movies);
    }

    if (status === FetchStatus.Init) {
      setStatus(FetchStatus.Loading);
      fetchMovies();
    }
  }, [status, setStatus, setMovies]);

  return {
    status,
    movies,
  };
}
