<template>
  <div
    id="main-container"
    class="grid-cols-1 md:grid md:grid-cols-2 h-full-screen-adjusted"
  >
    <div
      id="container-1"
      class="md:bg-[url('/auth/auth-img.png')] md:bg-no-repeat md:h-full md:max-w-full md:max-h-full hidden lg:block"
    >
      <div class="flex justify-between h-full py-10 item-end">
        <!-- <img src="/auth/Logo.svg" class="md:max-w-96" alt="" /> -->
        <!-- <h1 class="text-6xl text-white">Your fashion, your way!</h1> -->
      </div>
    </div>
    <div id="container-2" class="w-full h-full bg-white">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

.h-full-screen-adjusted {
  height: calc(100vh - 87px);
}
</style>
