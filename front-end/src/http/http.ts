import axios, { AxiosInstance } from 'axios';

let http: AxiosInstance;

const setHttp = (baseURL: string) => {
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

const get = async (path: string, payload?: object): Promise<object> => {
  const customPayload =
    new URLSearchParams(payload as Record<string, string>).toString() || '';
  const url = customPayload === '' ? path : `${path}?${customPayload}`;
  const result = await http.get(url);
  return result;
};

const post = async (path: string, body: object): Promise<object> => {
  const result = await http.post(path, body);
  return result;
};

export { setHttp, get, post };
