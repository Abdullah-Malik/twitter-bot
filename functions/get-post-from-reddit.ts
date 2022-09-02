import { Handler } from '@netlify/functions';
import getContentSourceFunction from '../src/content_sources';

export const handler: Handler = async () => {
  try {
    const getContent = getContentSourceFunction('Reddit');
    const post = await getContent();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: post }),
    };
  } catch {
    return { statusCode: 500, error: 'Internal server error' };
  }
};

export default handler;
