import * as React from 'react';
import { Movie } from '../movie';
import FetchStatus from '../util/FetchStatus';

// TODO: store this data in React Context or a cache of some kind
// so we don't fetch the same data multiple times
export default function useMovies(sortBy: 'popular' | 'chronological') {
  const [status, setStatus] = React.useState<FetchStatus>(FetchStatus.Init);
  const [movies, setMovies] = React.useState<Movie[]>([]);

  // TODO: Cancel fetch when component unmounted
  React.useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`/api/movies?sortBy=${sortBy}`);
      const movies = await response.json();
      setMovies(movies);
      setStatus(FetchStatus.Success);
    }

    if (status === FetchStatus.Init) {
      setStatus(FetchStatus.Loading);
      fetchMovies();
    }
  }, [sortBy, status, setStatus, setMovies]);

  return {
    status,
    movies,
  };
}
