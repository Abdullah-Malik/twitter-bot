import { schedule } from '@netlify/functions';
import * as dotenv from 'dotenv';
import { TwitterApi } from 'twitter-api-v2';
import getContentSourceFunction from '../src/content_sources';

dotenv.config();

export const handler = schedule('*/30 8-23 * * *', async () => {
  const client = new TwitterApi({
    appKey: process.env.API_KEY || '',
    appSecret: process.env.API_KEY_SECRET || '',
    accessToken: process.env.ACCESS_TOKEN || '',
    accessSecret: process.env.ACCESS_TOKEN_SECRET || '',
  });

  const getContent = getContentSourceFunction('Reddit');
  const post = await getContent();

  client.v1.tweet(post);

  return {
    statusCode: 200,
  };
});

export default handler;
