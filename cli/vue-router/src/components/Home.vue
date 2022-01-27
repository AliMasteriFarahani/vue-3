<template>
  <div>
    <h3>home component !</h3>
    <button @click="goToShowUsers()">go to show users</button>
    <p>
      this is home component this is home component this is home component this
      is home component this is home component this is home component this is
      home component this is home component
    </p>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  setup() {
    const router = useRouter();
    function goToShowUsers(){
        router.push({name:'ShowUsers',params:{id:33},query:{name:'ali',family:'farahani'},hash:'#main'})
    }
    return {goToShowUsers}
  },
};
</script>

<style>
</style>