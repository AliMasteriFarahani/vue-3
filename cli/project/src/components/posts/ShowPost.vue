<template>
  <div>
    <div class="container">
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="row">
          <card-post :post="post"></card-post>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import CardPost from "./CardPost.vue";
export default {
  components: {
    CardPost,
  },
  setup() {
    let post = ref({});
    let loading = ref(true);
    const route = useRoute();
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((response) => {
          console.log(response);
          loading.value = false;
          post.value = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getPost();
    onMounted(() => {
      console.log("object");
    });

    return { loading, post, getPost };
  },
};
</script>

<style>
</style>