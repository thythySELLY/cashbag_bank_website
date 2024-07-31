import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRouter,
  createRootRoute,
} from '@tanstack/react-router';
import Navbar from '@/components/navbar';
import { homeRoute } from '@/pages/home';
import { shopRoute } from '@/pages/shop';

export const rootRoute = createRootRoute({
  component: () => <Navbar />,
});

const routeTree = rootRoute.addChildren([homeRoute, shopRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
