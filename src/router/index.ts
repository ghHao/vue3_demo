import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/pinia-test',
    name: 'pinia-test',
    component: () => import('@/views/piniaTest/index.vue')
  },
  // 路由动态匹配
  {
    path: '/router-match/:id(.*)',
    component: () => import('@/views/routerMatch/index.vue')
  },
  // TS
  {
    path: '/tsStudy',
    component: () => import('@/views/tsStudy/index.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // history
  history: createWebHashHistory(), // hash
  routes
})

// 全局前置守卫
router.beforeEach((to, from) => {
  // 检查用户是否已登录 并且
  if (to?.name === 'Login') { // ❗️ 避免无限重定向
    // 将用户重定向到登录页面
    return { name: 'Login' }
  }
  // 返回 false 以取消导航
  return true
})

export default router
