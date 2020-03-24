/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as contentful from 'contentful';

import { PressPost, PressRepository } from '../../domains/contentful';

let ctfClient: contentful.ContentfulClientApi;
let press: PressPost[];

function getClient() {
  if (!ctfClient) {
    ctfClient = contentful.createClient({
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN!,
      space: process.env.CTF_SPACE_ID!,
    });
  }
  return ctfClient;
}

export async function getPress() {
  if (!press) {
    const repo = new PressRepository(getClient());
    press = await repo.all();
  }
  return press;
}
