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
          <router-link :to="'/g/'+phones.id">
          <img  class="goods-img" :src="phones.url">
          <span class="box-info">
          <span class="goods-name">{{phones.name}}</span>
          <span class="goods-desc">{{phones.desc}}</span>
          <p class="goods-price">{{phones.price}}</p>
          </span>
          </router-link>
        </b-col>
        </b-row>
        <b-row>
          <b-col  v-for="phones in phoneList1" :key="phones.id" class="phone">
            <router-link :to="'/g/'+phones.id">
            <img  style="height: 230px;margin-top: 30px;" :src="phones.url">
            <span style="top: 270px;left: 0;width: 100%;">
          <p style="color: #333;font-size: 16px;margin-bottom: 2px;">{{phones.name}}</p>
          <p style="color: #999;font-size: 14px;">{{phones.desc}}</p>
          <p style="position: relative;display: inline-block;color: #c00;font-size: 22px;padding-left: 14px;">{{phones.price}}</p>
          </span>
            </router-link>
          </b-col>
        </b-row>
      </div>
      <div>
        <h3 class="title">魅族声学</h3>
      </div>
      <div class="section-box">
        <img class="pic" src="https://fms.res.meizu.com/dms/2018/10/23/89d0ea78-27bd-4e9d-8a50-db02395d7ee4.jpg">
      </div>
      <div>
        <img style="width: 300px;height: 375px" src="https://fms.res.meizu.com/dms/2018/09/25/6192b514-c9e8-4d4d-81d2-a952afb43976.jpg">
      </div>
        <div>
        <img style="width: 300px;height: 375px"src="https://fms.res.meizu.com/dms/2018/10/09/092fe22f-bc33-4b57-87e7-55168d56d9b3.jpg">
      </div>
      <div>
        <h3 class="title">智能配件</h3>
      </div>
      <div class="section-box">
        <img  class="pic" src="https://fms.res.meizu.com/dms/2018/09/29/b522dfc3-c4e0-40d6-be08-30c7e467b2b1.jpg">
      </div>
          <div>
            <img style="width: 300px;height: 375px" src="https://fms.res.meizu.com/dms/2018/09/05/35c143de-5b05-4e2c-87d6-9373bede4831.jpg">
          </div>
          <div>
            <img style="width: 300px;height: 375px" src="https://fms.res.meizu.com/dms/2018/09/26/7568037b-a5f4-4f42-b503-1a7d4686d3e4.jpg">
      <div>
        <h3 class="title">生活周边</h3>
        <div class="section-box">
          <img  class="pic" src="https://fms.res.meizu.com/dms/2018/08/07/897616fb-b7d1-49e8-9874-36f0b716048b.jpg">
        </div>
          <b-card-group deck style="width: 1240px">
            <b-card  style="width: 375px;height: 375px;display: block" img-src="https://fms.res.meizu.com/dms/2018/09/26/7c9cfd6e-077f-4535-be59-ef5368bbd757.jpg">
            </b-card>
            <b-card img-src="https://openfile.meizu.com/group1/M00/01/B0/Cgbj0VlZqvaAGb0QAAUD7V55-H8213.png">
              <div class="box-info">
                  <p class="goods-name">魅蓝旅行包</p>
                  <p class="goods-desc">轻盈负重 细节开花</p>
                  <p class="goods-price">￥199</p>
              </div>
            </b-card>
            <b-card img-src="https://openfile.meizu.com/group1/M00/01/FB/Cgbj0Vmnd4mANqFvAAYQNPMfK1w252.png">
              <div class="box-info">
                <p class="goods-name">魅蓝数码收纳包</p>
                <p class="goods-desc">随身收纳 安全放心</p>
                <p class="goods-price">￥49</p>
              </div>
            </b-card>
            <b-card img-src="https://openfile.meizu.com/group1/M00/03/49/Cgbj0FqwvJWAFb0PAAleBEBSg7E656.png">
              <div class="box-info">
                <p class="goods-name">魅蓝20寸旅行箱酷MA萌定制版</p>
                <p class="goods-desc">静音双排万向轮设计,具备安全TSA海关锁</p>
                <p class="goods-price">￥349</p>
              </div>
            </b-card>
          </b-card-group>
        <b-card-group deck style="width: 1240px">
          <b-card  style="width: 375px;height: 375px;display: block" img-src="https://fms.res.meizu.com/dms/2018/09/26/6fd0292c-aa81-42f9-b1d1-ef572c8744d8.jpg">
          </b-card>
          <b-card img-src="https://openfile.meizu.com/group1/M00/01/0B/Cix_s1iW3W-AKGlWAAIXT7S3bdY622.png">
            <div class="box-info">
              <p class="goods-name">魅族蓝牙自拍杆</p>
              <p class="goods-desc">还给你自由的双手</p>
              <p class="goods-price">￥99</p>
            </div>
          </b-card>
          <b-card img-src="https://openfile.meizu.com/group1/M00/00/9B/CnQOjVgYZV6Af6VlAADvhkEyt98979.png">
            <div class="box-info">
              <p class="goods-name">魅族盒子 一键找回遥控器</p>
              <p class="goods-desc">一键找回遥控器,海量内存,4k输出</p>
              <p class="goods-price">￥199</p>
            </div>
          </b-card>
          <b-card img-src="https://picsum.photos/300/300/?image=41">
            <div class="box-info">
              <p class="goods-name">魅蓝旅行包</p>
              <p class="goods-desc">轻盈负重 细节开花</p>
              <p class="goods-price">￥199</p>
            </div>
          </b-card>
        </b-card-group>
      </div>
      </div>
    </div>
</template>

<script>
  import vCarousel from '../common/Carousel';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
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
        ],
        phoneList1:[
          {
            id:"1",
            url:"https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png",
            name:"魅族X8",
            desc:"骁龙845 屏幕下指纹",
            price:"￥698起"
          },
          {
            id:"2",
            url:"https://openfile.meizu.com/group1/M00/06/AC/Cgbj0VujaMyAYB76AATj19tgy08068.png",
            name:"魅族 V8 高配版",
            desc:"1200万+500万高清双摄",
            price:"￥1098"
          },
          {
            id:"3",
            url:"https://openfile.meizu.com/group1/M00/04/0B/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png",
            name:"魅族 15",
            desc:"2000万暗光双摄 AI智能美颜",
            price:"￥1998起"
          },
          {
            id:"4",
            url:"https://openfile.meizu.com/group1/M00/03/BC/Cgbj0Vq9-oeARs_XAALvUdl5qpo302.png",
            name:"魅族 E3",
            desc:"骁龙636处理器 全系6G大运存",
            price:"￥1799"
          }
        ],
      }
    }
  }
</script>
<style scoped>
  .box-info.goods-desc{
    color: #999;
    font-size: 14px;
    text-align: center;
  }
  .box-info .goods-name{
    color: #333;
    font-size: 16px;
    margin-bottom: 12px;
  }
  .box-info{
    color: #999;
    font-size: 14px;
    margin-top: 200px;
  }
  .phone{
    float: left;
    position: relative;
    width: 303px;
    height: 375px;
    margin-right: 9px;
    margin-top: 10px;
    background-color: #fff;
    overflow: hidden;
    transition: all .3s ease;
  }
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
