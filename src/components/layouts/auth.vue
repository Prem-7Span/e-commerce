<template>
  <div id="main-container" class="md:grid md:grid-cols-2 grid-cols-1">
    <div id="container-1" class="md:bg-[url('/src/assets/bg-signup.png')] md:bg-no-repeat md:h-screen md:max-w-full md:max-h-full hidden lg:block">
      <div class="flex flex-col items-center justify-between h-full py-10">
        <img src="/src/assets/Logo.svg" class="md:max-w-96" alt="" />
        <h1 class="text-6xl text-white">Your fashion,your way!</h1>
      </div>
    </div>
    <div id="container-2" class="w-full h-screen bg-white">
      <router-view></router-view>
    </div>
  </div>
</template>