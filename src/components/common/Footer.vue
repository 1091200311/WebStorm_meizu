<template>
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
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'
    export default {
        name: "Footer",
      data(){
        return{
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
.footer-service{
  width: 1000px;
  float: left;
}
</style>
