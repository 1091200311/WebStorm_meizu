<template>
    <div>
      <v-carousel></v-carousel>
      <div class="index-center">
        <b-col  v-for="activities in activityList" :key="activities.id" class="adv-box">
          <img :src="activities.url">
          <em style="display:block; color: #333; font-size: 20px">{{activities.name}}</em>
          <p style="color: #999;font-size: 14px">{{activities.content}}</p>
        </b-col>
      </div>
      <div>
        <h3 style="font-size: 30px;text-align: center;margin-bottom: 10px">魅族手机</h3>
      </div>
      <div class="section-box">
        <img class="pic" src="https://openfile.meizu.com/group1/M00/06/C4/Cgbj0FvRLw2AMfdBAAFBqXyg-Es255.jpg">
      </div>
      <div class="index-center-wrap">
        <b-row>
        <b-col  v-for="phones in phoneList" :key="phones.id" class="big">
          <img  class="goods-img" :src="phones.url">
          <span class="box-info">
          <span class="goods-name">{{phones.name}}</span>
          <span class="goods-desc">{{phones.desc}}</span>
          <p class="goods-price">{{phones.price}}</p>
          </span>
        </b-col>
        </b-row>
      </div>
      <div>
        <h3 class="title">魅族声学</h3>
      </div>
      <div class="section-box">
        <img  class="pic" src="https://fms.res.meizu.com/dms/2018/10/23/89d0ea78-27bd-4e9d-8a50-db02395d7ee4.jpg">
      </div>
      <div>
        <h3 class="title">智能配件</h3>
      </div>
      <div class="section-box">
        <img  class="pic" src="https://fms.res.meizu.com/dms/2018/09/29/b522dfc3-c4e0-40d6-be08-30c7e467b2b1.jpg">
      </div>
      <div>
        <h3 class="title">生活周边</h3>
        <div class="section-box">
          <img  class="pic" src="https://fms.res.meizu.com/dms/2018/08/07/897616fb-b7d1-49e8-9874-36f0b716048b.jpg">
        </div>
      </div>
      <div>
        <h3 class="title">社区热帖</h3>
      </div>
      <div>
        <h3 class="title">精彩视频</h3>
        <b-row>
        <b-col  v-for="phones in phoneList" :key="phones.id">
        </b-col>
        </b-row>
      </div>
      </div>
</template>

<script>
  import vCarousel from '../common/Carousel';

  export default {
    name: "Index",
    components: {
      vCarousel,
    },
    data(){
      return{
        activityList:[
          {
            id:1,
            url:"https://fms.res.meizu.com/dms/2018/08/16/d41edab1-9bb2-4451-9b3b-59f5c02d9edb.jpg",
            name:"超级福利站",
            content:"新品手机  爆款配件"
          },
          {
            id:2,
            url:"https://fms.res.meizu.com/dms/2018/08/16/d41edab1-9bb2-4451-9b3b-59f5c02d9edb.jpg",
            name:"超级福利站",
            content:"新品手机  爆款配件"
          },
          {
            id:3,
            url:"https://fms.res.meizu.com/dms/2018/08/16/d41edab1-9bb2-4451-9b3b-59f5c02d9edb.jpg",
            name:"超级福利站",
            content:"新品手机  爆款配件"
          },
          {
            id:4,
            url:"https://fms.res.meizu.com/dms/2018/08/16/d41edab1-9bb2-4451-9b3b-59f5c02d9edb.jpg",
            name:"超级福利站",
            content:"新品手机  爆款配件"
          }
        ],
        phoneList:[
          {
            id:"1",
            url:"https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png",
            name:"魅族 16th",
            desc:"骁龙845 屏幕下指纹",
            price:"￥698起"
          },
          {
            id:"2",
            url:"https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png",
            name:"魅族 16th",
            desc:"骁龙845 屏幕下指纹",
            price:"￥698起"
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .box-info{
    top:58px;
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
  }
  .index-center-wrap{
    width: 1240px;
    margin: auto;
  }
  .goods-price{
    position: relative;
    display: inline-block;
    color: #c00;
    font-size: 22px;
    padding-left: 14px;
  }
  .goods-desc{
    color: #333;
    font-size: 18px;
    margin-bottom: 3px;
  }
  .goods-name{
    color: #333;
    font-size: 28px;
    margin-bottom: 0;
  }
  .goods-img{
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 460px;
    margin-left: -250px;
  }
  .big{
    width: 615px;
    height: 610px;
  }
  .pic{
    width: 100%;
    height: 100%
  }
  .title{
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px
  }
  .section-box{
    height: 450px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    overflow: hidden;
  }
  .adv-box{
    float: left;
    position: relative;
    width: 25%;
    padding-top: 45px;
  }
  .index-center{
    background: #f4f4f4;
    min-width: 1240px;
    overflow: hidden;
    margin-bottom: 50px;
    height: auto;
    padding-bottom: 45px;
  }
</style>
