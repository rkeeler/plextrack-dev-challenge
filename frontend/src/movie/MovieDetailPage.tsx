import * as React from 'react';
import { Descriptions, PageHeader, Spin } from 'antd';
import { format, parseISO } from 'date-fns';
import getRomanNumeral from '../util/getRomanNumeral';
import Movie from './Movie';

interface Props {
  movie?: Movie;
  loading: boolean;
}

const margin = 48;

export default function MovieDetailPage(props: Props) {
  const { loading, movie } = props;

  if (loading) {
    return <Spin style={{ margin }} />;
  } else if (!movie) {
    return <div style={{ margin }}>Movie not found</div>;
  } else {
    return (
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={`Star Wars Episode ${getRomanNumeral(movie.episode_id)}: ${
          movie.title
        }`}
        style={{
          flex: '1 1 auto',
          margin,
        }}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Release Date">
            {format(parseISO(movie.release_date), 'MMMM d, yyyy')}
          </Descriptions.Item>

          <Descriptions.Item label="Director">
            {movie.director}
          </Descriptions.Item>

          <Descriptions.Item label="Producer">
            {movie.producer}
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    );
  }
}
