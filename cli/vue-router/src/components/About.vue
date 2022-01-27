<template>
  <div>
    <h3>about component !</h3>
    <p>
      this is about component this is about component this is about component
      this is about component this is about component this is about component
      this is about component
    </p>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to, "to before route enter in cp");
    console.log(from, "from before route enter in cp ");
    next();
  },
};
</script>

<style>
</style>