import axios from 'axios';
import Qs from 'qs';

// for interceptors etc.

export const instance = axios.create({
  baseURL: 'https://meo.world/api',
  paramsSerializer(params) {
    return Qs.stringify(params, { arrayFormat: 'brackets' });
  },
});

export const requestApi = async (method, url, data, multipart = false, cancelToken = null) => {
  const config = {
    method,
    url,
    params: {},
  };

  if (data) {
    switch (method) {
      case 'post':
      case 'put':
      case 'patch':
        config.data = data;
        break;
      default:
        config.params = { ...config.params, ...data };
        break;
    }
  }

  if (cancelToken) {
    config.cancelToken = cancelToken;
  }

  if (multipart) {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
    config.headers = { 'Content-Type': undefined, enctype: 'multipart/form-data' };
    config.data = formData;
  } else if (method !== 'get') {
    config.data = data;
  }

  config.headers = { ...config.headers, '-x-forsage-api-version': '1.1' };

  try {
    const { data } = await instance.request(config);

    return data;
  } catch (error) {
    throw error;
  }
};
