<template>
  <div
    class="flex items-center justify-center px-4 py-12 bg-white h-full-screen-adjusted md:px-5"
  >
    <div
      class="container px-8 py-6 text-center bg-white rounded-lg shadow-md w-fit md:text-left md:max-w-md"
    >
      <div class="text-2xl animate_animated animate_fadeIn">Sign In</div>

      <div class="flex flex-col mt-2 space-y-2">
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

      <div class="flex py-3">
        <input
          v-model="termsAccepted"
          type="checkbox"
          id="terms"
          class="w-4 h-4 px-2 mt-1 text-end accent-indigo-500 focus:ring-2 focus:ring-indigo-500"
        />
        <label for="terms" class="mb-2 ml-2 text-sm text-gray-700">
          By continuing you agree to website's Terms & Conditions and Privacy
          Policy
        </label>
      </div>

      <button
        :disabled="!canSubmit"
        :class="{
          'bg-gray-300 cursor-not-allowed': !canSubmit,
          'bg-primary-100 hover:scale-105': canSubmit,
        }"
        type="button"
        class="w-full px-4 py-2 font-medium text-center text-white transition duration-200 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        @click="checkPhoneNumberAvailability"
      >
        Continue
      </button>
      <div id="recaptcha-container"></div>

      <div class="mt-6 text-sm text-center text-gray-500">
        Don’t have an account?
        <router-link :to="{ name: 'SignUp' }" class="text-primary-200"
          >Sign Up</router-link
        >
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
      phoneNumber: "",
      termsAccepted: false,
      errors: {
        phoneNumber: "",
      },
      recaptchaVerifier: null,
    };
  },
  computed: {
    canSubmit() {
      return !this.errors.phoneNumber && this.termsAccepted;
    },
  },
  methods: {
    validateField(field) {
      if (field === "phoneNumber") {
        if (!this.phoneNumber) {
          this.errors.phoneNumber = "Phone Number is required";
        } else if (!/^\d{10}$/.test(this.phoneNumber)) {
          this.errors.phoneNumber = "Correct Phone Number is required";
        } else {
          this.errors.phoneNumber = "";
        }
      }
    },
    generateCaptcha() {
      this.recaptchaVerifier = new RecaptchaVerifier(
        authentication,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // Handle recaptcha response
          },
        }
      );
    },
    async checkPhoneNumberAvailability() {
      this.validateField("phoneNumber");

      if (this.errors.phoneNumber) {
        return;
      }

      try {
        const response = await axios.post(
          "https://api.8orbit.shop/api/v1/login",
          { mobileNo: this.phoneNumber }
        );

        if (response.status === 200) {
          const token = response.data.userData.accessToken;
          localStorage.setItem("token", token);
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
      if (!this.recaptchaVerifier) {
        this.generateCaptcha();
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
html,
body {
  height: 100%;
  margin: 0;
}

.h-full-screen-adjusted {
  height: calc(100vh - 87px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
