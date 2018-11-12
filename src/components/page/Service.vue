<template>
  <div>
  <b-carousel id="carousel1"
              controls
              indicators
              background="#ababab"
              :interval="2000"
              img-width="1024"
              img-height="670"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd">
    <b-carousel-slide v-for="image in imageList" :key="image.id"
                      :img-src="image.url" style="height: 100%;width: 100%">
    </b-carousel-slide>
  </b-carousel>
    <div class="center-wrapper">
      <p style="font-size: 20px;text-align: center;padding: 68px 0 36px">请通过以下方式联系我们</p>
      <b-row>
        <b-col cols="3" v-for="contacts in contactList" :key="contacts.id" class="online">
          <img class="icon" :src="contacts.url">
          <em class="title">{{contacts.content}}</em>
          <i class="tips">{{contacts.tips}}</i>
        </b-col>
      </b-row>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Service",
      data() {
        return {
          slide: 0,
          sliding: null,
          imageList: [
            {
              "id": 1,
              "url": "https://fms.res.meizu.com/dms/2018/11/08/97aae92e-bea3-4885-8603-892a6a6ad3a5.jpg"
            },
            {
              "id": 2,
              "url": "https://fms.res.meizu.com/dms/2018/09/06/765c41ee-7fe1-49e0-9410-d438a623ecb4.jpg"
            },
            {
              "id": 3,
              "url": "https://cimg2.res.meizu.com/care/201711/f9C8zFwHIJvtMNOpQnlTUkWjhZgdLAD2.jpg"
            },
            {
              "id": 4,
              "url": "https://fms.res.meizu.com/dms/2018/07/03/3e5e08be-18a4-4b78-ab6e-a5f3be628631.jpg"
            },
            {
              "id": 5,
              "url": "https://cimg2.res.meizu.com/care/201711/fA854F30zJvutNrqQoSTUVWnYZamlieh.jpg"
            }
          ],
          contactList: [
            {
              "id": 1,
              "url": "http://cdns2.freepik.com/free-photo/big-earphones_318-715.jpg",
              "content":"周一至周日",
              "tips":"点击在线咨询服务"
            },
            {
              "id": 2,
              "url": "http://pic.58pic.com/58pic/13/70/28/33f58PICcnD_1024.jpg",
              "content":"400-788-3333",
              "tips":"周一至周日 7:30-24:00"
            },
            {
              "id": 3,
              "url": "http://pic30.nipic.com/20130617/12099365_112411676125_2.png",
              "content":"魅族科技",
              "tips":"直接对话微信客服"
            },
            {
              "id": 4,
              "url": "http://cdns2.freepik.com/free-photo/weibo-social-logo_318-64846.jpg",
              "content":"魅族 care 微博",
              "tips":"关注微博，了解资讯"
            },
          ],
        }
      },
      methods: {
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        }
      }
    }
</script>

<style scoped>
  .tips{
    text-align: center;
    display: block;
    font-size: 14px;
    color: #999;
    margin-top: -4px;
  }
  em{
    font-weight: 400;
    font-style: normal;
  }
  .title{
    text-align: center;
    display: block;
    font-size: 16px;
    padding-top: 12px;
    margin-bottom: 7px;
  }
  .icon{
    display: block;
    width: 34px;
    height: 34px;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 0 auto;
  }
  .online{
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 26px 0;
    cursor: pointer;
    margin-bottom: -20px;
  }
  .center-wrapper{
    width: 1240px;
    min-width: 1240px;
    margin: 0 auto;
    position: relative;
    padding: 0 20px;
  }

</style>
