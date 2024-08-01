import { useEffect } from 'react';
import {
  RouterProvider,
  createRouter,
  createRootRoute,
} from '@tanstack/react-router';
import { Navbar } from '@/components';
import { homeRoute, shopRoute } from '@/pages';
import { systemServices } from '@/services';

export const rootRoute = createRootRoute({
  component: () => {
    return <Navbar />;
  },
});

const routeTree = rootRoute.addChildren([homeRoute, shopRoute]);
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
const App = () => {
  const url = new URL(window.location.href);
  const hostname = url.pathname;
  let bankName = hostname.split('/')[1];
  useEffect(() => {
    systemServices.setInitial(bankName);
  }, [bankName]);

  return <RouterProvider router={router} />;
};

export default App;
