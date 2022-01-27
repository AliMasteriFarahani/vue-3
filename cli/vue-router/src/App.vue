<template>
  <div>
    <h3>this is app component</h3>
    <router-link class="mr-1" to="/home">home</router-link>
    <router-link class="mr-1" to="/users">users</router-link>
    <router-link to="/about">about</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mr-1{
  margin-right: 1rem;
}
</style>