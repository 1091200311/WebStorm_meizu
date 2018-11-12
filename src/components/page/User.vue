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
          <b-tabs pills card>
            <b-tab title="魅币充值">
            </b-tab>
            <b-tab title="明细">
              <b-nav>
                <b-nav-item>时间</b-nav-item>
                <b-nav-item>类型</b-nav-item>
                <b-nav-item>订单号</b-nav-item>
                <b-nav-item>收支（元）</b-nav-item>
                <b-nav-item>备注</b-nav-item>
              </b-nav>
        </b-tab>
          </b-tabs>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
    export default {
        name: "User",
      data () {
        return {
        }
      },
    }
</script>

<style scoped>

</style>
