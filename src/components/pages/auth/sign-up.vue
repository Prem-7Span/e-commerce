<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen px-4 py-12 sign-up-page"
  >
    <div
      class="w-full max-w-md px-8 py-6 space-y-5 text-center bg-white rounded-lg shadow-md md:text-left md:max-w-md"
    >
      <div class="text-2xl animate_animated animate_fadeIn">Sign Up</div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="firstname"
          type="text"
          placeholder="First Name"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.firstname }}</p>
      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="lastname"
          type="text"
          placeholder="Last Name"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.lastname }}</p>
      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.email }}</p>
      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="phoneNumber"
          type="text"
          maxlength="12"
          placeholder="Mobile Number"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.phoneNumber }}</p>
      </div>

      <div class="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          class="w-4 h-4 accent-indigo-500 focus:ring-2 focus:ring-indigo-500"
        />
        <label for="terms" class="text-sm text-gray-700">
          By continuing you agree to website's Terms & Conditions and Privacy
          Policy
        </label>
      </div>

      <button
        type="button"
        class="w-full px-4 py-2 font-medium text-center text-white transition duration-200 ease-in-out rounded-md bg-primary-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        @click="submitForm"
      >
        Continue
      </button>
      <div id="recaptcha-container"></div>

      <div class="text-sm text-center text-gray-500">
        Already have an account?
        <a href="#" class="text-primary-200 hover:text-primary-100">Sign in</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      errors: {},
    };
  },
  methods: {
    async submitForm() {
      // Clear any previous errors
      this.errors = {};

      // Validate form fields
      if (!this.firstname) {
        this.errors.firstname = "First Name is required";
      }
      if (!this.lastname) {
        this.errors.lastname = "Last Name is required";
      }
      if (!this.email) {
        this.errors.email = "Email is required";
      } else if (!this.isValidEmail(this.email)) {
        this.errors.email = "Invalid email address";
      }
      if (!this.phoneNumber) {
        this.errors.phoneNumber = "Phone Number is required";
      }

      // If there are errors, stop further processing
      if (Object.keys(this.errors).length > 0) {
        return;
      }

      // If all validations pass, proceed with API call
      try {
        const response = await axios.post(
          "http://13.233.85.16/api/v1/register",
          {
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            mobileNo: this.phoneNumber,
          }
        );

        // Handle response, e.g., show success message, redirect user, etc.
        console.log("Signup successful:", response);
        this.toast.success("Sign-up successful");
        this.$router.push({ name: "VerificationOtp" });
      } catch (error) {
        this.errors.phoneNumber = "phone number already exist, please login!";
        this.toast.error("User already exist, please login");
        console.error("Error checking phone number availability:", error);
        // Handle error appropriately, e.g., display an error message to the user
      }
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>
