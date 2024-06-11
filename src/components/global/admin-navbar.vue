<template>
  <div class="cursor-pointer">
    <div
      class="flex justify-between px-2 py-4 font-bold md:px-8 md:flex-row md:space-x-4"
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
      <div>
        <div v-if="userDetail">
          <div class="relative inline-block text-left">
            <div>
              <button
                @click="toggleDropdown"
                class="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-gray-700"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <img
                  src="/public/default/profile-logo.svg"
                  alt="Profile"
                  class="w-5 h-6"
                />
              </button>
            </div>
            <div
              v-show="dropdownOpen"
              class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div class="py-1">
                <button
                  @click="logoutAndCloseDropdown"
                  class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any necessary styles here */
</style>
