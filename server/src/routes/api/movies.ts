import Hapi from '@hapi/hapi';

const plugin = {
  name: 'api/movies',
  register: async function (server: Hapi.Server) {
    server.route({
      method: 'GET',
      path: '/api/movies',

      handler: () => {
        return [
          {
            id: '1',
            title: 'The Phantom Menace',
            episode_id: 1,
            release_date: '2000-01-01',
            director: 'George Lucas',
            producer: 'Rick McCallum',
            characters: [],
          },
          {
            id: '2',
            title: 'Attack of the Clones',
            episode_id: 2,
            release_date: '2002-01-01',
            director: '',
            producer: '',
            characters: [],
          },
        ];
      },
    });
  },
};

export default plugin;
