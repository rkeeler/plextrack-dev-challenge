import * as React from 'react';
import { Movie } from '../movie';
import FetchStatus from '../util/FetchStatus';

// TODO: store this data in React Context or a cache of some kind
// so we don't fetch the same data multiple times
export default function useMovie(id: string) {
  const [status, setStatus] = React.useState<FetchStatus>(FetchStatus.Init);
  const [movie, setMovie] = React.useState<Movie | null>(null);

  // TODO: Cancel fetch when component unmounted
  React.useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`/api/movies/${id}`);
      const movie = await response.json();
      setMovie(movie);
      setStatus(FetchStatus.Success);
    }

    setStatus(FetchStatus.Loading);
    fetchMovie();
    //eslint-disable-next-line
  }, [id]);

  return {
    status,
    movie,
  };
}
