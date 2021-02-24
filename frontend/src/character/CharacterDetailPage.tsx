import * as React from 'react';
import { Descriptions, PageHeader, Spin } from 'antd';
import Character from './Character';

interface Props {
  character?: Character;
  loading: boolean;
}

const margin = 48;

export default function CharacterDetailPage(props: Props) {
  const { character, loading } = props;

  if (loading) {
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
