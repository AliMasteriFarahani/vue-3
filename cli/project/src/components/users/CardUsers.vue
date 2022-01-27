<template>
  <div class="card mb-3" style="width: 18rem">
    <div class="card-header">Featured</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <router-link :to="{name:'user',params:{id:user.id}}">
          name : {{user.name}}
        </router-link>
      </li>
      <li class="list-group-item">username : {{user.username}}</li>
      <li class="list-group-item">email : {{user.email}}</li>
    </ul>
  </div>
</template>

<script>
export default {
props:{
    user:Object
}
};
</script>

<style>
</style>