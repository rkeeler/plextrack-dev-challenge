import * as React from 'react';
import { Character } from '../character';
import FetchStatus from '../util/FetchStatus';

export default function useCharacters(sortBy: 'popular' | 'chronological') {
  const [status, setStatus] = React.useState<FetchStatus>(FetchStatus.Init);
  const [characters, setCharacters] = React.useState<Character[]>([]);

  // TODO: Cancel fetch when component unmounted
  React.useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch(`/api/characters?sortBy=${sortBy}`);
      const characters = await response.json();
      setCharacters(characters);
      setStatus(FetchStatus.Success);
    }

    if (status === FetchStatus.Init) {
      setStatus(FetchStatus.Loading);
      fetchCharacters();
    }
  }, [sortBy, status, setStatus, setCharacters]);

  return {
    status,
    characters,
  };
}
