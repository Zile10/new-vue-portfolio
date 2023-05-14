<template>
  <section id="home">
    <div class="container bg-danger">
      <div class="row">
        <div class="col-6">

          <img src="" alt="...">
        </div>
        <div class="col-6">
          Welcome to my Portfolio
          <!-- Buttons Here -->
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