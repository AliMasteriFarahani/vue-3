<template>
  <div>
    <h3>show users component ! </h3>
    <h4>{{route.params}}</h4>
    <button @click="goHome()">home</button>
    <p>
show user component 
    </p>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    let router = useRouter();
    let route = useRoute();
    console.log(router, "router");
    console.log(route, "route");
    function goHome() {
      router.push("/home");
    }

    return { goHome ,route};
  },
};
</script>

<style>
</style>