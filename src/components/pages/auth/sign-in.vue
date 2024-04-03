<template>
  
    <div class="flex items-center justify-center min-h-screen bg-white py-12 px-2 md:px-5"  >
      <div class="px-8 py-6 bg-white rounded-lg shadow-md text-center md:text-left md:max-w-md w-full">
      <div class="text-2xl animate_animated animate_fadeIn">Sign In</div>

     
      <div class="flex flex-col space-y-2 mt-5">
        <input
          v-model="phoneNumber"
          type="text"
          maxlength="12"
          placeholder="Mobile Number"
          class="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500">
          
      
          <div class=" text-sm text-gray-500">
            <p class="mt-4">By continuing you agree to website’s Terms & Conditions and Privacy Policy</p>
          </div>
      </div>

      <button
        type="button"
        class="w-full mt-4 rounded-md bg-primary-100 py-2 px-4 text-center text-white font-medium transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        @click="submitForm"
      >
        Continue
      </button>
      <div id="recaptcha-container"></div>

      <div class="text-center text-sm text-gray-500 mt-6">
        Don’t have an account?
     
        <router-link to="/signup" class="text-primary-200">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import authentication from "/src/components/config.js"; // Assuming a Firebase authentication config

export default {
  data() {
    return {
     
      phoneNumber: "",
      
      errors: {},
    };
  },
  methods: {
    generateCaptcha() {
      console.log("Entering generateCaptcha method");
      this.recaptchaVerifier = new RecaptchaVerifier(
        authentication,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("Recaptcha response:", response);
          },
        }
      );
    },
    submitForm() {
      switch (true) {
        
        case !this.phoneNumber:
          this.errors.phoneNumber = "Phone Number is required";
          break;
        default:
          console.log("Form submitted successfully (client-side validation passed)");
          if (!this.recaptchaVerifier) {
            console.log("Generating Captcha...");
            this.generateCaptcha();
          } else {
            console.log("RecaptchaVerifier already created:", this.recaptchaVerifier);
          }
          this.verifyPhoneNumber();
      }
    },
    async verifyPhoneNumber() {
      try {
        const phoneNumberVerification = await signInWithPhoneNumber(
          authentication,
          `+91${this.phoneNumber}`,
          this.recaptchaVerifier
        );
        console.log("Phone number verification successful:", phoneNumberVerification);
        this.$router.push({
          name: "VerificationOtp", // Assuming a route for verification
        });
      } catch (error) {
        console.error("Error during phone number verification:", error);
        // Handle the error appropriately, e.g., display an error message to the user
      }
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>