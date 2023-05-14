<template>
  <section id="home">
    <div class="container">
      <div class="row">
        <div class="col-6">

          <img src="" alt="...">
        </div>
        <div class="col-6">
          Welcome to my Portfolio
          <iframe src="https://www.google.com/webhp?igu=1" class="flex-grow border-primary border border-3" id="chrome-screen" width="700" height="530" frameborder="0" title="Chrome"></iframe>          <!-- Buttons Here -->
          <!-- They Link to Games/Fun Pages -->
          <!-- These act as Project examples, to showcase my skills -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style>
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;

}
#home .container {
  height: 500px;
}

</style>