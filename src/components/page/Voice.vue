<template>
  <div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>全部商品</el-breadcrumb-item>
    <el-breadcrumb-item>数码影音</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="container">
    <b-row style="width: 1200px">
      <b-col class="item" col="4" v-for="voice in voices" :key="voice.id">
        <img style="width: 220px;height: 220px" :src="voice.pic"/>
        <p style="color: #333;font-size: 16px;margin-bottom: 2px;text-align: center">{{voice.name}}</p>
        <p style="color: #999;font-size: 14px;text-align: center">{{voice.desc}}</p>
        <p style="position: relative;color: #c00;font-size: 22px;padding-left: 14px;text-align: center">{{voice.price}}</p>
      </b-col>
    </b-row>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Voice",
      data:function () {
        return{
          voices:[]
        };
      },
      created() {
        var _this = this;
        this.$http
          .get('http://localhost:8080/voice/all')
          .then(function (response) {
            console.log("skherkhe");
            _this.voices = response.data;
          })
      }
    }
</script>

<style scoped>

</style>
