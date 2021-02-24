import * as React from 'react';
import FetchStatus from '../util/FetchStatus';

export default function useCharacters() {
  const [status, setStatus] = React.useState<FetchStatus>(FetchStatus.Init);
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    async function fetchCharacters() {
      console.log('fetching characters');
      const response = await fetch('/api/characters');
      const characters = await response.json();
      setCharacters(characters);
    }

    if (status === FetchStatus.Init) {
      setStatus(FetchStatus.Loading);
      fetchCharacters();
    }
  }, [status, setStatus, setCharacters]);

  return {
    status,
    characters,
  };
}
