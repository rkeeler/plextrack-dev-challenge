import * as React from 'react';
import { Movie } from '../movie';
import { Character } from '../character';
import FetchStatus from '../util/FetchStatus';

export default function useSearch(maybeSearch: string) {
  const [search, setSearch] = React.useState<string>();
  const [status, setStatus] = React.useState<FetchStatus>(FetchStatus.Init);
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [characters, setCharacters] = React.useState<Character[]>([]);

  // reset fetch status when search term changes
  React.useEffect(() => {
    if (maybeSearch !== search) {
      setSearch(maybeSearch);
      setStatus(FetchStatus.Init);
    }
  }, [search, maybeSearch]);

  React.useEffect(() => {
    async function performFetch() {
      const moviesResponse = await fetch(`/api/movies?search=${search}`);
      const movies = await moviesResponse.json();

      const charactersResponse = await fetch(
        `/api/characters?search=${search}`
      );
      const characters = await charactersResponse.json();

      setMovies(movies);
      setCharacters(characters);
      setStatus(FetchStatus.Success);
    }

    if (status === FetchStatus.Init && !isEmpty(search)) {
      setStatus(FetchStatus.Loading);
      performFetch();
    }
  }, [search, status, setStatus, setMovies, setCharacters]);

  return {
    status,
    movies,
    characters,
  };
}

function isEmpty(v: string | null | undefined) {
  return v === null || v === undefined || v === '';
}
