import * as React from 'react';
import CharacterGridItem from '../character/CharacterGridItem';

interface Props {
  characters: Character[];
}

export default function CharactersGrid(props: Props) {
  const { characters } = props;

  return (
    <>
      {characters.map((character) => (
        <CharacterGridItem character={character} />
      ))}
    </>
  );
}
