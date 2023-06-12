<template>
  <NavBar/>
  <div class="w-100">
    <Tabs/>
    <main>
      <router-view />
    </main>

  </div>
</template>
<script>
import Tabs from "./components/Tabs.vue";
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Tabs,
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
:root {
  --primaryColor: #333;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* cursor: none !important; */
  display: flex;

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
/* nav {
  padding: 30px;
} */

main {
  margin-left: 60px;
}
</style>
