import Hapi from '@hapi/hapi';
import fetch from 'node-fetch';
import sortBy from 'lodash/sortBy';
import take from 'lodash/take';
import Movie from '../../types/Movie';

const plugin = {
  name: 'api/movies',
  register: async function (server: Hapi.Server) {
    server.route({
      method: 'GET',
      path: '/api/movies',

      handler: async (request) => {
        const reponse = await fetch('https://swapi.dev/api/films');
        const { results } = await reponse.json();

        const movies = results.map((movie: any) => {
          return {
            id: movie.url
              .replace('http://swapi.dev/api/films/', '')
              .replace('/', ''),
            title: movie.title,
            episode_id: movie.episode_id,
            release_date: movie.release_date,
            director: movie.director,
            producer: movie.producer,
            characters: [],
          } as Movie;
        });

        if (request.query.sortBy === 'popular') {
          return take(movies, 3);
        } else {
          // chronological
          return sortBy(movies, (movie) => movie.episode_id);
        }
      },
    });
  },
};

export default plugin;
