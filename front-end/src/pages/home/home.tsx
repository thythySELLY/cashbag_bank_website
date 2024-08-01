import { Link, createRoute } from '@tanstack/react-router';
import { rootRoute } from '@/app';

function Home() {
  return (
    <div>
      <h1 className="text-red-500">HOME</h1>
      <Link to="/shop/12345">Shop</Link>
    </div>
  );
}

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/$bankName',
  component: Home,
});
