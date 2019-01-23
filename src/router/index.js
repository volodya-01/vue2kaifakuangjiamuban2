import Vue from 'vue'
import Router from 'vue-router'

// const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   name: 'login',
  //   hidden: true
  // },
  {
    path: '',
    component: Layout,
    redirect: '/Home/Home'
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    name: '登录水力模型系统',
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },

  //首页
  {
    path: '/Home',
    component: Layout,
    meta: {
      title: 'Home',
      icon: 'dashboard'
    },
    children: [{
      path: 'Home',
      name: 'Home',
      component: () => import('@/views/Home/Home'),
      meta: {
        title: 'Home',
        icon: 'dashboard'
      }
    }]
  },
  // 科学调度
  {
    path: '/ScientificScheduling',
    component: Layout,
    redirect: '/Home/Home',
    name: 'ScientificScheduling',
    meta: {
      title: 'ScientificScheduling',
      icon: 'form'
    },
    children: [{
        path: 'DailyScheduling',
        name: 'DailyScheduling',
        component: () => import('@/views/ScientificScheduling/DailyScheduling'),
        meta: {
          title: 'DailyScheduling'
        }
      },
      {
        path: 'EmergencyDispatch',
        name: 'EmergencyDispatch',
        component: () => import('@/views/ScientificScheduling/EmergencyDispatch'),
        meta: {
          title: 'EmergencyDispatch'
        }
      },
      {
        path: 'PlanningScheduling',
        name: 'PlanningScheduling',
        component: () => import('@/views/ScientificScheduling/PlanningScheduling'),
        meta: {
          title: 'PlanningScheduling'
        }
      }, {
        path: 'BudgetManagement',
        name: 'BudgetManagement',
        component: () => import('@/views/ScientificScheduling/BudgetManagement'),
        meta: {
          title: 'BudgetManagement'
        }
      }
    ]
  },
  // 运行供态
  {
    path: '/RunningState',
    component: Layout,
    redirect: '/Home/Home',
    /* name: 'RunningState', */
    meta: {
      title: 'RunningState',
      icon: 'form'
    },
    children: [{
      path: 'RunningState',
      name: 'RunningState',
      component: () => import('@/views/RunningState/RunningState'),
      meta: {
        title: 'RunningState',
        icon: 'form'
      }
    }]
  },
  // 智能分析
  {
    path: '/IntelligentAnalysis',
    component: Layout,
    redirect: '/Home/Home',
    name: 'IntelligentAnalysis',
    meta: {
      title: 'IntelligentAnalysis',
      icon: 'form'
    },
    children: [{
        path: 'BurstPipe',
        name: 'BurstPipe',
        component: () => import('@/views/IntelligentAnalysis/BurstPipe'),
        meta: {
          title: 'BurstPipe'
        }
      },
      {
        path: 'SupplyPathNew',
        name: 'SupplyPathNew',
        component: () => import('@/views/IntelligentAnalysis/SupplyPathNew'),
        meta: {
          title: 'SupplyPathNew'
        }
      },
      {
        path: 'DiffusionNew',
        name: 'DiffusionNew',
        component: () => import('@/views/IntelligentAnalysis/DiffusionNew'),
        meta: {
          title: 'DiffusionNew'
        }
      }
    ]
  },
   // 精度统计
   {
     path: '/AccuracyFollowing',
     component: Layout,
     redirect: '/Home/Home',
     /* name: 'AccuracyFollowing', */
     meta: {
       title: 'AccuracyFollowing',
       icon: 'form'
     },
     children: [{
       path: 'AccuracyFollowing',
       name: 'AccuracyFollowing',
       component: () => import('@/views/AccuracyFollowing/AccuracyFollowing'),
       meta: {
         title: 'AccuracyFollowing',
         icon: 'form'
       }
     }]
   },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
