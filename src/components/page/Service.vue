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
    <!-- Slides with image only -->
    <b-carousel-slide v-for="image in imageList" :key="image.id"
                      :img-src="image.url" style="height: 100%;width: 100%">
    </b-carousel-slide>
  </b-carousel>
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
          ]
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

</style>
