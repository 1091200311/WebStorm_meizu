<template>
  <div>
  <el-row>
    <el-col :span="8"><div class="grid-content bg-purple">
      <router-link to="/">
        <b-navbar-brand>
          <b-img width="85" height="50" src="../static/img/meizu.png"/>
        </b-navbar-brand>
      </router-link>
    </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">
      <el-breadcrumb style="margin-top: 20px" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">购物车</el-breadcrumb-item>
        <el-breadcrumb-item>确认订单</el-breadcrumb-item>
        <el-breadcrumb-item>在线支付</el-breadcrumb-item>
        <el-breadcrumb-item>完成</el-breadcrumb-item>
      </el-breadcrumb></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple"></div><p style="margin-top: 20px">我的订单</p></el-col>
  </el-row>
  <div class="buy-car">
    <div class="title">
      <span class="title1">商品信息</span>
      <span class="title2">单价</span>
      <span class="title3">数量</span>
      <span class="title4">金额</span>
      <span class="title5">操作</span>
    </div>
    <div class="item" v-for="item in buyCarList">
      <div class="fl img">
        <img :src="item.img" />
      </div>
      <div class="fl name">
        <span>{{item.name}}</span>
      </div>
      <div class="fl size">
        <span>{{item.size}}</span>
      </div>
      <div class="fl price">
        <span><s>￥{{item.price}}</s></span><br/>
        <span class="new-color">￥{{item.newPrice}}</span>
      </div>
      <div class="fl number">
        <span class="number-btn" @click="reduceNum(item)">-</span><input type="text" v-model="item.number" /><span @click="addNum(item)" class="number-btn">+</span>
      </div>
      <div class="fl count">
        ￥<span class="price">{{(item.newPrice * item.number).toFixed(2)}}</span>
      </div>
      <div class="fl delete">
        <button @click="deleteItem(item.productNum)">删除</button>
      </div>
    </div>
    <div class="footer">
      <span>合计： <span class="count-price">￥{{count.toFixed(2)}}</span></span>
      <input type="button" @click="buyProduct(count)" class="account" :class="{'is-dis':count == 0}" value="结算" :disabled="count == 0" />
    </div>
    <div class="dialog" v-if="dialog">
      <p class="dialog-tit">订单信息</p>
      <div class="dialog-main">
        <p>下单成功！</p>
        <span>我们会尽快为您安排送货~</span><br/>
        <button @click="overProduct()">确定</button>
      </div>
    </div>
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
  export default{
    data(){
      return {
        dialog: false,
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
      buyCarList: {
        get: function() {
          return this.$store.state.car
        },
        set: function(newValue){
          this.$store.state.car = newValue;
        }
      },
      count() {
        let price = 0;
        for(var i=0; i<this.$store.state.car.length; i++){
          price += this.$store.state.car[i].newPrice * this.$store.state.car[i].number
        }
        return price;
      }
    },
    methods: {
      reduceNum(item) {
        if(item.number > 0){
          item.number--;
          this.$store.commit('changeNumber', item);
        }
      },
      addNum(item) {
        item.number++;
        this.$store.commit('changeNumber', item);
      },
      deleteItem(productNum) {
        this.$store.commit('deleteProduct', productNum);
      },
      buyProduct(count) {
        if(count > 0){
          this.dialog = true;
        }
      },
      overProduct() {
        this.$store.state.car = [];
        this.$router.push('/');
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
  .fl{float:left;}
  .buy-car{
    width: 976px;
    height:auto;
    margin-left: 150px;
  }
  .title{
    height:60px;
    line-height:60px;
    font-size:16px;
    font-weight:bold;
  }
  .item{
    height: 80px;
    line-height:80px;
    border:1px solid #ccc;
    margin-bottom:20px;
  }
  .item:hover{
    border:1px solid orange;
    background:#D5FFFD;
  }
  .img,.img img{
    width:80px;
    height:80px;
  }
  .name{
    height:60px;
    margin-top:10px;
    margin-left:30px;
    overflow:hidden;
  }
  .name,.name span{
    width: 220px;
    line-height:30px;
    text-align:left;
  }
  .size{
    width:90px;
    margin-left:50px;
    color: #7d7d7d;
  }
  .price{
    height:60px;
    margin-top:10px;
    line-height:30px;
    width:150px;
  }
  .price span{
    color:#9c9c9c;
  }
  .price .new-color{
    color:#000;
    font-size:14px;
  }
  .number{
    width:180px;
  }
  .number-btn{
    width:19px;
    height:28px;
    background:#ccc;
    display:inline-block;
    line-height:28px;
    vertical-align: middle;
    cursor:pointer;
    font-size:14px;
  }
  .number input{
    width:40px;
    height:24px;
    display:inline-block;
    vertical-align: middle;
    text-align:center;
  }
  .count{
    width:120px;
    color:#ff0036;
    font-size:16px;
  }
  .delete button{
    cursor:pointer;
  }
  .title span{ display:inline-block;}
  .title1{ width:390px; }
  .title2{ width:150px; margin-left:60px;}
  .title3{ width:150px; }
  .title4{ width:100px; margin-left:30px;}
  .footer{
    text-align:right;
  }
  .count-price{
    font-size:16px;
    color:#ff0036;
  }
  .account{
    width:120px;
    height:50px;
    margin-left:6px;
    line-height:50px;
    text-align:center;
    cursor:pointer;
    border:none;
    outline:none;
    display:inline-block;
    font-size:20px;
    background:#ff0036;
    color:#fff;
  }
  .is-dis{
    cursor: not-allowed;
    background:#7d7d7d;
  }
  .dialog{
    position:absolute;
    margin:0 auto;
    top:100px;
    left:0;
    right:0;
    bottom:0;
    width:300px;
    height:200px;
    background:#000;
    opacity:.8;
    filter:alpha(opacity=80);
    color:#fff;
    border-radius:5px;
  }
  .dialog-tit{
    height:28px;
    line-height:28px;
    border-bottom:1px solid #ccc;
  }
  .dialog-main p{
    margin-top:30px;
    height:40px;
    line-height:40px;
    color:orangered;
    font-size:16px;
  }
  .dialog-main button{
    margin-top:15px;
    width:60px;
    height:30px;
    line-height:30px;
    font-size:16px;
    background:#ff0036;
    color:#fff;
    display:inline-block;
    text-align:center;
    cursor:pointer;
    border:none;
    border-radius:3px;
  }
</style>
