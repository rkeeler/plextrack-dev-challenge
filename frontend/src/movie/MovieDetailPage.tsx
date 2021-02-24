import * as React from 'react';
import { Descriptions, PageHeader } from 'antd';
import { format, parseISO } from 'date-fns';
import getRomanNumeral from '../util/getRomanNumeral';

interface Props {
  movie: Movie;
}

export default function MovieDetailPage(props: Props) {
  const { movie } = props;

  return (
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title={`Star Wars Episode ${getRomanNumeral(movie.episode_id)}: ${
        movie.title
      }`}
      style={{
        flex: '1 1 auto',
        margin: 48,
      }}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Release Date">
          {format(parseISO(movie.release_date), 'MMMM d, yyyy')}
        </Descriptions.Item>
        <Descriptions.Item label="Director">{movie.director}</Descriptions.Item>
        <Descriptions.Item label="Producer">{movie.producer}</Descriptions.Item>
      </Descriptions>
    </PageHeader>
  );
}
