<template>
  <div>
    <Navbar msg="Welcome to Your Vue.js App"/>
    <div class="mt-5 mb-5 my-wrapper">
      <router-view></router-view>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.my-wrapper {
  height: auto;
  min-height: 100%;
  padding-bottom: 30px;
}
.footer {
  height: 30px;
  position : relative;
  transform : translateY(-100%);
}
</style>
