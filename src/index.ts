import getContentSource from './content_sources';

const contentSource = getContentSource('Reddit');
for (let i = 0; i < 500; i++) {
  contentSource().then((post) => {
    console.log(post);
  });
}
