import { get, setBaseUrl } from '@/http';

const getInitialData = async (baseURL: string): Promise<any> => {
  await setBaseUrl(baseURL);
  const response = await get('/api/colors');
  return response;
};

export { getInitialData };
