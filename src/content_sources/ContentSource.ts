import { AxiosResponse } from 'axios';

export default interface ContentSource {
  getContentToPost(): Promise<AxiosResponse>;
}
