<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/" @click="onClickMenu(0)" style="margin-left: 10px;">MyProject</router-link>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link v-for="menu in menuList" :key="menu.no"
          class="nav-link" aria-current="page" :to="menu.path"
          :class="selectedMenu===menu.no? 'active':''"
          @click="onClickMenu(menu.no)"
        >{{menu.name}}</router-link>
      </div>
    </div>
    <span class="navbar-text" style="margin-right: 10px;">
      <router-link to="/login">signin</router-link> | 
      <router-link to="/signup">signup</router-link>
    </span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      selectedMenu: 0
    }
  },
  methods: {
    onClickMenu(menu) {
      this.selectedMenu = menu;
    }
  },
  created() {
    this.menuList = [
      {
        no: 0,
        path: '/',
        name: 'Home'
      },
      {
        no: 1,
        path: '/about',
        name: 'About'
      },
    ];
  }
}
</script>

<style>
</style>