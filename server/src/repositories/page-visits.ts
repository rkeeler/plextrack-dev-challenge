import Hapi from '@hapi/hapi';
import { Client } from 'pg';

const plugin = {
  name: 'pageVisitsRepository',
  version: '1.0.0',
  register: async function (server: Hapi.Server) {
    const client = new Client({
      host: process.env.POSTGRES_HOST || 'localhost',
      database: 'plextracdevchallenge',
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'potato',
    });

    await client.connect();

    const repository = {
      putPageVisit: async (
        resourceType: 'movie' | 'character',
        resourceId: string
      ) => {
        await client.query(
          'INSERT INTO pagevisits(resourcetype, resourceid) VALUES($1, $2)',
          [resourceType, resourceId]
        );
      },

      getPageVisitCounts: async (resourceType: 'movie' | 'character') => {
        const result = await client.query(
          `SELECT resourceid, count(id) 
           FROM pagevisits 
           WHERE resourcetype = $1
           GROUP BY resourceid
           ORDER BY count(id) desc
           LIMIT 3
          `,
          [resourceType]
        );

        return result.rows;
      },
    };

    // @ts-ignore
    server.decorate('toolkit', 'pageVisitsRepository', repository);
  },
};

export default plugin;
