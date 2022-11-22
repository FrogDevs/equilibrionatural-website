import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/TheHome.vue') },
    { path: '/contato', component: () => import('../views/TheContact.vue') },
    { path: '/produtos', component: () => import('../views/TheProducts.vue') },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/ErrorPage.vue')
    }
  ]
})

export default router
