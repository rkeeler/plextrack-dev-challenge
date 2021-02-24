import Hapi from '@hapi/hapi';
import { createServer } from '../../../src/server';

describe('api/health', () => {
  let server: Hapi.Server;

  beforeAll(async () => {
    server = await createServer();
  });

  afterAll(async () => {
    await server.stop();
  });

  test('returns 200', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/api/health',
    });
    expect(res.statusCode).toEqual(200);
  });

  test("status is 'healthy'", async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/api/health',
    });
    const { status } = JSON.parse(res.payload);
    expect(status).toEqual('healthy');
  });
});
