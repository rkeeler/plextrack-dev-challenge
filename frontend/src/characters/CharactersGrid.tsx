import * as React from 'react';
import { Character, CharacterGridItem } from '../character';

interface Props {
  characters: Character[];
}

export default function CharactersGrid(props: Props) {
  const { characters } = props;

  return (
    <>
      {characters.map((character) => (
        <CharacterGridItem character={character} key={character.id} />
      ))}
    </>
  );
}
