<template lang="">
  <div class="tabs">
    <div class="row px-3">
      <router-link to="/" class="col nav-link" :class="{'active': homeIsActive}">Home</router-link>
      <router-link to="/about" class="col nav-link" :class="{'active': aboutIsActive}">About</router-link>
      <router-link to="/projects" class="col nav-link" :class="{'active': projectsIsActive}">Projects</router-link>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg bg-mist-2 sticky-top border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Portfolio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
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
  height: var(--tabsHeight);
  background-color: #555;
  position: sticky;
  top: 0;
  overflow: hidden;
}

.tabs a {
  max-height: var(--tabsHeight);
  border: 1px solid var(--bs-danger);
  border-bottom: none;
  border-radius: 7px 7px 0px 0px;
  background-color: #ccc;
}
.tabs a.active {
  background-color: #fff;
}
nav {
  top: var(--tabsHeight);
}

</style>
