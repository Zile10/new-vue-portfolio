<template>
  <nav class="tabs">
    <div class="row px-5 gap-2">
      <router-link to="/" class="tab col nav-link" :class="{'active': homeIsActive}">Home</router-link>
      <router-link to="/about" class="tab col nav-link" :class="{'active': aboutIsActive}">About</router-link>
      <router-link to="/projects" class="tab col nav-link" :class="{'active': projectsIsActive}">Projects</router-link>
    </div>
    <div class="bar sticky-top"></div>
  </nav>
</template>
<script>
export default {
  computed: {
    currentPath(){
      return this.$route.path
    },
    homeIsActive(){
      if (this.$route.path == '/') {
        return true
      } else return false
    },
    aboutIsActive(){
      if (this.$route.path == '/about') {
        return true
      } else return false
    },
    projectsIsActive(){
      if (this.$route.path == '/projects') {
        return true
      } else return false
    },
  },

};
</script>

<style scoped>
.tabs {
  position: sticky;
  top: 0;
  overflow: hidden;
  box-shadow: 0 0px 5px rgba(0,0,0,0.8);
  z-index: 10;
}
.tabs .row{
  height: var(--tabsHeight);
  background-color: #555;
}
.tabs .tab {
  height: var(--tabsHeight);
  /* border-bottom: none; */
  border-radius: 6px 6px 0px 0px;
  background-color: var(--bg2);
  line-height: var(--tabsHeight);
  box-shadow: 2px 2px rgba(255, 255, 255, 0.8) inset, -2px 0 rgba(0, 0, 0, 0.6) inset, 0px 0px 5px rgba(0, 0, 0, 0.6) inset; 
}
.tabs .tab.active {
  background-color: var(--bg1);
  box-shadow: 2px 2px rgba(255, 255, 255, 0.8) inset, -2px 0 rgba(0, 0, 0, 0.6) inset;
}

.bar {
  height: 15px;
  background-color: var(--bg1);
}
/* nav {
  top: var(--tabsHeight);
} */

</style>
