!<template>
  <div>
    this is home
    <button @click="goToOrder()">go to order</button>
    <hr />
    counter :{{ counter }}
    <button @click="count(3)">count</button>
    <hr />
    <p>name : {{ name }}</p>
    <input type="text" v-model="name" />
    <button @click="changeName('To Reza')">change name</button>
    <hr />
    <li v-for="(v, i) in gf" :key="i">{{ v }}</li>
    <home-child-1
      @changeFamily="changeFamily($event)"
      :name="name"
      :family="family"
    ></home-child-1>
    <hr />
    fullname : 
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import HomeChild1 from "./HomeChild1.vue";
import { useCounter } from "../composibles/useCounter.js";
import { onBeforeMount, onMounted, provide, reactive, ref, watch, watchEffect } from "vue";
import {useRouter} from 'vue-router';
export default {
  components: { HomeChild1 },
  //   computed:{
  //       fullname(){
  //                 return (aa) =>{
  //                      return aa+' dddddddd'
  //                 };
  //       }
  //   },
  setup() {
    provide("token", "akhdahkhdahsjdhkah7836238476hagjsd");
    let name = ref("ali");
    let router = useRouter();
    let route = useRoute();
    let { counter, count } = useCounter();
    let gf = reactive(["mina", "maryam", "sara"]);
    // let family='aaaa'
    let family = ref("Farahani");
    function changeName(n) {
      name.value = n;
    }
    function goToOrder(){
      router.push('/order');
    }
   
    onMounted(()=>{
      console.log('mounted')
    });

    onBeforeMount(()=>{
      console.log('before mount !')
    });


    watch(family, function () {
      console.log("f");
    });
    watchEffect(function () {
      console.log("first");
    });

    function changeFamily(event) {
      family.value = event;
    }

    return { name, family, gf, changeName, changeFamily, counter, count,goToOrder};
  },
};
</script>

<style>
</style>