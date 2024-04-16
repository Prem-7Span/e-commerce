<template>
  <div class="flex px-4 py-4 md:flex-row md:space-x-4">
    <div class="py-2 logo">
      <router-link :to="{ name: 'HomePage' }">
        <img src="/public/default/logo-navbar.svg" alt="logo" />
      </router-link>
    </div>
    <div class="flex py-2 page">
      <nav
        class="flex-col hidden space-x-4 space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-4"
      >
        <a href="#" class="text-gray-600 hover:text-gray-800 hover:underline"
          >Men</a
        >
        <a href="#" class="text-gray-600 hover:text-gray-800 hover:underline"
          >Women</a
        >
        <a href="#" class="text-gray-600 hover:text-gray-800 hover:underline"
          >More</a
        >
        <a href="#" class="text-gray-600 hover:text-gray-800 hover:underline"
          >Studio</a
        >
      </nav>
    </div>
    <div class="flex-grow input">
      <input
        type="search"
        class="hidden p-2 pl-8 mb-4 border border-gray-300 rounded-md shadow-sm sm:inline md:mb-0 md:w-96 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        placeholder="Search"
      />
    </div>
    <div class="flex items-center space-x-2">
      <img
        src="/public/default/like-navbar.svg"
        class="hidden py-2 sm:inline"
        alt="like"
      />
      <img
        src="/public/default/cart-navbar.svg"
        class="hidden py-2 sm:inline"
        alt="cart"
      />
      <router-link :to="{ name: 'SignIn' }">
        <button class="px-4 py-2 text-white rounded-lg bg-primary-100">
          login
        </button>
      </router-link>
      <!-- <button class="px-4 py-2 text-white rounded-lg bg-primary-100">
        Login
      </button> -->
    </div>
  </div>
</template>

<!-- <img src="/public/default/logo-navbar.svg" alt="logo" /> -->
