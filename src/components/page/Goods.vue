<template>
    <div>
      <el-row class="container nav-fix-top">
        <el-col :span="12"><div class="grid-content bg-purple-light"></div><p class="name">魅族16th</p></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div>
          <b-nav class="list">
            <b-nav-item>首页</b-nav-item>
            <b-nav-item>概述</b-nav-item>
            <b-nav-item>性能</b-nav-item>
            <b-nav-item>相机</b-nav-item>
            <b-nav-item>参数</b-nav-item>
            <b-nav-item>常见问题</b-nav-item>
          </b-nav>
        </el-col>
      </el-row>
        <div style="float:left;width: 560px">
        <img  style="width: 560px;height: 560px" src="//openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgnWADjmlAAipoSE4bZM493.png680x680.jpg">
          <b-row>
            <b-col v-for="details in detailList" :key="details.id" class="li">
              <img :src="details.url"/>
            </b-col>
          </b-row>
      </div>
        <div class="property">
        <h1 style="padding-top: 30px;margin-bottom: 12px">魅族16th</h1>
        <p style="font-size: 14px;color: #999">骁龙845 屏幕下指纹解锁</p>
        <p style="margin-right: 8px;line-height: 36px;color: #e02b41;font-size: 36px">￥3298.00</p>
        <div class="buy">
          <a class="btn"><router-link to="/shopping-car">立即购买</router-link></a>
          <el-button type="text" @click="open" class="btn">加入购物车</el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Goods",
      data(){
        return{
          detailList:[
            {
            "id":1,
            "url":"//openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgnWADjmlAAipoSE4bZM493.png120x120.jpg"
            },
            {
              "id":2,
              "url":"//openfile.meizu.com/group1/M00/05/E1/Cgbj0Ftqgm2AQo8kAALoIW3dU5E207.png120x120.jpg"
            },
            {
              "id":3,
              "url":"//openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnSAEr3VAARgym8YDgE000.png120x120.jpg"
            },
            {
              "id":4,
              "url":"//openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgnSAO5g5AAIM3cZJ03Y881.png120x120.jpg"
            }
        ]
        }
      },
      methods: {
        open() {
          this.$alert('去购物车付款', '加入购物车成功', {
            confirmButtonText: '确定',
          });
        }
      }
    }
</script>

<style scoped>
  .li{
    display: inline-block;
    margin: 0 24px;
    overflow: hidden;
    height: 102px;
  }
  .property{
    float: right;
    width: 640px;
    font-size: 12px;
    padding-top: 25px;
  }
  .btn{
    padding: 15px 0;
    width: 208px;
    font-size: 20px;
    line-height: 24px;
    display: inline-block;
  }
  .buy{
    margin-top: 17px;
    margin-left: 10px;
  }
  .container{
    position: relative;
    width: 1240px;
    height: 70px;
    margin: 0 auto;
  }
  .list{
    float: right;
    margin-top: 15px;
    margin-right: -600px;
  }
  .name{
    position: absolute;
    left: 0;
    top: 15px;
    font-size: 26px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
