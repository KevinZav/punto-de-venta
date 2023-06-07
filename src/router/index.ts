import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { appRoutes } from '@/app/router'

const routes: Array<RouteRecordRaw> = [
  ...appRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
