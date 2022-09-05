import axiosClient from './axiosClient';

const logApi = {
  getAll(data) {
    const url = `/logs?q=${data.q}&page=${data.page}`;
    return axiosClient.get(url);
  },

  create(data) {
    const url = '/logs';
    return axiosClient.post(url, data);
  },
};

export default logApi;
