import { Handler } from '@netlify/functions';
import getContentSourceFunction from '../src/content_sources';

const handler: Handler = async () => {
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

// eslint-disable-next-line import/prefer-default-export
export { handler };