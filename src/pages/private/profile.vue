<template>
  <div class="flex flex-col items-center justify-center min-h-screen sign-up-page">
    <div class="w-full max-w-md px-8 py-6 space-y-3 text-center bg-white rounded-lg shadow-md md:text-left md:max-w-md">
      <div class="text-2xl animate__animated animate__fadeIn">Profile details</div>

      <div class="flex flex-col space-y-2">
        <div class="animate__animated animate__fadeIn">First Name</div>
        <h1 class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
          {{ userDetails.firstName }}
        </h1>
      </div>

      <div class="flex flex-col space-y-2">
        <div class="animate__animated animate__fadeIn">Last Name</div>
        <h1 class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
          {{ userDetails.lastName }}
        </h1>
      </div>

      <div class="flex flex-col space-y-2">
        <div class="animate__animated animate__fadeIn">Mobile number</div>
        <h1 class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
          {{ userDetails.mobileNo }}
        </h1>
      </div>

      <div class="flex flex-col space-y-2">
        <div class="animate__animated animate__fadeIn">Email Id</div>
        <h1 class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
          {{ userDetails.email }}
        </h1>
      </div>

      <div class="flex flex-col space-y-2">
        <div class="animate__animated animate__fadeIn">Address 1</div>
        <div v-if="userDetails.addresses && userDetails.addresses.length">
          <h1 class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
            {{ userDetails.addresses }}
          </h1>
        </div>
        <div v-else class="text-gray-400">Add Your Address</div>
      </div>
   

      <router-link :to="{ name: 'editprofile' }">
        <button
          type="button"
          class="w-full mt-4 px-4 py-2 font-medium text-center text-white transition duration-200 ease-in-out rounded-md bg-primary-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        >
          Edit
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const userDetails = ref({ 
  fastname:'',
  lastName:'',
  mobileNo:'',
  email:'',
  addresses:[]
});
const isLoading = ref(true); 

const fetchUserDetails = async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    const response = await axios.get('https://api.8orbit.shop/api/v1/userDetails', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    userDetails.value = response.data;
  } catch (error) {
    console.error('Error fetching user details:', error.message);
  } finally {
    isLoading.value = false; 
  }
};

onMounted(() => {
  fetchUserDetails();
});
</script>
