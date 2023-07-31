<template>
  <div class="container">
    <CornerCutBox :styling="CornerCutBoxStyling" :tilt="true" :options="TiltOptions">
      <div class="row">
        <div class="col">
          <h2>John-Bruce Noad</h2>
        </div>
        <div class="col">
          <img src="https://i.postimg.cc/4yYHGGPH/john-bruce-noad-portfolio-photo-removebg-preview.png" alt="Profile Pic" class="profile-pic">
        </div>
      </div>
    </CornerCutBox>
  </div>
</template>
<script>
import CornerCutBox from '@/components/CornerCutBox.vue'
export default {
  components: {
    CornerCutBox
  },
  data() {
    return {
      CornerCutBoxStyling: {
        width: '100%',
        height: '85vh',
        margin: '1em 0px',
        background: 'url(https://i.postimg.cc/mkpnb7mq/75e543660cc620f3092d8461c51202af.jpg), '
      },
      TiltOptions: {
        max: '2',
      }
    }
  },
}
</script>
<style lang="scss">
  .profile-pic {
    position: relative;
    bottom: -1em;
  }
</style>