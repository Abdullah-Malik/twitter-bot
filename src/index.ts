import Reddit from './content_sources/Reddit/Reddit';

const reddit = new Reddit();
reddit.getContentToPost().then((posts) => {
  console.log(posts);
});
