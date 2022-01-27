<template>
  <div>
    <p>this is app component</p>
    <p>name:{{name}}</p>
    <p>name:{{namew}}</p>
    <button @click="updateName()">update name</button>
    <!-- <Home>
      <template v-slot:ul>
        <ul>
          <li>c++</li>
          <li>c#</li>
          <li>c++</li>
        </ul>
      </template>
      <template v-slot:h>
        <h1>this is slot</h1>
      </template>
    </Home> -->
    <home></home>
  </div>
  <!-- <teleport to="#tele-target">
    <h1>this is teleport !!!</h1>
  </teleport> -->
</template>

<script>
import Home from "./components/Home.vue";
import {ref,reactive} from 'vue'
export default {
  components: { Home },
  setup(){
    let name = ref("ali");
    let namew = ref(["ali"]);
    let alf = reactive({
      a:"A",
      b:"B"
    });
    function updateName(){
      console.log(namew)
      console.log(alf)
      name.value =  'alie'
    }
    return{
      name,
      namew,
      alf,
      updateName
    }

  }
};
</script>

<style>
</style>