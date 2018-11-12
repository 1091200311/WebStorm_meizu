<template>
  <b-navbar toggleable="md" type="light" variant="default" fixed class="box">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link to="/">
      <b-navbar-brand>
        <b-img width="85" height="50" src="../static/img/meizu.png"/>
      </b-navbar-brand>
    </router-link>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/phone">手机</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/voice">声学</router-link>
        </b-nav-item>
        <b-nav-item>
        <router-link to="/wisdom">智能</router-link>
      </b-nav-item>
        <b-nav-item>
          <router-link to="/life">生活</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/flyme">Flyme</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/service">服务</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/retail">专卖店</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/index">社区</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/index">App下载</router-link>
        </b-nav-item>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2 search-input" type="text" placeholder="Search"/>
          <font-awesome-icon icon="search" style="color: #999;font-size: 20px;margin-left: -50px;"/>
        </b-nav-form>
        <b-nav-item-dropdown right v-if="token!=null">
          <b-dropdown-item>
            <router-link to="/u">个人中心</router-link>
          </b-dropdown-item>
          <template slot="button-content">
            <b-img rounded="circle" width="35" height="35" src="https://img-res.mzres.com/img/download/uc/12/66/52/17/90/126652179/w200h200?t=1472193993000"/>
          </template>
          <b-dropdown-item><router-link to="list">我的订单</router-link></b-dropdown-item>
          <b-dropdown-item @click="logout"><router-link to="login">退出登录</router-link> </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'

  export default {
    data() {
      return {
        name: '落幕晟傷',
        token:123456,
      }
    },
    computed: {
      username() {
        let username = localStorage.getItem('ms_username');
        return username ? username : this.name;
      }
    },
    methods: {
      // 用户名下拉菜单选择事件
      handleCommand(command) {
        if (command == 'loginout') {
          localStorage.removeItem('ms_username')
          this.$router.push('/login');
        }
      },
      logout() {
        localStorage.removeItem('loginUser')
        this.$router.go(0);
      }
    }
  }
</script>
<style scoped>
  .box {
    border-bottom: 1px solid #eef1f6;
    height: 55px;
  }

  a {
    color: #324157;
  }

  .btn {

  }

  .write-btn {
    float: right;
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 15px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
  }
</style>
