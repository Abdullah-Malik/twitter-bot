import { schedule } from '@netlify/functions';
import * as dotenv from 'dotenv';
import { client } from '../src/client';
import { connect, disconnect } from '../src/db';
import { Following } from '../src/models';

dotenv.config();

export const handler = schedule('*/11 * * * *', async (event) => {
  connect();
  let user;

  try {
    user = await Following.findOne();
    await client.v1.destroyFriendship({ user_id: user?.id });
  } catch (err) {
    console.log(user, err);
  } finally {
    await Following.deleteOne({ id: user?.id });
  }

  return {
    statusCode: 200,
  };
});

export default handler;
