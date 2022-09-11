import { TwitterApi } from 'twitter-api-v2';
import * as dotenv from 'dotenv';
// import getContentSourceFunction from './content_sources';

dotenv.config();

const client = new TwitterApi({
  appKey: process.env.API_KEY || '',
  appSecret: process.env.API_KEY_SECRET || '',
  accessToken: process.env.ACCESS_TOKEN || '',
  accessSecret: process.env.ACCESS_TOKEN_SECRET || '',
});

(async () => {
  // const getContent = getContentSourceFunction('Reddit');
  // const post = await getContent();
  // console.log(post);
  const res = await client.v1.destroyFriendship({ screen_name: 'elonmusk' });
  console.log(res);
})();

export {};
