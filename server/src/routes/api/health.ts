import Hapi from '@hapi/hapi';

const plugin = {
  name: 'api/health',
  register: async function (server: Hapi.Server) {
    server.route({
      method: 'GET',
      path: '/api/health',

      handler: () => {
        return { status: 'healthy' };
      },
    });
  },
};

export default plugin;
