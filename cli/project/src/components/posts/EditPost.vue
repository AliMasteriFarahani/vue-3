<template>
  <div>
    <div v-if="pageLoading" class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else>
      <h3>create post :</h3>
      <hr />
      <PostForm
        @formData="updatePost"
        :btnLoading="loading"
        :post="post"
        name="edit post"
      ></PostForm>
    </div>
    <!-- <form @submit.prevent="validate()" class="col-6 m-auto">
      <label for="">title</label>
      <input
        v-model.lazy.trim="form.title"
        class="form-control mb-2"
        type="text"
      />
      <div class="form-text text-danger">{{ form.titleErrorText }}</div>
      <label class="mt-3" for="">body</label>
      <textarea v-model.lazy.trim="form.body" class="form-control"></textarea>
      <div class="form-text text-danger">{{ form.bodyErrorText }}</div>
      <button type="submit" class="mt-2 btn btn-dark" :disabled="loading">
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        edit post
      </button>
    </form> -->
  </div>
</template>

<script>
//import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
import PostForm from "./Form.vue";
export default {
  components: {
    PostForm,
  },
  setup() {
    // let loading = ref(false);
    const route = useRoute();
    // const form = reactive({
    //   title: "",
    //   body: "",
    //   bodyErrorText: "",
    //   titleErrorText: "",
    // });
    let loading = ref(false);
    let pageLoading = ref(true);
    const post = ref({});
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((res) => {
          post.value = res.data;
          pageLoading.value = false;
          // form.title = res.data.title;
          // form.body = res.data.body;
        });
    }
    getPost();
    // function validate() {
    //   if (form.title === "") {
    //     form.titleErrorText = " title is required";
    //   } else {
    //     form.titleErrorText = "";
    //   }
    //   if (form.body === "") {
    //     form.bodyErrorText = " title is required";
    //   } else {
    //     form.bodyErrorText = "";
    //   }

    //   if (form.title !== "" && form.body !== "") {
    //     loading.value = true;
    //     updatePost();
    //   }
    // }
    function updatePost(form) {
       loading.value = true;
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          title: form.title,
          body: form.body,
          userid: 1,
        })
        .then((res) => {
          console.log(res);
          loading.value = false;
          Swal.fire({
            icon: "success",
            title: "Thanks",
            text: "post was edited",
          });
        });
    }
    return { loading, updatePost, post, pageLoading };
  },
};
</script>

<style>
</style>