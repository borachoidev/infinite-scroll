import axios from 'axios';
const type = {
  a: 'a-posts',
  b: 'b-posts',
};

export const fetchList = (query, pageNumber, postType = 'a') => {
  return axios({
    method: 'GET',
    url: `https://recruit-api.yonple.com/recruit/689322/${type[postType]}`,
    params: { search: query, page: pageNumber },
  });
};

export const fetchDetail = (id, postType = 'a') => {
  return axios({
    method: 'GET',
    url: `https://recruit-api.yonple.com/recruit/689322/${type[postType]}/${id}`,
  });
};
