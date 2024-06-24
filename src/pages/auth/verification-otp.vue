<template>
  <div class="main">
    <div class="flex items-center justify-center min-h-screen bg-white">
      <div
        class="w-full px-8 py-6 text-center bg-white rounded-lg shadow-md md:text-left md:max-w-md"
      >
        <h3 class="text-xl font-semibold text-gray-700">OTP Verification</h3>
        <p class="mt-6 text-sm text-gray-600">
          Please enter OTP here to continue
        </p>
        <div class="flex justify-center gap-2 mt-5">
          <input
            v-for="(input, index) in 6"
            :key="index"
            v-model="verificationOtp[index]"
            type="text"
            maxlength="1"
            class="w-8 text-center border border-gray-300 rounded md:px-3 md:py-2 md:w-16 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            @input="handleInput(index)"
            @keydown="handleKeydown($event, index)"
            :ref="`otpBox${index}`"
          />
        </div>
        <button
          class="w-full py-2 mt-6 font-bold text-white rounded-md md:w-full md:px-3 bg-primary-100 hover:bg-primary-100 focus:outline-none focus:ring-1 focus:bg-primary-100"
          @click="submitForm"
          :disabled="loading"
        >
          <span v-if="!loading">Continue</span>
          <div v-else class="flex items-center justify-center">
            <div
              class="w-6 h-6 border-4 border-gray-300 rounded-full animate-spin border-t-blue-800"
            ></div>
          </div>
        </button>
        <p class="mt-4 text-sm text-red-500">{{ errorMessage }}</p>
        <p class="mt-4 text-sm text-green-500">{{ successMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { getAuth } from "firebase/auth";
import axios from "axios"; // Import axios for making HTTP requests
import { useToast } from "vue-toastification";
import authentication from "@/plugins/firebase.js";
import { useUserStore } from "@/store/user";
import { useCartStore } from "@/store/cart.js";

export default {
  setup() {
    const cartStore = useCartStore();
    const toast = useToast();
    const userStore = useUserStore();
    return { toast, userStore, cartStore };
  },

  data() {
    return {
      verificationOtp: ["", "", "", "", "", ""],
      errorMessage: "",
      successMessage: "",
      confirmationResult: this.$route.query.obj,
      loading: false, // Loader visibility state
    };
  },
  methods: {
    handleInput(index) {
      // Focus on the next input if current one is filled
      if (this.verificationOtp[index].length === 1 && index < 5) {
        this.$refs[`otpBox${index + 1}`][0].focus();
      }

      // Limit input to numbers only
      this.verificationOtp[index] = this.verificationOtp[index].replace(
        /\D/g,
        ""
      );
    },
    handleKeydown(event, index) {
      if (event.key === "Backspace" && this.verificationOtp[index] === "") {
        if (index > 0) {
          this.$refs[`otpBox${index - 1}`][0].focus();
        }
      }
    },
    async submitForm() {
      const otp = this.verificationOtp.join("");
      this.errorMessage = ""; // Reset

      if (!otp) {
        this.errorMessage = "OTP is required";
        return;
      }

      this.loading = true; // Show loader

      try {
        const credential = PhoneAuthProvider.credential(
          this.confirmationResult,
          otp
        );

        await signInWithCredential(authentication, credential)
          .then((res) => {
            this.userStore.setToken(res.user.accessToken);
            const userData = localStorage.getItem("userRole");

            // Check if the roleName is "System Admin" and navigate accordingly
            if (userData === "System Admin") {
              this.$router.push({ name: "analytics" });
            } else {
              this.$router.push({ name: "home" });
            }
            this.fetchCartItems();
          })
          .catch((error) => {
            if (error.code === "auth/invalid-verification-code") {
              console.error("Invalid OTP:", error);
              this.errorMessage = "Invalid OTP. Please try again.";
            } else {
              console.error("Firebase verification error:", error);
              this.errorMessage = "An error occurred. Please try again.";
            }
          });
      } catch (error) {
        console.error("Unexpected error:", error);
        this.errorMessage = "An error occurred. Please try again.";
      } finally {
        this.loading = false; // Hide loader
      }
    },
    async fetchCartItems() {
      await this.cartStore.fetchCart();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.otpBox0[0].focus();
    });
  },
};
</script>
