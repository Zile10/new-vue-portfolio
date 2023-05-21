<template>
  <section id="home">
    <div
      class="container d-flex flex-column justify-content-center align-items-center"
    >
      <div class="content">
        <h1>John-Bruce Noad</h1>
        <div class="controls">
          <form class="d-flex" role="search">
            <input
              class="form-control rounded-5 border-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
          </form>
          <div class="row">
            <div class="col-2 p-1 pt-2">
              <div class="card">
                <img width="48" src="https://img.icons8.com/material-outlined/48/image.png" alt="image" class="m-auto"/>
                <p>Shortcut</p>
              </div>
            </div>
            <div class="col-2 p-1 pt-2">
              <div class="card">
                <img width="48" src="https://img.icons8.com/material-outlined/48/image.png" alt="image" class="m-auto"/>
                <p>Shortcut</p>
              </div>
            </div>
            <div class="col-2 p-1 pt-2">
              <div class="card">
                <img width="48" src="https://img.icons8.com/material-outlined/48/image.png" alt="image" class="m-auto"/>
                <p>Shortcut</p>
              </div>
            </div>
            <div class="col-2 p-1 pt-2">
              <div class="card">
                <img width="48" src="https://img.icons8.com/material-outlined/48/image.png" alt="image" class="m-auto"/>
                <p>Shortcut</p>
              </div>
            </div>
            <div class="col-2 p-1 pt-2">
              <div class="card">
                <img width="48" src="https://img.icons8.com/material-outlined/48/image.png" alt="image" class="m-auto"/>
                <p>Shortcut</p>
              </div>
            </div>
            <div class="col-2 p-1 pt-2">
              <div class="card">
                <img width="48" src="https://img.icons8.com/material-outlined/48/image.png" alt="image" class="m-auto"/>
                <p>Shortcut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#home .container {
  min-height: 500px;
}

h1 {
  font-weight: bolder;
  color: #333;
}
.container .controls {
  width: 600px;
}
</style>
