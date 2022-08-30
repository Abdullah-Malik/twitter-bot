import getContentToPost from './content_sources/Reddit';

getContentToPost().then((posts) => {
  console.log(posts);
});
