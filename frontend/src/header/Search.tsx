import * as React from 'react';
import { AutoComplete, Input, Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';
import useSearch from './useSearch';
import FetchStatus from '../util/FetchStatus';

export default function Search() {
  const history = useHistory();
  const [search, setSearch] = React.useState<string>('');
  const { status, movies, characters } = useSearch(search);

  const debouncedSetSearch = debounce((v: string) => setSearch(v), 500);

  let options = [];

  if (status === FetchStatus.Loading) {
    options.push({
      label: <Spin />,
      options: [],
    });
  } else {
    if (movies && movies.length > 0) {
      options.push({
        label: 'Movies',
        options: movies.map((movie) => ({
          value: movie.title,
          label: movie.title,
        })),
      });
    }

    if (characters && characters.length > 0) {
      options.push({
        label: 'Characters',
        options: characters.map((character) => ({
          value: character.name,
          label: character.name,
        })),
      });
    }
  }

  return (
    <AutoComplete
      dropdownMatchSelectWidth={250}
      style={{ width: 250 }}
      options={options}
      onSearch={(v) => debouncedSetSearch(v)}
      onSelect={(option) => {
        const movie = movies.find((movie) => movie.title === option);
        const character = characters.find(
          (character) => character.name === option
        );

        if (movie) {
          history.push(`/movies/${movie.id}`);
        } else if (character) {
          history.push(`/characters/${character.id}`);
        }
      }}
    >
      <Input.Search size="middle" placeholder="Search..." />
    </AutoComplete>
  );
}
