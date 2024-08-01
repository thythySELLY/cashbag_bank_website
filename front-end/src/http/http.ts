import axios, { AxiosInstance } from 'axios';

let http: AxiosInstance;

const configureHttp = (baseURL: string) => {
  http = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  http.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error),
  );

  http.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    },
  );
};

export { configureHttp, http };
