import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Setup',
      component: () => import(/* webpackChunkName: "setup" */ './components/Setup.vue')
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import(/* webpackChunkName: "components" */ './components/Components.vue')
    },
    {
      path: '/examples',
      name: 'examples',
      component: () => import(/* webpackChunkName: "examples" */ './components/Examples.vue')
    }
  ]
})
export default router
