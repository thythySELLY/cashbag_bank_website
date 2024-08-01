import { setBaseUrl } from '@/http';
import { setDynamicStyle } from '@/utils';
import { systemRepository } from '@/repository';

const setInitial = async (bankName: string): Promise<object> => {
  const data = await systemRepository.getInitialData(bankName);
  const color: string = `#${data?.data.colors[8].hex}`;
  await setDynamicStyle(color);
  return data;
};

export { setInitial };
