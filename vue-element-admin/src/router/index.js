import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/index'

Vue.use(VueRouter)

const defaultRoutes = [
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/404/index.vue')
  }
]

export const menuRouters = [
  {
    path: '/home',
    name: 'Home',
    meta: { icon: 'el-icon-s-home' },
    component: Layout,
    redirect: '/Home',
    children: [{ path: '/Home', meta: { index: 1 }, component: Home }]
  },
  {
    path: '/about',
    name: 'About',
    meta: { icon: 'el-icon-user-solid' },
    component: Layout,
    redirect: '/About',
    children: [{ path: '/About', meta: { index: 1 }, component: () => import('../views/About.vue') }]
  },
  {
    path: '/echarts',
    name: 'Echarts',
    meta: { icon: 'el-icon-s-data' },
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: '使用echarts',
        meta: { index: 2 },
        component: () => import('../views/echarts/index.vue')
      },
      {
        path: 'bar',
        name: '柱状图',
        meta: { index: 2 },
        component: () => import('../views/echarts/demo/bar/index.vue')
      },
      {
        path: 'pie',
        name: '饼状图',
        meta: { index: 2 },
        component: () => import('../views/echarts/demo/pie/index.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    meta: { icon: 'el-icon-menu' },
    component: Layout,
    redirect: '/test1',
    children: [
      { path: 'test1', name: 'test1', meta: { index: 2 }, component: () => import('../views/test/test1.vue') },
      { path: 'test2', name: 'test2', meta: { index: 2 }, component: () => import('../views/test/test2.vue') }
    ]
  }
]

export default new VueRouter({
  routes: defaultRoutes.concat(menuRouters).concat([{ path: '*', redirect: '/404', meta: { title: '404' } }])
})
