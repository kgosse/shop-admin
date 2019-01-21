import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout';
import Login from '@/views/login';
import Notfound from '@/views/404';

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { 
    path: '/login',
    component: Login,
    hidden: true 
  },
  { 
    path: '/404',
    component: Notfound,
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    // redirect: '/games',
    // hidden: true,
    children: [{
      path: '',
      name: 'home',
      component: () => import('@/views/Home'),
      meta: { title: 'Home', icon: 'nested' }
    }]
  },

  {
    path: '/users',
    component: Layout,
    children: [
      {
        path: '',
        name: 'users',
        component: () => import('@/views/Users'),
        meta: { title: 'Users', icon: 'user' }
      }
    ]
  },

  {
    path: '/products',
    component: Layout,
    children: [
      {
        path: '',
        name: 'products',
        component: () => import('@/views/Products'),
        meta: { title: 'Products', icon: 'nested' }
      }
    ]
  },


  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
})
