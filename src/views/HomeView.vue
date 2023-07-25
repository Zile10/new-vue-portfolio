<template>
  <section id="home" class="container bg-secondary mt-1 text-white text-start">
    <h1>John-Bruce Noad</h1>
    <div class="about-me">
      <h4>About Me</h4>
      <div class="m-auto text-center">
        <router-link to="/about">
          <CornerCutBox 
            :styling="{
              width: '100%', 
              height: '10em', 
              background: 'url(https://i.postimg.cc/9XZJbH71/wxl-landscape-pixel-art-73232.jpg); background-repeat: no-repeat', 
              borderColor:'rgb(255, 20, 20)', 
              borderWidth:'calc(0.1em + 1px)',
              cutSize: '1.5em',
            }"
            cuts="2"
          >
            Hello
          </CornerCutBox>
        </router-link>
        <hr>
      </div>
    </div>
    <div class="about-me">
      <h4>Projects</h4>
      <div class="m-auto row">
        <div class="col">
          <CornerCutBox 
            :styling="{
              width: '100%', 
              height: '10em', 
              background: 'rgb(255, 140, 140)', 
              borderColor:'rgb(255, 20, 20)', 
              borderWidth:'0.5em',
              cutSize: '1.5em',
            }"
            cuts="2"
          >
            <div class="text-center">
              hello
            </div>
          </CornerCutBox>
        </div>
        <div class="col">
          <CornerCutBox 
            :styling="{
              width: '100%', 
              height: '10em', 
              background: 'rgb(255, 140, 140)', 
              borderColor:'rgb(255, 20, 20)', 
              borderWidth:'0.5em',
              cutSize: '1.5em',
            }"
            cuts="2"
          >
            <div class="text-center">
              hello
            </div>
          </CornerCutBox>
        </div>
        <div class="col">
          <CornerCutBox 
            :styling="{
              width: '100%', 
              height: '10em', 
              background: 'rgb(255, 140, 140)', 
              borderColor:'rgb(255, 20, 20)', 
              borderWidth:'0.5em',
              cutSize: '1.5em',
            }"
            cuts="2"
          >
            <div class="text-center">
              hello
            </div>
          </CornerCutBox>
        </div>
        <div class="col">
          <CornerCutBox 
            :styling="{
              width: '100%', 
              height: '10em', 
              background: 'rgb(255, 140, 140)', 
              borderColor:'rgb(255, 20, 20)', 
              borderWidth:'0.5em',
              cutSize: '1.5em',
            }"
            cuts="2"
          >
            <div class="text-center">
              hello
            </div>
          </CornerCutBox>
        </div>
        <hr>
      </div>
    </div>
    <div class="about-me">
      <h4>Testimonials</h4>
      <div class="m-auto row">
        <div class="col">
          <CornerCutBox 
            :styling="{
              width: '100%', 
              height: '10em', 
              background: 'rgb(255, 140, 140)', 
              borderColor:'rgb(255, 20, 20)', 
              borderWidth:'0.5em',
              cutSize: '1.5em',
            }"
            cuts="2"
          >
            <div class="text-center">
              hello
            </div>
          </CornerCutBox>
        </div>
        <div class="col">
          <CornerCutBox 
            :styling="{
              width: '100%', 
              height: '10em', 
              background: 'rgb(255, 140, 140)', 
              borderColor:'rgb(255, 20, 20)', 
              borderWidth:'0.5em',
              cutSize: '1.5em',
            }"
            cuts="2"
          >
            <div class="text-center">
              hello
            </div>
          </CornerCutBox>
        </div>
        <div class="col">
          <CornerCutBox 
            :styling="{
              width: '100%', 
              height: '10em', 
              background: 'rgb(255, 140, 140)',
              borderColor:'rgb(255, 20, 20)', 
              borderWidth:'0.5em',
              cutSize: '1.5em',
            }"
            cuts="2"
          >
            <div class="text-center">
              hello
            </div>
          </CornerCutBox>
        </div>
        <div class="col">
          <CornerCutBox 
            :styling="{
              width: '100%', 
              height: '10em', 
              background: 'rgb(255, 140, 140)', 
              borderColor:'rgb(255, 20, 20)', 
              borderWidth:'0.5em',
              cutSize: '1.5em',
            }"
            cuts="2"
          >
            <div class="text-center">
              hello
            </div>
          </CornerCutBox>
        </div>
        <hr>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import CornerCutBox from '@/components/CornerCutBox.vue';

export default {
  name: "HomeView",
  components: {
    CornerCutBox
  },
  // mounted() {
  //   this.$store.dispatch('getProjects')
  // },
};
</script>

<style scoped>
  .container{
    width: 85%;
  }
</style>
