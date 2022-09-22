import { schedule } from '@netlify/functions';
import * as dotenv from 'dotenv';
import { client } from '../src/client';
import { connect, disconnect } from '../src/db';
import { SeedUser, FetchedUser } from '../src/models';

dotenv.config();

export const handler = schedule('@hourly', async (event) => {
  connect();

  const users = await SeedUser.find();
  const MAX_REQUESTS = 10;
  let count = 0;

  if (users && users.length) {
    const firstUser = users[0];
    const followingPaginator = await client.v2.following(firstUser.id_str, { asPaginator: true });

    while (!followingPaginator.done && count < MAX_REQUESTS) {
      await followingPaginator.fetchNext();
      count += 1;
    }

    await FetchedUser.insertMany(followingPaginator.data.data, { ordered: false });
    await SeedUser.deleteOne({ screen_name: firstUser.screen_name });
  }

  disconnect();
  return {
    statusCode: 200,
  };
});

export default handler;
