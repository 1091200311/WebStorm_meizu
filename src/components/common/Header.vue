<template>
    <b-navbar toggleable="md" type="light" variant="default" fixed class="box">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <router-link to="/">
        <b-navbar-brand>
          <b-img width="85" height="50" src=".../static/img/meizu.png"/>
        </b-navbar-brand>
      </router-link>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">手机</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/subscriptions">声学</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/notifications">消息</router-link>
          </b-nav-item>
          <b-nav-item v-if="token===null">
            <router-link to="/index">首页</router-link>
          </b-nav-item>
          <b-nav-item v-if="token===null">
            <router-link to="/dowload">下载App</router-link>
          </b-nav-item>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Aa</b-nav-item>
          <b-nav-item v-if="token===null">
            <router-link to="/sign-in">登录</router-link>
          </b-nav-item>
          <b-nav-item v-if="token===null">
            <router-link to="/sign-up">注册</router-link>
          </b-nav-item>
          <b-nav-item-dropdown right v-if="token!=null">
            <b-dropdown-item>
              <router-link to="/u">
                我的主页
              </router-link>
            </b-dropdown-item>
            <template slot="button-content">
              <b-img rounded="circle" width="35" height="35" src="//cdn2.jianshu.io/assets/default_avatar/7-0993d41a595d6ab6ef17b19496eb2f21.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"/>
            </template>
            <b-dropdown-item href="#">收藏的文章</b-dropdown-item>
            <b-dropdown-item href="#">喜欢的文章</b-dropdown-item>
            <b-dropdown-item href="#">已购内容</b-dropdown-item>
            <b-dropdown-item href="#">我的钱包</b-dropdown-item>
            <b-dropdown-item >
              <router-link to="/settings">
                设置
              </router-link></b-dropdown-item>
            <b-dropdown-item href="#">帮助与反馈</b-dropdown-item>
            <b-dropdown-item @click="logout"><router-link to="login">退出</router-link> </b-dropdown-item>
          </b-nav-item-dropdown>
          <a class="btn write-btn" href="/write">
            写文章
          </a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'
    export default {
    }
</script>

<style scoped>

</style>
