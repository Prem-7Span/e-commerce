<template>
  <div class="sticky top-0 flex flex-col h-screen p-4 bg-white">
    <div
      class="flex justify-between py-2 font-bold p md:px-2 md:flex-row md:space-x-4"
    >
      <div class="flex gap-5">
        <div class="py-2 logo">
          <img
            src="/default/8-orbit-logo-homepage.png"
            alt="logo"
            class="max-w-28"
          />
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'analytics' }" class="block">
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H11V19H5ZM19 19H13V12H19V19ZM19 10H13V5H19V10Z"
                  fill="#757575"
                />
              </svg>
              <span class="ml-3">Dashboard</span>
            </a>
          </router-link>
          <hr />
          <router-link :to="{ name: 'adminproducts' }" class="block">
            <a
              href="#"
              class="flex items-center p-2 ml-0.5 text-gray-900 rounded-lg hover:bg-gray-200"
            >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z"
                  fill="#757575"
                />
              </svg>
              <span class="ml-3">Products</span>
            </a>
          </router-link>
          <hr />
          <router-link :to="{ name: 'orders' }" class="block">
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.9643 5.32843 21.0075 5.15747 21.0054 4.98406C21.0034 4.81064 20.956 4.64077 20.8681 4.49126C20.7803 4.34175 20.6548 4.21778 20.5043 4.13162C20.3538 4.04546 20.1834 4.00009 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                  fill="#757575"
                />
              </svg>
              <span class="ml-3">Orders</span>
            </a>
          </router-link>
          <hr />
        </li>
      </ul>
    </nav>
    <div class="mt-auto">
      <hr />
    </div>
    <div>
      <a
        href="#"
        @click="confirmLogout"
        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
            fill="#757575"
          />
        </svg>
        <span class="ml-3">Logout</span>
      </a>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user.js"; // Import your Pinia store

export default {
  name: "Sidebar",
  methods: {
    confirmLogout() {
      if (confirm("Are you sure you want to logout?")) {
        const userStore = useUserStore();
        userStore.logout(); // Call the logout action from the Pinia store
        this.$router.push({ name: "admin-sign-in" }); // Redirect to SignIn page after logout
      }
    },
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
