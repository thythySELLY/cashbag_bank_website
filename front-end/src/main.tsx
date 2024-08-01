import React, { useEffect, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRouter,
  createRootRoute,
} from '@tanstack/react-router';
import { Navbar } from '@/components';
import { homeRoute, shopRoute } from '@/pages';

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

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
