import axios from 'axios';
import getRandomValue from '../../utils';
import ContentSource from '../ContentSource';

export default class Reddit implements ContentSource {
  subreddits = [
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

  async getContentToPost(): Promise<string> {
    try {
      const randomSubreddit = getRandomValue(this.subreddits);
      const postsType = getRandomValue(['hot', 'top']);

      const response = await axios({
        url: `https://www.reddit.com/r/${randomSubreddit}/${postsType}/.json?t=all&limit=100`,
        method: 'GET',
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      });

      const { children: posts } = response.data.data;
      const randomPost: any = getRandomValue(posts);
      const postTitle = randomPost.data.title;

      return postTitle;
    } catch (err) {
      return err as string;
    }
  }
}
