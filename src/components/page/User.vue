<template>
  <div class="container">
    <div>
      <b-nav>
        <b-img width="85" height="50" src="../static/img/meizu.png"/>
        <b-nav-item>魅族商城</b-nav-item>
        <b-nav-item>产品</b-nav-item>
        <b-nav-item>专卖店</b-nav-item>
        <b-nav-item>Flyme</b-nav-item>
        <b-nav-item>服务</b-nav-item>
        <b-nav-item>社区</b-nav-item>
      </b-nav>
    </div>
    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="账号管理">
        </b-tab>
        <b-tab title="魅币">
          <div class="account">
            <span>魅币</span>
            <span>0.02</span>
            <a class="link-exchange">兑换</a>
          </div>
          <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="魅币充值" name="first">魅币充值</el-tab-pane>
              <el-tab-pane label="明细" name="second">
                <b-nav>
                  <b-nav-item>时间</b-nav-item>
                  <b-nav-item>类型</b-nav-item>
                  <b-nav-item>订单号</b-nav-item>
                  <b-nav-item>收支（元）</b-nav-item>
                  <b-nav-item>备注</b-nav-item>
                </b-nav>
              </el-tab-pane>
            </el-tabs>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
    <b-nav>
      <b-nav-item>关于魅族</b-nav-item>
      <b-nav-item>工作机会</b-nav-item>
      <b-nav-item>联系我们</b-nav-item>
      <b-nav-item>法律声明</b-nav-item>
      <b-nav-item>常见问题</b-nav-item>
      <b-nav-item>简体中文</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
    export default {
        name: "User",
      data () {
        return {
          activeName: 'first'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>
  .tabMenu{
    display: block;
    float: left;
    line-height: 56px;
  }
  .link-exchange{
    display: inline-block;
    vertical-align: middle;
    background: #32a5e7;
    color: #fff;
    padding: 0 3px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    margin-left: 30px;
  }
  span{
    display: inline-block;
    vertical-align: middle;
  }
.account{
  height: 50px;
  line-height: 50px;
  margin-top: 22px;
}
</style>
