<template>
  <div
    class="flex items-center justify-center min-h-screen px-2 py-12 bg-white md:px-5"
  >
    <div
      class="w-full px-8 py-6 text-center bg-white rounded-lg shadow-md md:text-left md:max-w-md"
    >
      <div class="text-2xl animate_animated animate_fadeIn">Sign In</div>

      <div class="flex flex-col mt-5 space-y-2">
        <input
          v-model="phoneNumber"
          type="text"
          maxlength="12"
          placeholder="Mobile Number"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />

        <div class="text-sm text-gray-500">
          <p class="mt-4">
            By continuing you agree to website’s Terms & Conditions and Privacy
            Policy
          </p>
        </div>
      </div>

      <button
        type="button"
        class="w-full px-4 py-2 mt-4 font-medium text-center text-white transition duration-200 ease-in-out rounded-md bg-primary-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        @click="submitForm"
      >
        Continue
      </button>
      <div id="recaptcha-container"></div>

      <div class="mt-6 text-sm text-center text-gray-500">
        Don’t have an account?

        <router-link to="/signup" class="bg-primary-100">Sign Up</router-link>
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
          console.log(
            "Form submitted successfully (client-side validation passed)"
          );
          if (!this.recaptchaVerifier) {
            console.log("Generating Captcha...");
            this.generateCaptcha();
          } else {
            console.log(
              "RecaptchaVerifier already created:",
              this.recaptchaVerifier
            );
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
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>
