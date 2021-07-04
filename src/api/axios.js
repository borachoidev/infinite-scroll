import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const http = axios.create({
  baseURL: 'https://recruit-api.yonple.com/recruit/689322',
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
    enabledByDefault: false,
  }),
});

const type = {
  a: 'a-posts',
  b: 'b-posts',
};

export const fetchList = (query, pageNumber, history, postType = 'a') => {
  return http.get(`/${type[postType]}`, {
    forceUpdate: history.action === 'PUSH',
    params: { search: query, page: pageNumber },
    cache: true,
  });
};

export const fetchDetail = (id, postType = 'a') => {
  return http.get(`${type[postType]}/${id}`);
};
