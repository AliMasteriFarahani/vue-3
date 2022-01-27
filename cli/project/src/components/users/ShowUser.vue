<template>
  <div>
    <div class="container">
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="row">
          <card-users :user="user"></card-users>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import CardUsers from "./CardUsers.vue";
export default {
  components: {
    CardUsers,
  },
  setup() {
    let user = ref({});
    let loading = ref(true);
    const route = useRoute();
    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then((response) => {
          console.log(response);
          loading.value = false;
          user.value = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getUser();
    onMounted(() => {
      console.log("object");
    });

    return { loading, user, getUser };
  },
};
</script>

<style>
</style>