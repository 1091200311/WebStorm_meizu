<template>
  <div class="content">
    <div class="right">
      <input type="text" v-model="formData.name" placeholder="商品" style="width: 300px;height: 50px"/>
      <button @click="search(formData)" style="width: 80px; height: 50px;background: cornflowerblue">搜索</button>
    </div>
    <br>
    <div class="left">
      <b-row>
        <b-card v-for="(item,index) in  realList" :key="index">
          <b-img :src="item.url" height="250px" width="300px"/><br>
          <p>{{item.name}}</p>
        </b-card>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'styleTest',
    data() {
      return {
        formData: {
          name: '',
        },
        realList: [],
        list: [
          {
            url: "https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png",
            name: '魅族16th',
          },
          {
            url: "https://openfile.meizu.com/group1/M00/06/20/Cgbj0Ft-WkOAAhCKAAFqcNe6c3M482.png",
            name: '魅族EP-31耳机',
          },
          {
            url: 'https://storeimg.meizu.com/product/1467170145-52479.png',
            name: "快充电源适配器（UP0830S）",
          },
          {
            url: 'https://openfile.meizu.com/group1/M00/01/B0/Cgbj0VlZqvaAGb0QAAUD7V55-H8213.png',
            name:  "魅蓝旅行包",
          },
          {
            url: 'https://openfile.meizu.com/group1/M00/01/0B/Cix_s1iW3W-AKGlWAAIXT7S3bdY622.png',
            name: "魅族蓝牙自拍杆",
          },
          {
            url: "https://openfile.meizu.com/group1/M00/06/99/Cgbj0FujMx6AWJeDAAhQtiLaCtA614.png",
            name: '魅族16X',
          },
          {
            url: "https://openfile.meizu.com/group1/M00/02/69/Cgbj0Vn2f8mAcov7AAHUhmjUdk0958.png",
            name: '魅蓝 EP52 蓝牙耳机',
          },
        ],
      };
    },
    created() {
      this.search({});
    },
    methods: {
      search({ name}) {
        this.realList = this.list.filter(item => {
          let matchName = true;
          if (name) {
            const keys = name
              .toUpperCase()
              .replace(' ', '')
              .split('');
            matchName = keys.every(key => item.name.toUpperCase().includes(key));
          }
          return matchName ;
        });
      },
    },
  };
</script>

<style scoped>
  p{
    margin-left: 100px;
  }

  .right{
    margin-left: 700px;
  }
</style>
