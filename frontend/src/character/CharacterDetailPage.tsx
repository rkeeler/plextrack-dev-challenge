import * as React from 'react';
import { Descriptions, PageHeader } from 'antd';

interface Props {
  character: Character;
}

export default function CharacterDetailPage(props: Props) {
  const { character } = props;

  return (
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title={character.name}
      style={{
        flex: '1 1 auto',
        margin: 48,
      }}
    >
      <Descriptions size="small" column={3}>
        {/* <Descriptions.Item label="Release Date"> */}
        {/* {format(parseISO(character.release_date), 'MMMM d, yyyy')} */}
        {/* </Descriptions.Item> */}
        {/* <Descriptions.Item label="Director">{character.director}</Descriptions.Item> */}
        {/* <Descriptions.Item label="Producer">{character.producer}</Descriptions.Item> */}
      </Descriptions>
    </PageHeader>
  );
}
