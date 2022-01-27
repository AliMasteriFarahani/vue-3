<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue';
export default {
  components: { Header },
  name: "App",
};
</script>

<style>
</style>