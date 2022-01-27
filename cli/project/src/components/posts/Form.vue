<template>
  <form @submit.prevent="validate()" class="col-6 m-auto">
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
    <button type="submit" class="mt-2 btn btn-dark" :disabled="btnLoading">
      <div
        v-if="btnLoading"
        class="spinner-border spinner-border-sm"
        role="status"
      ></div>
      {{name}}
    </button>
  </form>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
    props:{
        btnLoading:Boolean,
        post:Object,
        name:String
    },
  setup(props,{emit}) {
    //let btnLoading = props.btnLoading;
    const form = reactive({
      title: "",
      body: "",
      bodyErrorText: "",
      titleErrorText: "",
    });
    function setInput(){
        if (props.post !== undefined) {
            form.title = props.post.title;
            form.body = props.post.body;
        }
    }
    setInput();
    function validate() {
      if (form.title === "") {
        form.titleErrorText = " title is required";
      } else {
        form.titleErrorText = "";
      }
      if (form.body === "") {
        form.bodyErrorText = " title is required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !== "" && form.body !== "") {
        emit('formData',form)
      }
    }
    return { form ,validate};
  },
};
</script>

<style>
</style>