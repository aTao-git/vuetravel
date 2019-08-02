import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      name: 'default',
      path: '/',
      component: () => import('@/views/index'),
      redirect: { name: 'index' },
      children: [
        {
          name: 'index',
          path: '/',
          component: () => import('@/views/slider')
        },
        {
          name: 'post',
          path: '/post',
          component: () => import('@/views/post')
        },
        {
          name: 'hotel',
          path: '/hotel',
          component: () => import('@/views/hotel')
        },
        {
          name: 'air',
          path: '/air',
          component: () => import('@/views/air')
        }
      ]
    }
  ]
})
