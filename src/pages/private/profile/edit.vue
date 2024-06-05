<template>
  <div class="flex flex-col items-center justify-center min-h-screen sign-up-page">
    <div class="w-full max-w-md px-8 py-6 space-y-3 text-center bg-white rounded-lg shadow-md md:text-left md:max-w-md">
      <div class="text-2xl animate__animated animate__fadeIn">Profile details</div>
      <div class="flex flex-col space-y-2">
        <div class="animate__animated animate__fadeIn">First Name</div>
        <input
          v-model="userDetails.firstName"
          type="text"
          placeholder="First Name"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <div class="animate__animated animate__fadeIn">Last Name</div>
        <input
          v-model="userDetails.lastName"
          type="text"
          placeholder="Last Name"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <div class="animate__animated animate__fadeIn">Mobile number</div>
        <input
          v-model="userDetails.mobileNo"
          type="text"
          placeholder="Mobile number"
          readonly
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out bg-gray-200 border border-gray-300 rounded-md outline-none appearance-none cursor-not-allowed"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <div class="animate__animated animate__fadeIn">Email Id</div>
        <input
          v-model="userDetails.email"
          type="text"
          placeholder="Email Id"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
      </div>
      <!-- <div class="flex flex-col space-y-2">
        <div class="animate__animated animate__fadeIn">Address 1</div>
        <textarea
          v-model="userDetails.addresses[0]"
          placeholder="Address"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        ></textarea>
      </div> -->

      <button
        type="button"
        @click="saveChanges"
        class="w-full px-4 py-2 mt-4 font-medium text-center text-white transition duration-200 ease-in-out rounded-md bg-primary-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const userDetails = ref({
  firstName: "",
  lastName: "",
  mobileNo: "",
  email: "",
  addresses: [],
});
const isLoading = ref(true);

const save = async () => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage

    const response = await axios.get(
      "https://api.8orbit.shop/api/v1/userDetails",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    userDetails.value = response.data;
  } catch (error) {
    console.error("Error fetching user details:", error.message);
  } finally {
    isLoading.value = false;
  }
};

const saveChanges = async () => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage

    const response = await axios.put(
      "https://api.8orbit.shop/api/v1/updateUser",
      userDetails.value,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    userDetails.value = response.data;
    router.push({ name: 'profile' }); // Navigate to the profile route after successful update
  } catch (error) {
    console.error("Error updating user details:", error.message);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  save();
});
</script>
