import { Link, createRoute } from '@tanstack/react-router';
import { rootRoute } from '@/main';
import { useEffect } from 'react';
import { homeServices } from '@/services';
import { useParams } from '@tanstack/react-router';

function Home() {
  const { bankName } = useParams({ from: '/$bankName' });
  useEffect(() => {
    homeServices.setInitial(bankName);
  }, [bankName]);
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-5 roboto-regular">
      <h1>HOME</h1>
      <Link to="/shop/12345">Shop</Link>
    </div>
  );
}

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/$bankName',
  component: Home,
});
