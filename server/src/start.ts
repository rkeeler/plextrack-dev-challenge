import { createServer, startServer } from './server';

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

async function start() {
  const server = await createServer();
  await startServer(server);
}

start();
