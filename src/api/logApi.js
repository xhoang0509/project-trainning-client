import axiosClient from './axiosClient';

const logApi = {
  getAll() {
    const url = '/logs';
    return axiosClient.get(url);
  },

  create(data) {
    const url = '/logs';
    return axiosClient.post(url, data);
  },
};


export default logApi