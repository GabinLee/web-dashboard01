import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/components',
        name: 'Components',
        component: () => import('../views/Components.vue')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../views/Setting.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
