import axiosClient from './axiosClient';

const deviceApi = {
  getAll() {
    const url = '/devices';
    return axiosClient.get(url);
  },

  create(data) {
    const url = '/devices';
    return axiosClient.post(url, data);
  },
};

export default deviceApi;
