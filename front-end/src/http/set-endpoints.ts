import { api, configureHttp } from '@/http';
export const setBaseUrl = (bank: string) => {
  api.BASE_URL = api.CORE_BASE_URL(bank);
  configureHttp(api.CORE_BASE_URL(bank));
};
