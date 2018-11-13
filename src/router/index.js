import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/index',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '首页'},
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: {title: '关注'},
        },
        {
          //手机组件
          path: '/phone',
          component: resolve => require(['../components/page/Phone.vue'], resolve),
          meta: {title: '手机-魅族商城'}
        },
        {
          // 声学组件
          path: '/voice',
          component: resolve => require(['../components/page/Voice.vue'], resolve),
          meta: {title: '数码影音-魅族商城'}
        },
        {
          // 智能组件
          path: '/wisdom',
          component: resolve => require(['../components/page/Wisdom.vue'], resolve),
          meta: {title: '智能-魅族商城'}
        },
        {
          // 生活组件
          path: '/life',
          component: resolve => require(['../components/page/Life.vue'], resolve),
          meta: {title: '生活周边-魅族商城'}
        },
        {
          // 服务组件
          path: '/service',
          component: resolve => require(['../components/page/Service.vue'], resolve),
          meta: {title: '服务支持-魅族官网'}
        },
        {
          // 专卖店组件
          path: '/retail',
          component: resolve => require(['../components/page/Retail.vue'], resolve),
          meta: {title: '专卖店查询-魅族官网'}
        },
        {
          // 我的订单组件
          path: '/list',
          component: resolve => require(['../components/page/List.vue'], resolve),
          meta: {title: '我的订单'}
        },
        {
          path:'/g/:id',
          component: resolve => require(['../components/page/Goods.vue'], resolve),
          meta:{title:'用户详情'}
        },
        {
          path:'login',
          component: resolve => require(['../components/page/Login.vue'], resolve),
          meta:{title:'退出'}
        }
      ]
    },
    {
      // 个人中心组件
      path: '/u',
      component: resolve => require(['../components/page/User.vue'], resolve),
      meta: {title: '个人中心'}
    },
    {
      // Flyme组件
      path: '/Flyme',
      component: resolve => require(['../components/page/Flyme.vue'], resolve),
      meta: {title: 'Flyme官网-首页'}
    },
    {
      // 购物车组件
      path: '/Shopping-car',
      component: resolve => require(['../components/page/Shopping-car.vue'], resolve),
      meta: {title: '购物车-我的购物车'}
    }
  ]
})
