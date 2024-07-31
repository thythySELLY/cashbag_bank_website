import { useQuery } from '@tanstack/react-query';
import instance from '@/api/config';

const getData = (cacheKey: string, url: string) => {
  const fetchData = async () => {
    const { data } = await instance.get(url);
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

export { getData };
