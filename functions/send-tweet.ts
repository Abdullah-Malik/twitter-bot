import { schedule } from '@netlify/functions';

export const handler = schedule('*/1 * * * *', async (event) => {
  const eventBody = JSON.parse(event.body || '');
  console.log(`Next function run at ${eventBody.next_run}.`);

  return {
    statusCode: 200,
  };
});

export default handler;
