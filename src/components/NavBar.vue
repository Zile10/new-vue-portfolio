<template lang="">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style scoped>
nav {
  padding: 30px;
  background-color: var(--colorPrimary);
  word-wrap: break-word;
  padding: 10px;
  z-index: 50;
  /* position: sticky;
      top: 0;
      background-color: #232328; */
}
nav a {
  font-weight: bold;
  color: white;
}
nav a:hover {
  font-weight: bold;
  color: var(--textColorPrimary) !important;
}

nav a.router-link-exact-active {
  color: var(--textColorSecondary);
}

.logo {
  width: 80px;
  border-radius: 55px;
  box-shadow: 0 0 3px 0px black;
  scale: 1;
  margin-right: 20px;
}
.logo:hover {
  background-color: var(--textColorPrimary);
  scale: 1.05;
  animation: 2s ease-in-out spin infinite;
  animation-fill-mode: forwards;
}

a {
  text-decoration: none;
}

@media only screen and (max-width: 300px) {
  .logo-link {
    display: none;
  }
}
</style>
