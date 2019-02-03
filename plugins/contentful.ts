import { Context } from '@nuxt/vue-app-edge';
import * as contentful from 'contentful';
import { PressRepository } from '~/domains/contentful';

export default (
  context: Context,
  inject: (name: string, injected: {}) => void,
) => {
  const client = contentful.createClient({
    accessToken: context.env.CTF_CDA_ACCESS_TOKEN,
    space: context.env.CTF_SPACE_ID,
  });
  context.$contentful = client;
  inject('contentful', client);
  const press = new PressRepository(client);
  context.$press = press;
  inject('press', press);
};
