<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :lazy="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img
        data-src="https://swiperjs.com/demos/images/nature-1.jpg"
        class="swiper-lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        data-src="https://swiperjs.com/demos/images/nature-2.jpg"
        class="swiper-lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        data-src="https://swiperjs.com/demos/images/nature-3.jpg"
        class="swiper-lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        data-src="https://swiperjs.com/demos/images/nature-4.jpg"
        class="swiper-lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        data-src="https://swiperjs.com/demos/images/nature-5.jpg"
        class="swiper-lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        data-src="https://swiperjs.com/demos/images/nature-6.jpg"
        class="swiper-lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        data-src="https://swiperjs.com/demos/images/nature-7.jpg"
        class="swiper-lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        data-src="https://swiperjs.com/demos/images/nature-8.jpg"
        class="swiper-lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        data-src="https://swiperjs.com/demos/images/nature-9.jpg"
        class="swiper-lazy"
      />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Lazy, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Lazy, Pagination, Navigation],
    }
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #000;
}

.swiper-slide img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}

.mySwiper {
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
}

</style>