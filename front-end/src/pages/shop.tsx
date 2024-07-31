import { rootRoute } from '@/main';
import { useParams, createRoute } from '@tanstack/react-router';

const Shop = () => {
  const { shopId } = useParams({ from: '/shop/$shopId' });
  return (
    <div className='flex flex-col justify-center items-center gap-4 my-5 roboto-regular'>
      <h1>Shop</h1>
      <h1>Shop ID: {shopId}</h1>
    </div>
  );
};

export const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/shop/$shopId',
  component: Shop,
});
