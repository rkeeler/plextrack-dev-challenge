import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Card } from 'antd';
import { CharactersGrid, useCharacters } from '../characters';
import { CharacterDetailPage } from '../character';

const cardStyle = {
  marginBottom: 48,
};

export default function Home() {
  const { path } = useRouteMatch();
  const characters = useCharacters();

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        {({ match }) => {
          const character = characters.find(
            (character) => character.id === match?.params.id
          );
          if (!character) return null;
          return <CharacterDetailPage character={character} />;
        }}
      </Route>

      <Route exact path={path}>
        <div
          style={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 48,
          }}
        >
          <Card style={cardStyle} title="Popular">
            <CharactersGrid characters={characters} />
          </Card>
          <Card style={cardStyle} title="Alphabetical">
            <CharactersGrid characters={characters} />
          </Card>
        </div>
      </Route>
    </Switch>
  );
}
