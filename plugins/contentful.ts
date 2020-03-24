import { Plugin } from '@nuxt/types';
import * as contentful from 'contentful';

import { PressRepository } from '~/domains/contentful';

const plugin: Plugin = (ctx, inject) => {
  const client = contentful.createClient({
    accessToken: ctx.env.CTF_CDA_ACCESS_TOKEN,
    space: ctx.env.CTF_SPACE_ID,
  });
  ctx.$contentful = client;
  inject('contentful', client);
  const press = new PressRepository(client);
  ctx.$press = press;
  inject('press', press);
};

export default plugin;
