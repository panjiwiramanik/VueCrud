import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/data-kelas',
      name: 'kelas',
      component: () => import('@/views/Kelas.vue')
    },
    {
      path: '/data-siswa',
      name: 'siswa',
      component: () => import('@/views/Siswa.vue')
    }
  ]
})
