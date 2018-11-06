import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '首页'},
    }
  ]
})
