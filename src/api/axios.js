import axios from 'axios';
export const fetchDetail = (id, postType = 'a-posts') => {
  return axios({
    method: 'GET',
    url: `https://recruit-api.yonple.com/recruit/689322/${postType}/${id}`,
  });
};

export const fetchList = (query, pageNumber, postType) => {
  return axios({
    method: 'GET',
    url: `https://recruit-api.yonple.com/recruit/689322/${postType}`,
    params: { search: query, page: pageNumber },
  });
};
