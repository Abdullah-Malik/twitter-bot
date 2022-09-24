import { schedule } from '@netlify/functions';
import * as dotenv from 'dotenv';
import { client } from '../src/client';
import { connect, disconnect } from '../src/db';
import { FetchedUser } from '../src/models';

dotenv.config();

export const handler = schedule('*/20 * * * *', async (event) => {
  connect();

  const user = await FetchedUser.findOne();
  const followedUser = await client.v1.createFriendship({ user_id: user?.id });
  FetchedUser.deleteOne({ id: user?.id });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: user }),
  };
});

export default handler;
