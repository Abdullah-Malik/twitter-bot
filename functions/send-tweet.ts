import { schedule } from '@netlify/functions';
import * as dotenv from 'dotenv';
import getContentSourceFunction from '../src/content_sources';
import { client } from '../src/client';

dotenv.config();

export const handler = schedule('0 0 * * *', async () => {
  const getContent = getContentSourceFunction('Reddit');
  try {
    const post = await getContent();
    const tweet = await client.v1.tweet(post);

    console.log(post);
    console.log(tweet);
  } catch (err) {
    console.log(err);
  }

  return {
    statusCode: 200,
  };
});

export default handler;
