import { Handler } from '@netlify/functions';
import { TwitterApi } from 'twitter-api-v2';
import * as dotenv from 'dotenv';

dotenv.config();

const CALLBACK_URL = 'http://127.0.0.1:9999/.netlify/functions/callback';

export const handler: Handler = async (event, context) => {
  let message;
  const client = new TwitterApi({ appKey: process.env.API_KEY || '', appSecret: process.env.API_KEY_SECRET || '' });

  try {
    const authLink = await client.generateAuthLink(CALLBACK_URL);
    message = authLink.url;
  } catch (err) {
    message = err;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
    }),
  };
};

export default handler;
