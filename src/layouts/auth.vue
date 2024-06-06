<template>
  <div id="main-container" class="relative grid-cols-1 md:grid md:grid-cols-2">
    <div class="relative banner-overlay">
      <div
        id="container-1"
        class="md:bg-[url('/auth/auth-bg.png')] md:bg-no-repeat md:h-full md:max-w-full md:max-h-full hidden lg:block md:bg-cover"
      >
        <!-- <div class="flex justify-between h-full py-10 item-end">
          <img src="/auth/Logo.svg" class="md:max-w-96" alt="" />
          <h1 class="text-6xl text-white">Your fashion, your way!</h1>
        </div> -->
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

.banner-overlay::before {
  @apply w-full h-full inset-0 absolute;

  background-image: linear-gradient(179deg, #00000066, #6666660d);

  content: "";
}
</style>
