import Hapi from '@hapi/hapi';
import fetch from 'node-fetch';
import sortBy from 'lodash/sortBy';
import Movie from '../../types/Movie';

const plugin = {
  name: 'api/movies',
  register: async function (server: Hapi.Server) {
    server.route({
      method: 'GET',
      path: '/api/movies',

      handler: async (request, h) => {
        if (request.query.sortBy === 'popular') {
          // @ts-ignore
          const popularPages = await h.pageVisitsRepository.getPageVisitCounts(
            'movie'
          );

          let popularMovies: Movie[] = [];

          for await (let popularPage of popularPages) {
            const movie = await getMovie(popularPage.resourceid);
            popularMovies.push(movie);
          }

          return popularMovies;
        } else {
          const movies = await getAllMovies();
          return sortBy(movies, (movie) => movie.episode_id);
        }
      },
    });

    server.route({
      method: 'GET',
      path: '/api/movies/{id}',

      handler: async (request, h) => {
        const { id } = request.params;
        const movie = await getMovie(id);

        // @ts-ignore
        await h.pageVisitsRepository.putPageVisit('movie', id);

        return movie;
      },
    });
  },
};

export default plugin;

async function getMovie(id: string): Promise<Movie> {
  const reponse = await fetch(`https://swapi.dev/api/films/${id}`);
  const json = await reponse.json();
  return parseMovie(json);
}

async function getAllMovies(): Promise<Movie[]> {
  const reponse = await fetch('https://swapi.dev/api/films');
  const { results } = await reponse.json();
  return results.map((movie: any) => parseMovie(movie));
}

function parseMovie(rawMovie: any): Movie {
  return {
    id: rawMovie.url
      .replace('http://swapi.dev/api/films/', '')
      .replace('/', ''),
    title: rawMovie.title,
    episode_id: rawMovie.episode_id,
    release_date: rawMovie.release_date,
    director: rawMovie.director,
    producer: rawMovie.producer,
    characters: [],
  };
}
