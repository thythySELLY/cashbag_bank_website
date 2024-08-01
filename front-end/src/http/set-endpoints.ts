import { api, setHttp } from '@/http';
export const setBaseUrl = (bank: string) => {
  api.BASE_URL = api.CORE_BASE_URL(bank);
  setHttp(api.CORE_BASE_URL(bank));
};
