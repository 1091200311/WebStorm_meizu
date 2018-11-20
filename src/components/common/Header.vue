<template>
  <b-navbar toggleable="md" type="light" variant="default" fixed class="box">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link to="/">
      <b-navbar-brand>
        <b-img width="85" height="50" src="../static/img/meizu.png"/>
      </b-navbar-brand>
    </router-link>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav style="margin-left: 400px">
        <b-nav-item>
          <el-dropdown>
            <span class="el-dropdown-link"><router-link to="/phone">手机<i class="el-icon-arrow-down el-icon--right"></i></router-link></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <b-card-group>
                  <b-card style="width: 400px;height: 400px" img-src="https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png">
                  <p style="text-align: center">魅族16th</p>
                </b-card>
                  <b-card style="width: 400px;height: 400px" img-src="https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png">
                    <p style="text-align: center">魅族16th</p>
                  </b-card>
                  <b-card style="width: 400px;height: 400px" img-src="https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png">
                    <p style="text-align: center">魅族16th</p>
                  </b-card>
              </b-card-group>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
        <b-nav-item>社区</b-nav-item>
        <b-nav-item>App下载</b-nav-item>
        <b-nav-form>
          <div style="width: 200px;height: 40px">
            <el-col :span="12">
              <el-autocomplete
                class="inline-input"
                v-model="state2"
                :fetch-suggestions="querySearch"
                placeholder="魅族16th"
                :trigger-on-focus="false"
                @select="handleSelect"
              ></el-autocomplete>
            </el-col>
            <el-button type="primary"><router-link to="search">搜索</router-link></el-button>
          </div>
        </b-nav-form>
        <b-nav-item-dropdown right v-if="token!=null">
          <b-dropdown-item>
            <router-link to="/u">个人中心</router-link>
          </b-dropdown-item>
          <template slot="button-content">
            <b-img rounded="circle" width="35" height="35" src="https://img-res.mzres.com/img/download/uc/12/66/52/17/90/126652179/w200h200?t=1472193993000"/>
          </template>
          <b-dropdown-item><router-link to="list">我的订单</router-link></b-dropdown-item>
          <b-dropdown-item>M码通道</b-dropdown-item>
          <b-dropdown-item @click="logout"><router-link to="Login">退出登录</router-link> </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>
          <el-badge :value="0" class="item">
          <router-link to="/Shopping-car">
            <b-img rounded="circle" width="35" height="35" src="//www3.res.meizu.com/static/cn/_partial/header/images/shopping-cart-gray_f0fb320.png"/>
          </router-link>
          </el-badge>
        </b-nav-item>
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
        restaurants: [],
        state2: ''
      };
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
        localStorage.removeItem('loginUser');
        this.$router.go(0);
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll(){
        return[
          {"value":"魅族16th"},
          {"value":"魅蓝E"},
          {"value":"魅蓝note6"}
        ];
      },
    },
    mounted() {
      this.restaurants = this.loadAll();
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
