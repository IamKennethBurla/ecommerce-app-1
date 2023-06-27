import { IRoute } from '@common-core';
import { lazy } from 'react';

const HomePage = lazy(() => import('./HomePage/HomePage'));

const Routes: IRoute[] = [
  {
    key: 'home-page',
    isRouteProtected: true,
    component: HomePage,
    exact: true,
    path: '/',
    title: 'AirbnbClone',
  },
];

export default Routes;
