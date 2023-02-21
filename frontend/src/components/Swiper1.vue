<template>
  <swiper
    id="mySwiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    navigation
    :pagination="{ clickable: true }"
    :loop="true"
    autoplay="{
      delay: 7000,
      disableOnInteraction: false
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="image in images" :key="image.id">
      <img :src="image.imageUrl" class="rounded" width="630">
    </swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    images: Array,
  },
  data() {
    return {
      modules: [Navigation, Pagination, Autoplay],
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

<style scoped>

</style>