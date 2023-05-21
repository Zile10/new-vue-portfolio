<template>
  <section id="home">
    <div class="container d-flex flex-column justify-content-center">
      <h1>John-Bruce Noad</h1>
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