import Hapi from '@hapi/hapi';

const plugin = {
  name: 'index',
  register: async function (server: Hapi.Server) {
    // serve public static content
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: '.',
          redirectToSlash: true,
        },
      },
    });
  },
};

export default plugin;
