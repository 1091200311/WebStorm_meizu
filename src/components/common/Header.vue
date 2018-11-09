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
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
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
</style>
