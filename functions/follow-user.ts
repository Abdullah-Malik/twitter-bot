import { schedule } from '@netlify/functions';
import * as dotenv from 'dotenv';
import { client } from '../src/client';
import { connect, disconnect } from '../src/db';
import { FetchedUser } from '../src/models';

dotenv.config();

export const handler = schedule('*/15 * * * *', async (event) => {
  connect();
  let user;

  try {
    user = await FetchedUser.findOne();
    await client.v1.createFriendship({ user_id: user?.id });
  } catch (err) {
    console.log(err);
  } finally {
    await FetchedUser.deleteOne({ id: user?.id });
  }

  return {
    statusCode: 200,
  };
});

export default handler;
