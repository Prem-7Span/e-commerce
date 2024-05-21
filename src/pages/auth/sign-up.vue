<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-4 py-12 sign-up-page">
    <div class="w-full max-w-md px-8 py-6 space-y-5 text-center bg-white rounded-lg shadow-md md:text-left md:max-w-md">
      <div class="text-2xl animate_animated animate_fadeIn">Sign Up</div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="firstname"
          type="text"
          placeholder="First Name"
          @input="validateField('firstname')"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.firstname }}</p>
      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="lastname"
          type="text"
          placeholder="Last Name"
          @input="validateField('lastname')"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.lastname }}</p>
      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="email"
          type="email"
          placeholder="email"
          @input="validateField('email')"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.email }}</p>
      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="phoneNumber"
          type="text"
          maxlength="10"
          placeholder="Mobile Number"
          @input="validateField('phoneNumber')"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.phoneNumber }}</p>
      </div>

      <div class="flex space-x-2">
        <input
          v-model="termsAccepted"
          type="checkbox"
          id="terms"
          class="w-4 h-4 mt-1 accent-indigo-500 focus:ring-2 focus:ring-indigo-500"
        />
        <label for="terms" class="text-sm text-gray-700">
          By continuing you agree to website's Terms & Conditions and Privacy Policy
        </label>
      </div>

      <button
        :disabled="!termsAccepted"
        type="button"
        class="w-full px-4 py-2 font-medium text-center text-white transition duration-200 ease-in-out rounded-md bg-primary-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        @click="submitForm"
      >
        Continue
      </button>
      <div id="recaptcha-container"></div>

      <div class="text-sm text-center text-gray-500">
        Already have an account?
        <router-link :to="{ name: 'SignIn' }" class="text-primary-200 hover:text-primary-100">
          Sign in
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import authentication from "@/plugins/firebase.js"; // Assuming a Firebase authentication config
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
      recaptchaVerifier: undefined,
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: ''
      },
      isUserValid: false,
      termsAccepted: false,
    };
  },
  methods: {
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    validateField(field) {
      switch (field) {
        case 'firstname':
          this.errors.firstname = this.firstname ? '' : 'First Name is required';
          break;
        case 'lastname':
          this.errors.lastname = this.lastname ? '' : 'Last Name is required';
          break;
        case 'email':
          if (!this.email) {
            this.errors.email = 'Email is required';
          } else if (!this.isValidEmail(this.email)) {
            this.errors.email = 'Invalid email address';
          } else {
            this.errors.email = '';
          }
          break;
        case 'phoneNumber':
          this.errors.phoneNumber = this.phoneNumber ? '' : 'Phone Number is required';
          break;
      }
    },
    submitForm() {
      // Validate all fields before submitting
      this.validateField('firstname');
      this.validateField('lastname');
      this.validateField('email');
      this.validateField('phoneNumber');

      // Check if there are any errors
      if (!this.errors.firstname && !this.errors.lastname && !this.errors.email && !this.errors.phoneNumber) {
        console.log("Form submitted successfully (client-side validation passed)");
        this.registerUser();
      }
    },
    async verifyPhoneNumber() {
      try {
        const phoneNumberVerification = await signInWithPhoneNumber(
          authentication,
        `+91${this.phoneNumber}`,
          this.recaptchaVerifier
        );
        console.log(
          "Phone number verification successful:",
          phoneNumberVerification
        );
        this.$router.push({
          name: "VerificationOtp", // Assuming a route for verification
          query: { obj: phoneNumberVerification.verificationId },
        });
      } catch (error) {
        console.error("Error during phone number verification:", error);
        // Handle the error appropriately, e.g., display an error message to the user
      }
    },
    async registerUser() {
      try {
        const response = await axios.post(
          "https://api.8orbit.shop/api/v1/register",
          {
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            mobileNo: this.phoneNumber,
          }
        );

        this.isUserValid = true;
        // Handle response, e.g., show success message, redirect user, etc.
        console.log("Signup successful:", response.data);
        if (!this.recaptchaVerifier && this.isUserValid) {
          console.log("Generating Captcha...");
          this.generateCaptcha();
        } else {
          console.log(
            "RecaptchaVerifier already created:",
            this.recaptchaVerifier
          );
        }
        this.verifyPhoneNumber();
      } catch (error) {
        this.isUserValid = false;
        console.error("Error during signup:", error);
        // Handle the error appropriately, e.g., display an error message to the user
        this.errors.phoneNumber = "phone number already exist, please login!";
        this.toast.error("User already exist, please login");
        console.error("Error checking phone number availability:", error);
      }
    },
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
    }
  }
};
</script>