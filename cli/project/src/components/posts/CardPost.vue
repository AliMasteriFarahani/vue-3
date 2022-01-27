<template>
  <div class="card mb-3" style="width: 18rem">
    <div class="card-header">Featured</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <router-link :to="{name:'post',params:{id:post.id}}">
        title : {{ post.title }}
        </router-link>
      </li>
      <p>{{ post.body }}</p>
    </ul>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  props: {
    post: Object,
  },
  setup(props) {
    onMounted(() => {
      console.log(props.post, "pppooossss");
    });
  },
};
</script>

<style>
</style>