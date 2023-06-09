<template>
  <nav class="tabs">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active tab" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link tab" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link tab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
      </li>
      <li class="nav-item d-flex justify-content-center align-items-center px-1" role="presentation">
        <button class="nav-link plus" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/afafaf/plus--v1.png" alt="plus--v1"/>
        </button>
        <!-- <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/737373/plus--v1.png" alt="plus--v1"/> -->
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
      <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
      <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
      <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
    </div>
    <!-- <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul> -->
    <!-- <div class="bookmark-bar sticky-top"></div> -->

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
nav.tabs ul li .tab{
  border-right: 1px solid #999;
  min-width: 100px;
  height: 35px;
  line-height: 35px;
  padding-top: 0;
  padding-bottom: 0;
}
nav.tabs ul li .plus{
  padding: 0;
}

.bookmark-bar {
  min-height: 20px;
  background-color: #fff;
}

</style>
