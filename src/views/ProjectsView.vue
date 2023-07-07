<template>
    <div class="about">
      <div class="container">
        <h1>PROJECTS PAGE!!!</h1>
        <hr>
        <div class="row">
          <div class="col-6" v-for="proj in projects" :key="proj.id" style="height: 350px;">
              <CornerCutBox :styling="{width: '100%', height: '100%', background: `url(${proj.imgUrl})`}" :cuts="2">
                <!-- <iframe :src="proj.projectUrl" frameborder="0"></iframe> -->
                <div class="project-grid">
                  <div class="">
                    <!-- bg-danger -->
                    <h4>Skills</h4>
                    <ul>
                      <li>Blah</li>
                      <li>Blah</li>
                      <li>Blah</li>
                      <li>Blah</li>
                    </ul>
                  </div>
                  <div class="">
                    <!-- bg-warning -->
                    <h4>Links</h4>
                    <div class="btns">
                      <a :href="`${proj.projectUrl}`" class="btn bg-danger">Live Link (New Tab)</a>
                      <a target="_blank" :href="`${proj.projectUrl}`" class="btn bg-danger">Live Link (Browser Tab)</a>
                      <a target="_blank" :href="`${proj.codeUrl}`" class="btn bg-danger">GitHub</a>

                    </div>
                  </div>
                  <div class="project-desc ">
                    <!-- bg-primary -->
                    <h4>{{ proj.projectName }}</h4>
                    <p class="h-50 overflow-scroll">{{ proj.projectDesc }}</p>
                  </div>
                </div>
              </CornerCutBox>
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
    try {
      this.$store.dispatch('getProjects')
    } catch(error){
      console.error(error)
    }
  },
}
</script>

<style scoped>
  .project-grid {
    color: white;
    text-align: left;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 45%);
    transition: 0.5s;
    clip-path: 
      polygon(
        0em calc(var(--cut-size) - 2px),
        calc(var(--cut-size) - 2px) 0em,
        100% 0,
        100% calc(100% - (var(--cut-size) - 2px)),
        calc(100% - (var(--cut-size) - 2px)) 100%,
        0 100%
      )
    ;
  }
  
  .project-grid > div {
    display: none;
    padding: 1em;
    grid-row: span 1;
  }
  .project-grid:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .project-grid:hover > div {
    display: block;
    overflow: hidden;
  }

  .project-grid h1, .project-grid h2, .project-grid h3, .project-grid h4, .project-grid h5, .project-grid h6 {
    text-align: center; 
  }

  .btns .btn {
    margin: 2px;
    padding: 1px;
  }

  .project-desc{
    grid-column: span 2;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
</style>