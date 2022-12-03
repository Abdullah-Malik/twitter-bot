import { schedule } from '@netlify/functions';
import * as dotenv from 'dotenv';
import { client } from '../src/client';
import { connect, disconnect } from '../src/db';
import { User, Following } from '../src/models';

dotenv.config();

export const handler = schedule('0 0 * * 0', async (event) => {
  connect();
  let user;

  try {
    user = await User.findOne();
    await client.v1.createFriendship({ user_id: user?.id });
  } catch (err) {
    console.log(err);
  } finally {
    await Following.insertMany(user);
    await User.deleteOne({ id: user?.id });
  }

  return {
    statusCode: 200,
  };
});

export default handler;
