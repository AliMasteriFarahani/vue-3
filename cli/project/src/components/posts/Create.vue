<template>
  <div>
    <h3>create post :</h3>
    <hr />
    <PostForm @formData="createPost" :btnLoading="loading" name="add post"></PostForm>
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
        save
      </button>
    </form> -->
  </div>
</template>

<script>
// import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import PostForm from "./Form.vue";
import { ref } from '@vue/reactivity';
export default {
  components: {
    PostForm,
  },
  setup() {
    // let loading = ref(false);
    // const form = reactive({
    //   title: "",
    //   body: "",
    //   bodyErrorText: "",
    //   titleErrorText: "",
    // });
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
    //     createPost();
    //   }
    // }
    const loading = ref(false)
    function createPost(form) {
      loading.value = true;
      axios
        .post(`https://jsonplaceholder.typicode.com/posts`, {
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
            text: "post was created",
          });
        });
    }
    return { loading,createPost };
    // return { form, loading, validate };
  },
};
</script>

<style>
</style>