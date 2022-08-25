import axios from 'axios';
import ContentSource from '../ContentSource';

export default class Reddit implements ContentSource {
  async getContentToPost(): Promise<string> {
    const posts = await axios({
      url: `https://www.reddit.com/r/Showerthoughts/hot/.json?t=all&limit=100`,
      method: 'GET',
    });
    return Promise.resolve('Hello');
  }
}
