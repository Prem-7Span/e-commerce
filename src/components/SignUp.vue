<template>
    <div class="bg-black min-h-screen flex items-center justify-center">
      <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Sign up</h2>
        <form @submit.prevent="submitForm">
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row  sm:space-x-8 ">
              <div>
                <input v-model="firstname" type="text" placeholder="First Name" class="w-full sm:w-44 rounded-md px-4 py-2 bg-gray-100">
                <p class="text-red-500 mt-2">{{ errors.firstname }}</p>
              </div>
              <div>
                <input v-model="lastname" type="text" placeholder="Last Name" class="w-full sm:w-44 rounded-md px-4 py-2 bg-gray-100">
                <p class="text-red-500 mt-2">{{ errors.lastname }}</p>
              </div>
            </div>
            <div>
              <input v-model="email" type="email" placeholder="Email" class="w-full rounded-md px-4 py-2 bg-gray-100 focus:ring-purple-600">
              <p class="text-red-500 mt-2">{{ errors.email }}</p>
            </div>
            <div>
              <input v-model="password" type="text" maxlength="12" placeholder="Phone Number" class="w-full rounded-md px-4 py-2 bg-gray-100">
              <p class="text-red-500 mt-2">{{ errors.password }}</p>
            </div>
           
            <div>
              <button type="submit" class="w-full bg-blue-500 text-white font-semibold rounded-md py-2">Sign up</button>
            </div>
            <p class="justify-end flex 	text-blue-500"><router-link to="/signin">Login</router-link></p>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        
        errors: {}
      };
    },
    methods: {
      submitForm() {
        this.errors = {};
  
        if (!this.firstname) this.errors.firstname = 'First Name is required';
        if (!this.lastname) this.errors.lastname = 'Last Name is required';
        if (!this.email) this.errors.email = 'Email is required';
        else if (!this.isValidEmail(this.email)) this.errors.email = 'Invalid email address';
        if (!this.password) this.errors.password = 'Phone Number is required';

  
        if (Object.keys(this.errors).length === 0) console.log('Form submitted successfully');
      },
      isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
    }
  };
  </script>
  