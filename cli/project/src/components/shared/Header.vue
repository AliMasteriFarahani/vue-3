<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light ">
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
            <router-link class="nav-link active" :to="{name:'Home'}">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name:'Users'}">users</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name:'Posts'}">posts</router-link>
            </li>
            <li class="nav-item">
               <router-link class="nav-link" :to="{name:'About'}">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.router-link-exact-active{
  border-bottom: 2px solid #000;
}
</style>