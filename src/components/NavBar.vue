<template>
  <div class="side-nav">

    <!-- Closed/Open Area of Nav -->
    <div class="side-nav-mini">
      <img src="https://img.icons8.com/ios-glyphs/30/f91e4e/menu--v1.png" class="burger-menu" @click="toggleNavbar" />
      <ul class="navbar-nav nav-icons me-auto mb-2 mb-lg-0" :class="{ closed: !navOpen }">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page">
            <img src="https://img.icons8.com/ios/50/f91e4e/home--v1.png" class="nav-icon" />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">
            <img src="https://img.icons8.com/ios/50/f91e4e/about.png" class="nav-icon" alt="about"/>
            <!-- <img src="https://img.icons8.com/ios-filled/50/f91e4e/search--v1.png" class="nav-icon" /> -->
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link">
            <img src="https://img.icons8.com/ios/50/f91e4e/business--v1.png" class="nav-icon" />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link">
            <img src="https://img.icons8.com/ios/50/f91e4e/electronics.png" class="nav-icon" />
          </router-link>
        </li>
      </ul>

      <ul class="navbar-nav nav-icons me-auto mb-2 mb-lg-0" :class="{ closed: !navOpen }">
        <li class="nav-item">
          <a href="https://github.com/Zile10" target="_blank">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" loading="lazy" class="nav-icon">
          </a>
        </li>
        <li class="nav-item">
          <a href="mailto:johnnoad04@gmail.com" target="_blank">
            <img src="https://img.icons8.com/fluency/48/null/gmail.png" loading="lazy" class="nav-icon">
          </a>
        </li>
        <li class="nav-item">
          <a href="https://www.linkedin.com/in/john-bruce-noad-518171266/" target="_blank" class="nav-icon">
            <img src="https://img.icons8.com/color/48/null/linkedin.png">
          </a>
        </li>
      </ul>

    </div>

    <!-- Open-Only Area of Nav -->
    <div class="side-nav-large" :class="{ 'side-nav-open': navOpen }">
      <div></div>
      <ul class="navbar-nav navbar-open me-auto mb-2 mb-lg-0" v-show="navOpen">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#homeDiv">
            <img src="https://img.icons8.com/ios/50/FFFFFF/home--v1.png" class="nav-icon invisible" />
            <span>Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#searchDiv">
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" class="nav-icon invisible" />
            <span>Explore</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#businessDiv">
            <img src="https://img.icons8.com/ios/50/FFFFFF/business--v1.png" class="nav-icon invisible" />
            <span>Business</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#techDiv">
            <img src="https://img.icons8.com/ios/50/FFFFFF/electronics.png" class="nav-icon invisible" />
            <span>Technology</span>
          </a>
        </li>
      </ul>

      <ul class="navbar-nav nav-icons me-auto mb-2 mb-lg-0" :class="{ closed: !navOpen }">
        <li class="nav-item">
          <a href="https://github.com/Zile10" target="_blank">
            <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png" loading="lazy" class="nav-icon invisible">
          </a>
        </li>
        <li class="nav-item">
          <a href="mailto:johnnoad04@gmail.com" target="_blank">
            <img src="https://img.icons8.com/fluency/48/null/gmail.png" loading="lazy" class="nav-icon invisible">
          </a>
        </li>
        <li class="nav-item">
          <a href="https://www.linkedin.com/in/john-bruce-noad-518171266/" target="_blank" class="nav-icon invisible">
            <img src="https://img.icons8.com/color/48/null/linkedin.png">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>
<style lang="scss" scoped>

$width: 40px;
$iconSize: 20px;
/* General Nav Styles */
.side-nav {
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
  height: 100vh;
}

.side-nav>* {
  display: grid;
  grid-template-rows: 1fr 7fr;
}

ul li {
  margin-top: 10px;
}

.invisible {
  opacity: 0;
}

ul li a {
  font-weight: 400;
  color: #FFF;
}

ul li a:hover {
  padding-left: 8px;
  color: #ffcccc;
}

ul li a.router-link-exact-active {
  color: #ffcccc;
}

/* Closed Nav Styles */
.side-nav-mini {
  background-color: var(--primColor);
  box-shadow: 0 0 3px var(--accentColor);
  min-height: 100vh;
  height: 100%;
  width: $width !important;
  position: absolute;
  z-index: 20;
  justify-content: center;
}

.burger-menu {
  cursor: pointer;
  border-radius: 30px;
  padding: 8px;
  margin-top: 10px;
  width: $iconSize * 2.25;
}

.burger-menu:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.side-nav-mini ul {
  margin: 0 auto;
}

.nav-icon {
  width: $iconSize !important;
}


/* Open Nav Styles */
.side-nav-large {
  background-color: #111;
  transition: 0.4s ease-in;
  /* Sizing */
  min-height: 100vh;
  height: 100%;
  width: $width;
  /* Position */
  position: relative;
  left: -250px;
  /* Grid */
  display: grid;
  grid-template-rows: 1fr 7fr;
}

.side-nav-large ul {
  text-align: left;
  margin-left: 18px;
}

.side-nav-large ul li span {
  margin-left: 25px;
  vertical-align: middle;
}

.side-nav-large.side-nav-open {
  left: 0px;
  width: 300px;
}
</style>