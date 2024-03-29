<template>
    <div class="bg-black min-h-screen flex items-center justify-center">
      <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Sign In</h2>
        <form @submit.prevent="submitForm">
          <div class="space-y-4">
           
            <div>
              <input v-model="Username" type="number" maxlength="10" placeholder="Phone No" class="w-full rounded-md px-4 py-2 bg-gray-100 ">
              <p class="text-red-500 mt-2">{{ errors.MobileNo }}</p>
            </div>
           
            <div>
              <button type="submit" v-on:click="pop()" class="w-full  bg-blue-500  text-white font-semibold rounded-md py-2">Sign In</button>
              
              <p class="justify-end flex	text-blue-500"><router-link to="/">Create a new account</router-link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        MobileNo: '',
        errors: {}
      };
    },
    methods: {
      submitForm() {
        this.errors = {};
        if (!this.MobileNo) this.errors.MobileNo = 'Mobile No is required';
  
      },
      pop() {
      alert("login successful");
    }
    }
  };
  </script>
  