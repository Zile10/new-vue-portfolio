<template>
  <NavBar />
  <main>
    <router-view />
  </main>
</template>
<script>
import NavBar from "./components/Tabs.vue";
import FooterComp from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    FooterComp,
  },
  mounted(){
    // const cursor = document.querySelector('.cursor');
    // document.addEventListener('mousemove', (e) => {
    //   cursor.style.top = e.y + 'px'
    //   cursor.style.left = e.x + 'px'
    // })
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* cursor: none !important; */
}
.cursor {
  width:  20px;
  height: 20px;
  background-color: #2c3e50;
  border-radius: 100px;
  position: fixed;
  z-index: 10000;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 5px;
}

main,
section {
  min-height: calc(100vh - 57px);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
