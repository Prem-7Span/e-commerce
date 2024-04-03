<template>
  
  <div id="main-container" class="grid grid-cols-2">
    <div
      id="container-1"
      class="bg-[url('/src/assets/bg-signup.png')] bg-no-repeat h-screen max-w-fll max-h-full"
    >
    
      <!-- <img src="/src/assets/bg-signup.png" alt="bg-img" /> -->
      <div class="flex flex-col items-center justify-between h-full py-10">
        <img src="/src/assets/Logo.svg" class="max-w-96" alt="" />

        <h1 class="text-6xl text-white">Your fashion,your way!</h1>
      </div>
    </div>
    <div id="container-2" class="w-full h-screen bg-white">
      <router-view></router-view>
    </div>
  </div>
</template>
