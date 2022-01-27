<template>
  <div>
    <div class="container">
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="row">
         <router-link :to="{name:'CreatePost'}" type="button" class="btn btn-dark">create post</router-link>
        <div class="col-4" v-for="post in posts" :key="post.id">
          <card-post :post="post"></card-post>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import CardPost from "./CardPost.vue";
export default {
  components: {
    CardPost,
  },
  setup() {
    let posts = ref([]);
    let loading = ref(true);
    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response,'reeeeeee');
          loading.value = false;
          posts.value = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getPosts();
    onMounted(() => {
      console.log("object");
    });
    return { loading, posts, getPosts };
  },
};
</script>

<style>
</style>