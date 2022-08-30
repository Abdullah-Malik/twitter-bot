import axios from 'axios';
import getRandomValue from '../utils';

const subreddits = [
  'Showerthoughts',
  'oneliners',
  'AskReddit',
  'Jokes',
  'explainlikeimfive',
  'bestof',
  'DoesAnybodyElse',
  'CrazyIdeas',
  'pickuplines',
  'LifeProTips',
];

const wordsToRemoveAndReplacements: Record<string, string> = {
  'ELI5:': '',
  'LPT:': '',
  DAE: '',
  'eli5:': '',
  ELI5: '',
  eli5: '',
};

const getContentToPost = async (): Promise<string> => {
  try {
    const randomSubreddit = getRandomValue(subreddits);
    const postsType = getRandomValue(['hot', 'top']);

    const response = await axios({
      url: `https://www.reddit.com/r/${randomSubreddit}/${postsType}/.json?t=all&limit=100`,
      method: 'GET',
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    const { children: posts } = response.data.data;
    const randomPost: any = getRandomValue(posts);
    let postTitle = randomPost.data.title;

    Object.keys(wordsToRemoveAndReplacements).forEach((key) => {
      postTitle = (postTitle as string).replace(key, wordsToRemoveAndReplacements[key]);
    });

    return postTitle;
  } catch (err) {
    return err as string;
  }
};

export default getContentToPost;
