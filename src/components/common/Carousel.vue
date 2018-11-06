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
                        :img-src="image.url">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        imageList: [
          {
            "id": 1,
            "url": "https://openfile.meizu.com/group1/M00/06/C9/Cgbj0FvZU3mAG-aiAAIUzA-u99A497.jpg"
          },
          {
            "id": 2,
            "url": "https://openfile.meizu.com/group1/M00/06/DB/Cgbj0VvbrAeAaOy2AAUkyjA39ZM339.jpg"
          },
          {
            "id": 3,
            "url": "https://fms.res.meizu.com/dms/2018/10/25/ca66b019-7e1f-4923-8f81-30803bf48ced.jpg"
          },
          {
            "id": 4,
            "url": "https://fms.res.meizu.com/dms/2018/09/19/5c344ab6-f1e4-415a-81f8-91f2ac5b3bd1.jpg"
          },
          {
            "id": 5,
            "url": "https://fms.res.meizu.com/dms/2018/09/19/4f224c16-9432-4df8-ac37-b026db875197.jpg"
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
