import getContentFromReddit from './Reddit';

const getContentSource = (type: string): (() => Promise<string>) => {
  let contentSource = () => {
    return Promise.resolve('Invalid content source name');
  };

  if (type === 'Reddit') {
    contentSource = getContentFromReddit;
  }

  return contentSource;
};

export default getContentSource;
