import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Card, Spin } from 'antd';
import { CharactersGrid, useCharacters } from '../characters';
import { CharacterDetailPage } from '../character';
import FetchStatus from '../util/FetchStatus';

const cardStyle = {
  marginBottom: 48,
};

export default function CharactersPage() {
  const { path } = useRouteMatch();
  const {
    characters: popularCharacters,
    status: popularStatus,
  } = useCharacters('popular');
  const {
    characters: chronologicalCharacters,
    status: chronologicalStatus,
  } = useCharacters('chronological');

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        {({ match }) => {
          const character = chronologicalCharacters.find(
            (character) => character.id === match?.params.id
          );
          return (
            <CharacterDetailPage
              character={character}
              loading={chronologicalStatus === FetchStatus.Loading}
            />
          );
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
            {popularStatus === FetchStatus.Loading ? (
              <Spin />
            ) : (
              <CharactersGrid characters={popularCharacters} />
            )}
          </Card>
          <Card style={cardStyle} title="Alphabetical">
            {chronologicalStatus === FetchStatus.Loading ? (
              <Spin />
            ) : (
              <CharactersGrid characters={chronologicalCharacters} />
            )}
          </Card>
        </div>
      </Route>
    </Switch>
  );
}
