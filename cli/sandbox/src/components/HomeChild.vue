<template>
  <div>
    <div>home child component</div>
    <hr />
    <h4>name:{{ name }} -- fullname : {{ fullname }}</h4>
    <h3>name from parent  : {{nameP}}</h3>
    <button @click="updatePName()">update parent name</button>
    <hr>
    <button @click="updateName()">update name</button>
    <hr />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed, watch, watchEffect } from '@vue/runtime-core';
export default {
    props:['nameP'],
  setup(props,{emit}) {   //context 
      console.log(props,'props');
      console.log(emit,'context');
      let name = ref('ali');
      const family = ref('farahani');
      const fullname = computed(()=>{
          return `${name.value} ${family.value}`;
      })
      function updatePName(){
        //   context.emit('updatePname','mash Ali')
             emit('updatePname','mash Ali')
      }
      function updateName(){
          name.value = 'alireza'
      }
      watch(name,(newVal,oldVal)=>{
            console.log('watch',newVal,oldVal)
      })
      watchEffect(()=>{
          console.log('watch effect',name.value)
          console.log('watch effect',family.value)
      })
      return{name,family,fullname,updateName,updatePName}
  },
};
</script>

<style>
</style>