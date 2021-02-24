import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

interface Props {
  character: Character;
}

const width = 300;

export default function CharacterGridItem(props: Props) {
  const { character } = props;

  return (
    <Link to={`/characters/${character.id}`} style={{ width }}>
      <Card.Grid
        style={{
          width,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h4 style={{ marginBottom: 0 }}>{character.name}</h4>
      </Card.Grid>
    </Link>
  );
}
