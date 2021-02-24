import Hapi from '@hapi/hapi';
import fetch from 'node-fetch';
import sortBy from 'lodash/sortBy';
import take from 'lodash/take';
import Character from '../../types/Character';

const plugin = {
  name: 'api/characters',
  register: async function (server: Hapi.Server) {
    server.route({
      method: 'GET',
      path: '/api/characters',

      handler: async (request) => {
        let characters: Character[] = [];
        let nextUrl = 'https://swapi.dev/api/people';

        while (nextUrl != null) {
          const reponse = await fetch(nextUrl);
          const { results, next } = await reponse.json();

          characters = [
            ...characters,
            ...results.map((character: any) => {
              return {
                id: character.url
                  .replace('http://swapi.dev/api/people/', '')
                  .replace('/', ''),
                name: character.name,
                birth_year: character.birth_year,
                gender: character.gender,
                height: character.height,
                mass: character.mass,
                eye_color: character.eye_color,
                hair_color: character.hair_color,
                skin_color: character.skin_color,
              } as Character;
            }),
          ];

          nextUrl = next;
        }

        if (request.query.sortBy === 'popular') {
          return take(characters, 5);
        } else {
          // alphabetical
          return sortBy(characters, (character) =>
            character.name.toLowerCase()
          );
        }
      },
    });
  },
};

export default plugin;
