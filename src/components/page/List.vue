<template>
<div>
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
          <template slot="button-content">
            <b-img rounded="circle" width="35" height="35" src="https://img-res.mzres.com/img/download/uc/12/66/52/17/90/126652179/w200h200?t=1472193993000"/>
          </template>
          <b-dropdown-item><router-link to="list">我的订单</router-link></b-dropdown-item>
          <b-dropdown-item href="#">消息通知</b-dropdown-item>
          <b-dropdown-item href="#">M码通道</b-dropdown-item>
          <b-dropdown-item href="#">我的收藏</b-dropdown-item>
          <b-dropdown-item @click="logout"><router-link to="login">退出登录</router-link> </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div>
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="订单中心" disabled></b-tab>
        <b-tab title="我的订单">
          我的订单
        </b-tab>
        <b-tab title="我的回购单">
          我的回购单
        </b-tab>
        <b-tab title="个人中心" disabled></b-tab>
        <b-tab title="地址管理">
          地址管理
        </b-tab>
        <b-tab title="我的收藏">
          我的收藏
        </b-tab>
        <b-tab title="消息提醒">
          消息提醒
        </b-tab>
        <b-tab title="建议反馈">
         建议反馈
        </b-tab>
        <b-tab title="资产中心" disabled></b-tab>
        <b-tab title="服务中心" disabled></b-tab>
      </b-tabs>
    </b-card>
  </div>
  <div class="footer-wrap">
    <b-row class="footer-service">
      <b-col  cols="2" v-for="activities in activityList" :key="activities.id" style="width: 15%;text-align: center;float: left">
        <img style="width: 50px" :src="activities.url">
        <p style=" line-height:30px; color: #999;font-size: 14px">{{activities.content}}</p>
      </b-col>
    </b-row>
    <div style="text-align: right">
      <span style="color: #999;font-size: 12px;line-height: 30px">周一至周日 7:30-24:00</span>
      <p class="tel">400-788-3333</p>
      <a class="online-btn">在线客服</a>
    </div>
    <hr class="footer-hr">
  </div>
</div>
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
        activityList:[
          {
            id:1,
            url:"https://fms.res.meizu.com/dms/2018/07/13/2c69bf7c-2d29-4fd4-852e-0aa497f36f51.png",
            content:"全场顺丰包邮"
          },
          {
            id:2,
            url:"https://fms.res.meizu.com/dms/2018/07/13/d28eac8b-b915-49dc-9dbd-80884a07d44f.png",
            content:"100+ 城市次日送达"
          },
          {
            id:3,
            url:"https://fms.res.meizu.com/dms/2018/07/13/b21f3e65-f7f4-4693-914c-c070faf96770.png",
            content:"7天无理由退货"
          },
          {
            id:4,
            url:"https://fms.res.meizu.com/dms/2018/07/13/1998f0da-a439-4e07-9736-e6a1c39fb0ae.png",
            content:"15天换货保障"
          },
          {
            id:5,
            url:"https://fms.res.meizu.com/dms/2018/07/13/420825c1-4763-436d-b3e1-721651ccc70c.png",
            content:"1年免费保修"
          },
          {
            id:6,
            url:"https://fms.res.meizu.com/dms/2018/07/13/1c5cfeff-1b35-499e-bc2a-1fd29305be69.png",
            content:"上门快修"
          }
        ]
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
  .footer-hr{
    -webkit-margin-before: 0.5em;
    -webkit-margin-after: 0.5em;
    -webkit-margin-start: auto;
    -webkit-margin-end: auto;
  }
  .online-btn{
    height: 30px;
    padding: 0 16px;
    overflow: hidden;
    position: relative;
    text-align: center;
    line-height: 30px;
    color: #fff;
    border-radius: 20px;
    margin-top: 3px;
    display: inline-block;
    font-size: 14px;
    background: #0bbbef;
  }
  .tel{
    color: #00c3f5;
    font-size: 25px;
    font-weight: 400;
    margin-top: -6px;
    line-height: 40px;
  }
  .footer-wrap{
    max-width: 1240px;
    margin: 0 auto;
  }
  .footer-service {
    width: 1000px;
    float: left;
  }
</style>
