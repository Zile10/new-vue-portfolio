<template>
  <section id="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>John-Bruce Noad</h1>
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