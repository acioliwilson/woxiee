import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/a-woxiee',
    name: 'about',
    component: () => import('../views/WoxieeView.vue')
  },
  {
    path: '/servicos',
    name: 'services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/contato',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/oferta',
    name: 'oferta',
    component: () => import('../views/OffersView.vue')
  },
  {
    path: '/oferta/criar-site',
    name: 'criar-site',
    component: () => import('../views/BuildSite.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
