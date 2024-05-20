<template>
  <div>
    <div
      class="flex justify-between px-2 py-4 font-bold md:px-8 md:flex-row md:space-x-4"
    >
      <div class="flex gap-5">
        <div class="py-2 logo">
          <router-link :to="{ name: 'home' }">
            <img src="/default/logo-navbar.svg" alt="logo" />
          </router-link>
        </div>
        <div class="flex py-2 page">
          <nav
            class="flex-col hidden space-x-4 space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-4"
          >
            <router-link
              to="/products"
              class="text-gray-600 hover:text-gray-800 hover:underline"
            >
              Men
            </router-link>
            <router-link
              to="/products"
              class="text-gray-600 hover:text-gray-800 hover:underline"
            >
              Women
            </router-link>
          </nav>
        </div>
        <form class="max-w-md mx-auto">
          <div class="relative">
            <div
              class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"
            >
              <!-- <img src="/img/vVector.svg" alt="" /> -->
            </div>
            <input
              type="search"
              id="default-search"
              class="hidden p-2 pl-8 mb-4 border border-gray-300 rounded-md shadow-sm sm:inline md:mb-0 md:w-96 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Search"
            />
          </div>
        </form>
      </div>

      <div class="flex items-center space-x-2">
        <img
          src="/default/like-navbar.svg"
          class="hidden py-2 sm:inline"
          alt="like"
        />
        <router-link :to="{ name: 'check-out' }">
          <img
            src="/default/cart-navbar.svg"
            class="hidden py-2 sm:inline"
            alt="cart"
          />
        </router-link>
        <button
          @click="openModal"
          class="px-4 py-2 text-white rounded-lg bg-primary-100"
        >
          Login
        </button>
      </div>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur"
      @click.self="closeModal"
    >
      <div class="main">
        <sign-in />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import signIn from "../../pages/auth/sign-in.vue";

export default {
  components: {
    signIn,
  },
  setup() {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      isModalOpen,
      openModal,
      closeModal,
    };
  },
};
</script>

<style>
.backdrop-blur {
  backdrop-filter: blur(10px);
}
.main {
  text-align: center;
  position: relative;
}
</style>
