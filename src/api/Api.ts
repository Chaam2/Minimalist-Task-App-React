import { rejects } from 'assert';
import axios from 'axios';
// axios 인스턴스 생성
const Api = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
});

// 요청 인터셉터 - 헤더 설정
Api.interceptors.request.use(async (config) => {
  const Token = localStorage.getItem('Token');
  config.headers.Authorization = `Bearer ${Token}`;
  return config;
});

// 응답 인터셉터
Api.interceptors.response.use(
  (response) => {
    return response.data;
  },

  async (error) => {
    alert(error.response.data.message);
    return Promise.reject(error);
  }
);

export default Api;
