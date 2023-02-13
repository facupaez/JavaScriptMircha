//https://developer.wordpress.org/rest-api/

const NAME = "malvestida",
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_PW = `${SITE}/wp/v2`,
  PER_PAGE = 6,
  POSTS = `${API_PW}/posts?_embed&per_page=${PER_PAGE}`,
  POST = `${API_PW}/posts`,
  SEARCH = `${API_PW}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_PW,
  PER_PAGE,
  POSTS,
  POST,
  SEARCH,
  page,
};
