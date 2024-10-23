import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const collectionEntries = await getCollection('blog');

const pages = Object.fromEntries(collectionEntries.map(({ slug, data }) => [slug, data]));

export const { getStaticPaths, GET } = OGImageRoute({
  pages: pages,
  param: 'route',

  getImageOptions: (path, page) => ({
    bgGradient: [
      [30, 30, 46],
      [49, 50, 68]
    ],
    title: page.title,
    description: "kristianfreeman.com",
  }),
});
