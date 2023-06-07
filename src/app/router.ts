import { RouteRecordRaw } from 'vue-router';
import { authRoutes } from '@pages/auth/router';

export const appRoutes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: 'testing'
  },
  {
    path: '/testing',
    name: 'testing',
    component: () => import('@pages/testing/TestingPage.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@pages/auth/AuthPage.vue'),
    children: authRoutes
  }
]