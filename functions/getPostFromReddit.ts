import { Handler } from '@netlify/functions';

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};

// eslint-disable-next-line import/prefer-default-export
export { handler };
