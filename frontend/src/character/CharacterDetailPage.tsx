import * as React from 'react';
import { Descriptions, PageHeader, Spin } from 'antd';
import useCharacter from './useCharacter';
import FetchStatus from '../util/FetchStatus';

interface Props {
  id: string;
}

const margin = 48;

export default function CharacterDetailPage(props: Props) {
  const { status, character } = useCharacter(props.id);

  if (status === FetchStatus.Loading) {
    return <Spin style={{ margin }} />;
  } else if (!character) {
    return <div style={{ margin }}>Movie not found</div>;
  } else {
    return (
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={character.name}
        style={{
          flex: '1 1 auto',
          margin,
        }}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Birth Year">
            {character.birth_year}
          </Descriptions.Item>

          <Descriptions.Item label="Gender">
            {character.gender}
          </Descriptions.Item>

          <Descriptions.Item label="Height">
            {character.height}
          </Descriptions.Item>

          <Descriptions.Item label="Mass">{character.mass}</Descriptions.Item>

          <Descriptions.Item label="Hair Color">
            {character.hair_color}
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    );
  }
}
