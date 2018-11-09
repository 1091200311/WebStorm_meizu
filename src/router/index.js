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
          meta: {title: '数码影音-魅族商城'}
        },
        ]
    }
  ]
})
