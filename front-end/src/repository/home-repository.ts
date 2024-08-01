import { get } from '@/http';

const getData = async (payload?: object): Promise<object> => {
  const data = await get('/api/colors', payload);
  return data;
};

export { getData };
