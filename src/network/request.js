import axios from 'axios'

// 创建axios实例
const install = axios.create({});

install.interceptors.request.use(config => {
  return config;
}, error => {
  console.log('error', error);
});

install.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log('error', error);
  }
);

export default install;