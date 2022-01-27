<template>
  <div>
    <hr />
    <h3>home second child -- name : {{ name }}</h3>
    <h3>month : {{ month }}</h3>
    <h1 ref="root">this is a ref</h1>
    <hr />
  </div>
</template>

<script>
import { inject, onMounted, ref } from "vue";

export default {
  setup() {
    let root = ref(null);
    //console.log(root.value,'rooot')
    const month = inject("month");
    const name = inject("name");
    onMounted(()=>{
        console.log(root.value,'rooot mounted')
    })


    return { month, name ,root};
  },
};
</script>

<style>
</style>