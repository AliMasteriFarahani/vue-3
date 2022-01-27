<template>
  <div>
    <div class="container">
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="row">
        <div class="col-4" v-for="user in users" :key="user.id">
          <card-users :user="user"></card-users>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import CardUsers from "./CardUsers.vue";
export default {
  components: {
    CardUsers,
  },
  setup() {
    let users = ref([]);
    let loading = ref(true);
    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log(response);
          loading.value = false;
          users.value = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getUsers();
    onMounted(() => {
      console.log("object");
    });

    return { loading, users, getUsers };
  },
};
</script>

<style>
</style>