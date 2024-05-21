<template>
  <div
    class="flex items-center justify-center h-screen bg-white md:px-5"
  >
    <div
      class="container w-full px-8 py-6 text-center bg-white rounded-lg shadow-md md:text-left md:max-w-md"
    >
      <div class="text-2xl animate_animated animate_fadeIn">Sign In</div>

      <div class="flex flex-col mt-2 space-y-2">
        <input
          v-model="phoneNumber"
          type="text"  
          maxlength="10"
          placeholder="Mobile Number"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.phoneNumber }}</p>
      </div>

      <div class="flex">
        <input
          v-model="termsAccepted"
          type="checkbox"
          id="terms"
          class="w-4 h-4 mt-1 px-2 text-end accent-indigo-500 focus:ring-2 focus:ring-indigo-500"
        />
        <label for="terms" class="mb-2 ml-2 text-sm text-gray-700">
          By continuing you agree to website's Terms & Conditions and Privacy Policy
        </label>
      </div>

      <button
        :disabled="!termsAccepted"
        type="button"
        class="w-full px-4 py-2 font-medium text-center text-white transition duration-200 ease-in-out rounded-md bg-primary-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        @click="checkPhoneNumberAvailability"
      >
        Continue
      </button>
      <div id="recaptcha-container"></div>

      <div class="mt-6 text-sm text-center text-gray-500">
        Don’t have an account?
        <router-link :to="{ name: 'SignUp' }" class="text-primary-200">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import authentication from "@/plugins/firebase.js"; // Assuming a Firebase authentication config
import { useToast } from "vue-toastification";
import { RouterLink } from "vue-router";
import { useForm } from 'vee-validate';

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  data() {
    return {
      phoneNumber: '',
      termsAccepted: false,
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
    async checkPhoneNumberAvailability() {
      this.errors = {}; // Clear previous errors
      if (!this.phoneNumber) {
        this.errors.phoneNumber = "Phone Number is required";
        return;
      }
      if (this.phoneNumber.length !== 10) {
        this.errors.phoneNumber = "Phone Number must be exactly 10 digits";
        return;
      }
      if (!/^\d{10}$/.test(this.phoneNumber)) {
        this.errors.phoneNumber = "Phone Number must be numeric";
        return;
      }

      try {
        const response = await axios.post(
          "https://api.8orbit.shop/api/v1/login",
          { mobileNo: this.phoneNumber }
        );

        if (response.data.success) {
          this.errors.phoneNumber = undefined;
          console.log("Phone number is available:", this.phoneNumber);
          this.submitForm();
        } else {
          this.toast.error("Account not available, Please sign up");
          this.$router.push({ name: "SignUp" });
        }
      } catch (error) {
        this.toast.error("Account not available, please sign up");
        this.$router.push({ name: "SignUp" });
        console.error("Error checking phone number availability:", error);
      }
    },
    submitForm() {
      console.log("Form submitted successfully (client-side validation passed)");
      if (!this.recaptchaVerifier) {
        console.log("Generating Captcha...");
        this.generateCaptcha();
      } else {
        console.log("RecaptchaVerifier already created:", this.recaptchaVerifier);
      }
      this.verifyPhoneNumber();
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
          query: { obj: phoneNumberVerification.verificationId },
        });
      } catch (error) {
        console.error("Error during phone number verification:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
