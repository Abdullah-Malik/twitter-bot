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
  LPT: '',
  DAE: '',
  'eli5:': '',
  ELI5: '',
  eli5: '',
  Eli5: '',
  'Eli5:': '',
  kill: '****',
  Kill: '****',
  KILL: '****',
  SUICIDE: '*******',
  Suicide: '*******',
};

const doProcessingOnText = (text: string): string => {
  let processedText = text;
  Object.keys(wordsToRemoveAndReplacements).forEach((key) => {
    processedText = processedText.replace(key, wordsToRemoveAndReplacements[key]);
  });

  processedText = processedText.trim();
  return processedText;
};

const getContentFromReddit = async (): Promise<string> => {
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
    const postTitle = doProcessingOnText(randomPost.data.title);

    return postTitle;
  } catch (err) {
    return err as string;
  }
};

export default getContentFromReddit;
