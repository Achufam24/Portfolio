<script setup>


</script>

<template>
  <router-view></router-view>
  <div class="relative">
    <Nav/>
  </div>
      <img class="absolute w-38 h-32 bottom-2" src="./assets/profile.svg" alt="profile">
      <img class="absolute w-38 h-32 right-1 bottom-2" src="./assets/profile2.svg" alt="profile">
</template>

<style>
#app{
  height: 500px;
}
</style>
