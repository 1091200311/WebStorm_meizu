<template>
  <div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>全部商品</el-breadcrumb-item>
    <el-breadcrumb-item>手机</el-breadcrumb-item>
  </el-breadcrumb>
    <div class="container">
    <b-row style="width: 1200px">
        <b-col class="item" col="4" v-for="phone in phones" :key="phone.id">
          <img style="width: 220px;height: 220px" :src="phone.pic"/>
          <p style="color: #333;font-size: 16px;margin-bottom: 2px;text-align: center">{{phone.name}}</p>
          <p style="color: #999;font-size: 14px;text-align: center">{{phone.desc}}</p>
          <p style="position: relative;color: #c00;font-size: 22px;padding-left: 14px;text-align: center">{{phone.price}}</p>
      </b-col>
    </b-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Phone",
      data:function () {
        return{
          phones:[]
        };
      },
      created() {
        var _this = this;
        this.$http
          .get('http://localhost:8080/phone/all')
          .then(function (response) {
            console.log("skherkhe");
            _this.phones = response.data;
          })
      }
    }
</script>

<style scoped>
  .item{
    width: 301px;
    height: 416px;
    background: #fff;
  }
</style>
