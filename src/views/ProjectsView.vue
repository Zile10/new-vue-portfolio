<template>
    <div class="about">
      <h1>PROJECTS PAGE!!!</h1>
      <div class="container">
        <div class="row">
          <div class="col-6" v-for="proj in projects" :key="proj.id">
            <!-- <a :href="proj.projectUrl"> -->
              <CornerCutBox :styling="{width: '100%', height: '350px', background: `url(${proj.imgUrl})`}" :cuts="2">
                <!-- <iframe :src="proj.projectUrl" frameborder="0"></iframe> -->
                <div class="project-grid">
                  <div class="bg-danger"></div>
                  <div class="bg-warning"></div>
                  <div class="project-desc bg-primary"></div>
                </div>
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
  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: 2; */
  }

  .project-desc{
    grid-column: span 2;
  }
</style>