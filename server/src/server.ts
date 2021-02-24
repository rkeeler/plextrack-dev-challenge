import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import Path from 'path';
import publicStaticContent from './routes/index';
import health from './routes/api/health';
import movies from './routes/api/movies';
import characters from './routes/api/characters';

export async function createServer() {
  const server = Hapi.server({
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'localhost',
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../public'),
      },
    },
  });

  await server.register([
    Inert, // needed to serve static content
    publicStaticContent,
    health,
    movies,
    characters,
  ]);

  await server.initialize();

  return server;
}

export async function startServer(server: Hapi.Server): Promise<Hapi.Server> {
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
  return server;
}
