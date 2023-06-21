<template>
  <nav class="tabs">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <div class="cut">
          <button class="nav-link active tab" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>

        </div>
      </li>
      <li class="nav-item d-flex justify-content-center align-items-center px-1" role="presentation">
        <button class="nav-link plus" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/afafaf/plus--v1.png" alt="plus--v1"/>
        </button>
      </li>
    </ul>

    <div class="bookmark-bar sticky-top"></div>
  </nav>
</template>
<script>
import CornerCutBox from './CornerCutBox.vue';
export default {
  components: {
    CornerCutBox
  },
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
    resumeIsActive(){
      if (this.$route.path == '/resume') {
        return true
      } else return false
    },
    projectsIsActive(){
      if (this.$route.path == '/projects') {
        return true
      } else return false
    },
    testimonialsIsActive(){
      if (this.$route.path == '/testimonials') {
        return true
      } else return false
    },
    contactIsActive(){
      if (this.$route.path == '/contact') {
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

  --cut-size: 1em;
  --border-width: 2px;
}
nav.tabs ul {
  background-color: #ddd;
  border: none;
}
ul li {
  padding: 0;
}
nav.tabs ul li .cut{
  clip-path: 
    polygon(
      0em var(--cut-size),
      var(--cut-size) 0em,
      100% 0,
      100% 100%,
      0 100%
    )
  ;
  position: relative;
  background: linear-gradient(rgba(255, 20, 20, 1), rgba(255, 20, 20, 0));
  border-radius: 0 var(--border-width) 0 0;
  margin: 0 2px;
}
/* li > *:not(.cut) {
  border-bottom: 2px solid rgb(255, 20, 20);
} */
nav.tabs ul li .tab{
  min-width: 100px;
  height: 35px;
  line-height: 35px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #ddd;
  margin-bottom: none;
  clip-path: 
    polygon(
      var(--border-width) calc(var(--cut-size) + var(--border-width) * 0.5),
      calc(var(--cut-size) + var(--border-width) * 0.5) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) 100%,
      var(--border-width) 100%
    )
  ;
}
.tabs ul li .tab.active {
  background-color: white;
  /* color: white; */
}
.tabs ul li .plus{
  padding: 0;
}

.bookmark-bar {
  min-height: 20px;
  background-color: var(--primaryColor);
}

</style>
