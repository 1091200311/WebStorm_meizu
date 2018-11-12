<template>
<div>
  <div>
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="订单中心" disabled></b-tab>
        <b-tab title="我的订单">
          <b-card no-body>
            <b-tabs pills card>
              <b-tab title="全部订单">
              </b-tab>
              <b-tab title="待付款">
              </b-tab>
              <b-tab title="待发货">
              </b-tab>
              <b-tab title="已发货">
              </b-tab>
              <b-tab title="其他">
              </b-tab>
            </b-tabs>
          </b-card>
        </b-tab>
        <b-tab title="我的回购单">
          <div>
            <b-nav>
              <b-nav-item>产品型号</b-nav-item>
              <b-nav-item>回购价格</b-nav-item>
              <b-nav-item>评估描述情况</b-nav-item>
              <b-nav-item>当前回购状态</b-nav-item>
              <b-nav-item>操作</b-nav-item>
            </b-nav>
          </div>
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
        <b-tab title="我的优惠券">
          我的优惠券
        </b-tab>
        <b-tab title="我的红包">
          我的红包
        </b-tab>
        <b-tab title="我的回购金">
          我的回购金
        </b-tab>
        <b-tab title="服务中心" disabled></b-tab>
        <b-tab title="退款/退货跟踪">
         退款/退货跟踪
        </b-tab>
        <b-tab title="以旧换新" class="desc">
          <a>以旧换新</a>
        </b-tab>
      </b-tabs>
    </b-card>
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
  .desc{
    padding-top: 332px;
    text-align: center;
  }
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
