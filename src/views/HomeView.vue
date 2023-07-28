<template>
  <div class="container">
    <CornerCutBox :styling="CornerCutBoxStyling" :tilt="true" :options="TiltOptions">
      <div class="row">
        <div class="col">
          <h2>John-Bruce Noad</h2>
        </div>
        <div class="col">
          <img src="https://postimg.cc/SYpxLwwm">
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
        background: 'transparent'
      },
      TiltOptions: {
        max: '2',
      }
    }
  },
}
</script>
<style lang="scss">
  
</style>