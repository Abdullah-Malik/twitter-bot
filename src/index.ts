import { TwitterApi } from 'twitter-api-v2';
import * as dotenv from 'dotenv';
import { connection } from './db';
import { User } from './models';

dotenv.config();
connection();

const client = new TwitterApi({
  appKey: process.env.API_KEY || '',
  appSecret: process.env.API_KEY_SECRET || '',
  accessToken: process.env.ACCESS_TOKEN || '',
  accessSecret: process.env.ACCESS_TOKEN_SECRET || '',
});

(async () => {
  const elonmusk = await client.v1.user({ screen_name: 'elonmusk' });
  const user = new User(elonmusk);
  console.log(user);
  user.save();
})();

export {};
