<template>
  <div class="flex flex-col h-screen p-4 ">
    <nav class="bg-white">
      <ul>
       <li>
        <router-link :to="{ name: 'Analytics' }">
        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 0 0-1 1v16a1 1 0 0 0 1.5.86L14.5 17H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H10ZM10 18.143V3h9v11h-4a1 1 0 0 0-.5.14l-5.5 4.86ZM7 4H1a1 1 0 0 0-1 1v11h2V6h2v9h2V5a1 1 0 0 0-1-1ZM2 14H0v2h2v-2Z"/>
                </svg>
                <span class="ml-3">Dashboard</span>
              </a>
              </router-link>
              <hr>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 0 0-1 1v16a1 1 0 0 0 1.5.86L14.5 17H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H10ZM10 18.143V3h9v11h-4a1 1 0 0 0-.5.14l-5.5 4.86ZM7 4H1a1 1 0 0 0-1 1v11h2V6h2v9h2V5a1 1 0 0 0-1-1ZM2 14H0v2h2v-2Z"/>
                </svg>
                <span class="ml-3">Products</span>
              </a>
              <hr>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 0 0-1 1v16a1 1 0 0 0 1.5.86L14.5 17H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H10ZM10 18.143V3h9v11h-4a1 1 0 0 0-.5.14l-5.5 4.86ZM7 4H1a1 1 0 0 0-1 1v11h2V6h2v9h2V5a1 1 0 0 0-1-1ZM2 14H0v2h2v-2Z"/>
                </svg>
                <span class="ml-3">Orders</span>
              </a>
              <hr>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 0 0-1 1v16a1 1 0 0 0 1.5.86L14.5 17H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H10ZM10 18.143V3h9v11h-4a1 1 0 0 0-.5.14l-5.5 4.86ZM7 4H1a1 1 0 0 0-1 1v11h2V6h2v9h2V5a1 1 0 0 0-1-1ZM2 14H0v2h2v-2Z"/>
                </svg>
                <span class="ml-3">Customers</span>
              </a>
       </li>
      </ul>
    </nav>
    <div class="mt-auto">
      <hr>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 0 0-1 1v16a1 1 0 0 0 1.5.86L14.5 17H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H10ZM10 18.143V3h9v11h-4a1 1 0 0 0-.5.14l-5.5 4.86ZM7 4H1a1 1 0 0 0-1 1v11h2V6h2v9h2V5a1 1 0 0 0-1-1ZM2 14H0v2h2v-2Z"/>
                </svg>
                <span class="ml-3">Settings</span>
              </a>
              <hr>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 0 0-1 1v16a1 1 0 0 0 1.5.86L14.5 17H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H10ZM10 18.143V3h9v11h-4a1 1 0 0 0-.5.14l-5.5 4.86ZM7 4H1a1 1 0 0 0-1 1v11h2V6h2v9h2V5a1 1 0 0 0-1-1ZM2 14H0v2h2v-2Z"/>
                </svg>
                <span class="ml-3">Logout</span>
              </a>
     
    </div>
  </div>
</template>

