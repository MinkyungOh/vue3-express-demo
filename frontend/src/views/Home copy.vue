<template>
  <swiper 
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    navigation
    parallax
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    style="width:100%;margin-top: 20px;"
  >
    <swiper-slide v-for="image in images" :key="image.id" >
      <img :src="image.imageUrl" style="width:100%;height:500px;">
    </swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
      images: [
        {id: 1, imageUrl: require('../assets/images/image1.jpg')},
        {id: 2, imageUrl: require('../assets/images/image2.jpg')},
        {id: 3, imageUrl: require('../assets/images/image3.jpg')},
        {id: 4, imageUrl: require('../assets/images/image4.jpg')},
        {id: 5, imageUrl: require('../assets/images/image5.jpg')},
        {id: 6, imageUrl: require('../assets/images/image6.jpg')},
      ]
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange(swiper) {
      console.log(swiper);
    }
  },
}
</script>

<style lang="scss" scoped>

</style>