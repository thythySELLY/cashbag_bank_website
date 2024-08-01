import { get } from '@/http';

const getData = async (): Promise<object> => {
  const data = await get('/api/shop');
  return data;
};

export { getData };
