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
    
  }
};
</script>
<style>
:root {
  --primColor: #333;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #2c3e50;
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

main{
  /* border-left: 2px solid rgb(255, 20, 20); */
  min-height: calc(100vh - 54px);

}

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
