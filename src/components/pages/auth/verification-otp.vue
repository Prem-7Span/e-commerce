<template>
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
          class="px-3 py-2 text-center border border-gray-300 rounded w-15 md:w-16 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          @input="handleInput(index)"
          :ref="`otpBox${index}`"
        />
      </div>
      <button
        class="block mt-4 text-sm text-gray-400 hover:underline"
        @click="resendOTP"
      >
        Resend OTP
      </button>
      <button
        class="w-full px-3 py-2 mt-6 font-bold text-white rounded-md bg-primary-100 hover:bg-primary-100 focus:outline-none focus:ring-1 focus:bg-primary-100"
        @click="submitForm"
      >
        Continue
      </button>
      <p class="mt-4 text-sm text-red-500">{{ errorMessage }}</p>
      <p class="mt-4 text-sm text-green-500">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script>
import authentication from "/src/components/config.js";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { getAuth } from "firebase/auth";
import axios from "axios"; // Import axios for making HTTP requests

export default {
  data() {
    return {
      verificationOtp: ["", "", "", "", "", ""],
      errorMessage: "",
      successMessage: "",
      confirmationResult: this.$route.query.obj,
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
    async submitForm() {
      const otp = this.verificationOtp.join("");
      console.log("OTP::", otp);

      this.errorMessage = ""; // Reset error message

      if (!otp) {
        this.errorMessage = "OTP is required";
        return;
      }

      try {
        console.log(this.verificationOtp);
        const credential = PhoneAuthProvider.credential(
          this.confirmationResult,
          otp
        );

        await signInWithCredential(authentication, credential) // Assuming firebase is imported elsewhere
          .then((res) => {
            console.log(res);
            this.successMessage = "Verification successful!";

            // Send mobile number to backend API
            // this.sendMobileNumber(res.user.phoneNumber);
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
      }
    },
    resendOTP() {
      console.log("Resending OTP...");
      // Add logic to resend OTP if needed
    },
  },
  mounted() {
    this.$refs.otpBox0[0].focus();
  },
};
</script>
