<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <Swiper1 :images="images1" />
      </div>
      <div class="col-6">
        <Swiper2 />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <Swiper1 :images="images2" />
      </div>
      <div class="col-6">
        <Swiper3 />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper1 from '@/components/Swiper1.vue';
import Swiper2 from '@/components/Swiper2.vue';
import Swiper3 from '@/components/Swiper3.vue';

export default {
  components: {
    Swiper1,
    Swiper2,
    Swiper3
  },
  data() {
    return {
      images1: [
        {id: 1, imageUrl: require('../assets/images/image1.jpg')},
        {id: 2, imageUrl: require('../assets/images/image2.jpg')},
        {id: 3, imageUrl: require('../assets/images/image3.jpg')},
        {id: 4, imageUrl: require('../assets/images/image4.jpg')},
        {id: 5, imageUrl: require('../assets/images/image5.jpg')},
      ],
      images2: [
        {id: 1, imageUrl: require('../assets/images/image3.jpg')},
        {id: 2, imageUrl: require('../assets/images/image4.jpg')},
        {id: 3, imageUrl: require('../assets/images/image5.jpg')},
        {id: 4, imageUrl: require('../assets/images/image1.jpg')},
        {id: 5, imageUrl: require('../assets/images/image2.jpg')},
      ],
    }
  }
}
</script>

