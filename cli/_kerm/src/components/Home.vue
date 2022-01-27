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
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
//import useCounter from '../composables/useCounter'  // way 1: 
import {useCounter} from '../composables/useCounter'
import HomeChild from './HomeChild.vue';
export default {
  components: { HomeChild },
  setup(){
    let name = ref('haj Ali')
    const count = ref(2)
    const {counter,increament} = useCounter(count);
   // const counter = ref(0);
    // function increament(){
    //   return counter.value +=1;
    // }
    function update(){
        name.value =  
    }
    return{counter,increament,name}
  }
}
</script>

<style>

</style>