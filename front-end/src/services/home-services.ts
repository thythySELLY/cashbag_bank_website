import { useQuery } from '@tanstack/react-query';
import { setBaseUrl, http } from '@/http';
import { setColor } from '@/utils';

const setInitial = async (bankName: string) => {
  await setBaseUrl(bankName);
  await setColor();
};

const getData = (cacheKey: string, url: string) => {
  const fetchData = async () => {
    const { data } = await http.get(url);
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [cacheKey],
    queryFn: fetchData,
    // staleTime: 5000,
    // cacheTime: 6000,
  });

  return { data, error, isLoading };
};

// const usePost

export { setInitial, getData };
