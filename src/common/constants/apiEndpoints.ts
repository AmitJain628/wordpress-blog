export default {
    BLOG: {
      GET_MENU: {
        URL: '/blog/menu',
        METHOD: 'GET'
      },
      GET_TAGS: {
        URL: '/blog/tags',
        METHOD: 'GET'
      },
      GET_POSTS: {
        URL: (category?: string, tag?: string) => `/blog/posts?category=${category}&&tag=${tag}`,
        METHOD: 'GET'
      }
    }
};
