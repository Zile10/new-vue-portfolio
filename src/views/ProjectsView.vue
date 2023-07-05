<template>
    <div class="about">
      <h1>PROJECTS PAGE!!!</h1>
      <div class="container">
        <div class="row">
          <div class="col" v-for="proj in projects" :key="proj.id">
            <!-- <a :href="proj.projectUrl"> -->
              <CornerCutBox :styling="{width: '100%', height: '350px', background: `url(${proj.imgUrl})`}" :cuts="2">
                <iframe :src="proj.projectUrl" frameborder="0"></iframe>
              </CornerCutBox>
            <!-- </a> -->
          </div>
        </div>
      </div>
      <!-- <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4 project-col">
            <div class="project-wrapper">
              <iframe src="https://john-bruce-noad-bnry-test.netlify.app" class="flex-grow border-primary border border-3" id="chrome-screen" frameborder="0" title="Chrome"></iframe>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 project-col">
            <div class="project-wrapper">
              <iframe src="https://john-bruce-capstone-project.netlify.app" class="flex-grow border-primary border border-3" id="chrome-screen" frameborder="0" title="Chrome"></iframe>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 project-col">
            <div class="project-wrapper">
              <iframe src="https://john-bruce-js-calculator.netlify.app" class="flex-grow border-primary border border-3" id="chrome-screen" frameborder="0" title="Chrome"></iframe>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 project-col">
            <div class="project-wrapper">
              <iframe src="https://canvas-bouncy-balls.netlify.app" class="flex-grow border-primary border border-3" id="chrome-screen" frameborder="0" title="Chrome"></iframe>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 project-col">
            <div class="project-wrapper">
              <iframe src="https://john-bruce-js-eomp.netlify.app" class="flex-grow border-primary border border-3" id="chrome-screen" frameborder="0" title="Chrome"></iframe>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 project-col">
            <div class="project-wrapper">
              <iframe src="https://running-man-game.netlify.app" class="flex-grow border-primary border border-3" id="chrome-screen" frameborder="0" title="Chrome"></iframe>
            </div>
          </div>
        </div>
      </div> -->
    </div>
</template>

<script>
import CornerCutBox from '@/components/CornerCutBox.vue';
export default {
  components: {
    CornerCutBox
  },
  computed: {
    projects(){
      let projects = this.$store.state.projects;
      return projects
    }
  },
  mounted() {
    this.$store.dispatch('getProjects')
  },
}
</script>

<style scoped>
  .project-wrapper {
    max-height: 300px ;
    overflow: hidden !important;
    cursor: zoom-in;
  }
  iframe {
    width: 90vw;
    height: 100vh;
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform-origin: top left;
    z-index: 1;
    position: relative;
    border-radius: 50px;
  }

  
</style>