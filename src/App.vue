<script setup>


</script>

<template>
  <router-view></router-view>
  <div class="relative">
    <Nav/>
  </div>
      <img class="hidden lg:block lg:absolute lg:left-0 lg:w-38 lg:h-32 md:block lg:bottom-2 md:absolute md:w-38 md:h-32 md:right-1 md:bottom-2" src="./assets/profile.svg" alt="profile">
      <img class="hidden lg:block lg:absolute lg:w-38 md:block lg:right-0  lg:h-32 lg:bottom-2 md:absolute md:w-38 md:h-32 md:right-1 md:bottom-2" src="./assets/profile2.svg" alt="profile">
</template>

<style>
#app{
  height: 500px;
}
</style>
