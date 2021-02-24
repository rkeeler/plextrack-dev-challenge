import Hapi from '@hapi/hapi';

const plugin = {
  name: 'api/characters',
  register: async function (server: Hapi.Server) {
    server.route({
      method: 'GET',
      path: '/api/characters',

      handler: () => {
        return [
          {
            id: '1',
            birth_year: '19 BBY',
            eye_color: 'Blue',
            gender: 'Male',
            hair_color: 'Blond',
            height: '172',
            mass: '77',
            name: 'Luke Skywalker',
            skin_color: 'Fair',
          },
        ];
      },
    });
  },
};

export default plugin;
