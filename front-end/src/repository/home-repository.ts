import { http } from '@/http';

const get = async (path: string, payload?: object) => {
  const customPayload =
    new URLSearchParams(payload as Record<string, string>).toString() || '';
  const url = customPayload === '' ? path : `${path}?${customPayload}`;
  const result = await http.get(url);
  return result;
};

const post = async (path: string, body: object) => {
  const result = await http.post(path, body);
  return result;
};

export { get, post };
