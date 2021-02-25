import * as React from 'react';
import { Character } from '../character';
import FetchStatus from '../util/FetchStatus';

// TODO: store this data in React Context or a cache of some kind
// so we don't fetch the same data multiple times
export default function useCharacter(id: string) {
  const [status, setStatus] = React.useState<FetchStatus>(FetchStatus.Init);
  const [character, setCharacter] = React.useState<Character | null>(null);

  // TODO: Cancel fetch when component unmounted
  React.useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(`/api/characters/${id}`);
      const character = await response.json();
      setCharacter(character);
      setStatus(FetchStatus.Success);
    }

    setStatus(FetchStatus.Loading);
    fetchCharacter();
    //eslint-disable-next-line
  }, [id]);

  return {
    status,
    character,
  };
}
