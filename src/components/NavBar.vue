<template>
  <nav class="tabs">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <router-link to="/" class="nav-link tab" :class="{'active': homeIsActive}" role="navigation" aria-controls="home-page" :aria-selected="homeIsActive">
          Home
        </router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link to="/about" class="nav-link tab" :class="{'active': aboutIsActive}" role="navigation" aria-controls="profile-page" :aria-selected="aboutIsActive">
          About
        </router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link to="/resume" class="nav-link tab" :class="{'active': resumeIsActive}" role="navigation" aria-controls="profile-page" :aria-selected="aboutIsActive">
          Resume
        </router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link to="/projects" class="nav-link tab" :class="{'active': projectsIsActive}" role="navigation" aria-controls="profile-page" :aria-selected="aboutIsActive">
          Projects
        </router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link to="/testimonials" class="nav-link tab" :class="{'active': testimonialsIsActive}" role="navigation" aria-controls="profile-page" :aria-selected="aboutIsActive">
          Testimonials
        </router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link to="/contact" class="nav-link tab" :class="{'active': contactIsActive}" role="navigation" aria-controls="contact-page" :aria-selected="projectsIsActive">
          Contact
        </router-link>
      </li>
    </ul>
    <div class="bookmark-bar sticky-top"></div>

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
nav.tabs {
  position: sticky;
  top: 0;
  overflow: hidden;
  box-shadow: 0 0px 5px rgba(0,0,0,0.8);
  z-index: 10;
}
nav.tabs ul {
  background-color: #ddd;
}
/* nav.tabs ul li {
  border-top: 1px solid #333;
} */
nav.tabs ul li a.tab{
  border-right: 1px solid #999;
  min-width: 100px;
  height: 35px;
  line-height: 35px;
  padding-top: 0;
  padding-bottom: 0;
}

.bookmark-bar {
  min-height: 20px;
  background-color: #fff;
}

</style>
