<template>
    <div class="bg-black min-h-screen flex items-center justify-center">
      <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Verification</h2>
        <form @submit.prevent="submitForm">
          <div class="space-y-4">
           
            <div>
              <input v-model="Username" type="number" maxlength="10" placeholder="OTP" class="w-full rounded-md px-4 py-2 bg-gray-100 ">
              <p class="text-red-500 mt-2">{{ errors.VerificationOtp }}</p>
            </div>
           
            <div>
              <button type="submit" class="w-full  bg-blue-500  text-white font-semibold rounded-md py-2">Verification</button>
 
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
        if (!this.VerificationOtp) this.errors.VerificationOtp = 'Otp is required';
      
  
      },
     
    }
  };
  </script>
  