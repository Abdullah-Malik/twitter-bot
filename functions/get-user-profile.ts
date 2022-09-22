import { Handler } from '@netlify/functions';
import { client } from '../src/client';

export const handler: Handler = async (event, context) => {
  const { screenName } = event.queryStringParameters as any;
  const user = await client.v1.user({ screen_name: screenName });
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: user,
    }),
  };
};

export default handler;
