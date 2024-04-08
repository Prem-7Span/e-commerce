<template>
  <div class="sign-up-page flex flex-col items-center justify-center min-h-screen py-12 px-4">
    <div class="w-full max-w-md space-y-5">
      <div class="text-2xl animate__animated animate__fadeIn">Sign Up</div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="firstname"
          type="text"
          placeholder="First Name"
          class="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-red-500">{{ errors.firstname }}</p>
      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="lastname"
          type="text"
          placeholder="Last Name"
          class="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-red-500">{{ errors.lastname }}</p>
      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500">
          <p class="mt-2 text-red-500">{{ errors.email }}</p>
        

      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="phoneNumber"
          type="text"
          maxlength="12"
          placeholder="Mobile Number"
          class="appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500">
          <p class="mt-2 text-red-500">{{ errors.phoneNumber }}</p>
      
      </div>

      <div class="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          class="w-4 h-4 accent-indigo-500 focus:ring-2 focus:ring-indigo-500"
        />
        <label for="terms" class="text-sm text-gray-700">
          By continuing you agree to website's Terms & Conditions and Privacy Policy
        </label>
      </div>

      <button
        type="button"
        class="w-full rounded-md bg-indigo-500 py-2 px-4 text-center text-white font-medium transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        @click="submitForm"
      >
        Continue
      </button>

      <div class="text-center text-sm text-gray-500">
        Already have an account?
        <a href="#" class="text-indigo-500 hover:text-indigo-700">Sign in</a>
      </div>
    </div>
  </div>
</template>


<script>
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import authentication from "./config"; // Assuming a Firebase authentication config

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      recaptchaVerifier: undefined,
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
        case !this.firstname:
          this.errors.firstname = "First Name is required";
         
        case !this.lastname:
          this.errors.lastname = "Last Name is required";
        
        case !this.email:
          this.errors.email = "Email is required";
        
        case !this.isValidEmail(this.email):
          this.errors.email = "Invalid email address";
        
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