!<template>
  <div>
    <div>this is home child 1</div>
    <h3>name : {{ name }}</h3>
    <h3>family : {{ family }}</h3>
    <h3>token : {{ token }}</h3>
    <button @click="changeFamily()">change family</button>
  </div>
</template>

<script>

import { inject } from '@vue/runtime-core';
export default {
  props: {
    name: String,
    family:String
  },
  setup(props,{emit}) {
      let token = inject('token');
      console.log(props);
        let changeFamily = ()=>{
            emit('changeFamily','Masteri Farahani');
        }
      //let family1 = props.family;
       return {changeFamily,token}
  }
};
</script>

<style>
</style>