!<template>
  <div>order</div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup(props) {
    let route = useRoute();
    console.log(route.params, "params");
  },
};
</script>
<style>
</style>