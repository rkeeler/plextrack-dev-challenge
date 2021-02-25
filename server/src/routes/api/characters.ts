import Hapi from '@hapi/hapi';
import fetch from 'node-fetch';
import sortBy from 'lodash/sortBy';
import Character from '../../types/Character';

const plugin = {
  name: 'api/characters',
  register: async function (server: Hapi.Server) {
    server.route({
      method: 'GET',
      path: '/api/characters',

      handler: async (request, h) => {
        // throw;
        if (request.query.sortBy === 'popular') {
          // @ts-ignore
          const popularPages = await h.pageVisitsRepository.getPageVisitCounts(
            'character'
          );

          let popularCharacters: Character[] = [];

          // could parallelize with Promise.all to speed up this request
          for await (let popularPage of popularPages) {
            const character = await getCharacter(popularPage.resourceid);
            popularCharacters.push(character);
          }

          return popularCharacters;
        } else {
          const characters = await getCharacters(request.query.search);
          return sortBy(characters, (character) =>
            character.name.toLowerCase()
          );
        }
      },
    });

    server.route({
      method: 'GET',
      path: '/api/characters/{id}',

      handler: async (request, h) => {
        const { id } = request.params;
        const character = await getCharacter(id);

        // @ts-ignore
        await h.pageVisitsRepository.putPageVisit('character', id);

        return character;
      },
    });
  },
};

export default plugin;

async function getCharacter(id: string): Promise<Character> {
  const reponse = await fetch(`https://swapi.dev/api/people/${id}`);
  const json = await reponse.json();
  return parseCharacter(json);
}

async function getCharacters(search?: string): Promise<Character[]> {
  let characters: Character[] = [];

  let nextUrl = 'https://swapi.dev/api/people';

  if (search != null) {
    nextUrl += `?search=${search}`;
  }

  while (nextUrl != null) {
    const reponse = await fetch(nextUrl);
    const { results, next } = await reponse.json();

    characters = [
      ...characters,
      ...results.map((character: any) => parseCharacter(character)),
    ];

    nextUrl = next;
  }

  return characters;
}

function parseCharacter(rawCharacter: any): Character {
  return {
    id: rawCharacter.url
      .replace('http://swapi.dev/api/people/', '')
      .replace('/', ''),
    name: rawCharacter.name,
    birth_year: rawCharacter.birth_year,
    gender: rawCharacter.gender,
    height: rawCharacter.height,
    mass: rawCharacter.mass,
    eye_color: rawCharacter.eye_color,
    hair_color: rawCharacter.hair_color,
    skin_color: rawCharacter.skin_color,
  };
}
