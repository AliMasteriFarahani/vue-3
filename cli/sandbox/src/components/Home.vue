<template>
  <div>
    <h3>this is home component !!!</h3>
    <p>{{counter}}</p>
    <button @click="increament()">increamnt</button>
    <hr>
    <home-child :nameP="name" @updatePname="update"></home-child>
    <slot name="ul"></slot>
    <hr>
    <slot name="h"></slot>
    <hr>
    <home-second-child></home-second-child>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
//import useCounter from '../composables/useCounter'  // way 1: 
import {useCounter} from '../composables/useCounter'
import HomeChild from './HomeChild.vue';
import HomeSecondChild from './HomeSecondChild.vue';
import { provide } from '@vue/runtime-core';
export default {
  components: { HomeChild ,HomeSecondChild},
  setup(){
    let name = ref('haj Ali')
    provide('name',name);
    provide('month','september');
    const count = ref(2)
    const {counter,increament} = useCounter(count);
   // const counter = ref(0);
    // function increament(){
    //   return counter.value +=1;
    // }
    function update(newName){
        name.value =  newName
    }
    return{counter,increament,name,update}
  }
}
</script>

<style>

</style>