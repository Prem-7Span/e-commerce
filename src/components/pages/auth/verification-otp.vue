<template>
  <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="px-8 py-6 bg-white rounded-lg shadow-md text-center md:text-left md:max-w-md w-full">
      <h3 class="text-xl text-gray-700 font-semibold">OTP Verification</h3>
      <p class="mt-6 text-sm text-gray-600">
        Please enter OTP here to continue
      </p>
      <div class="flex flex-wrap justify-center mt-5">
        <input
          v-for="(input, index) in 6"
          :key="index"
          v-model="verificationOtp[index]"
          type="text"
          maxlength="1"
          class="w-12 md:w-16 mb-2 md:mb-0 border border-gray-300 rounded px-3 py-2 text-center"
          @input="handleInput(index)"
          :ref="`otpBox${index}`"
        />
      </div>
      <button
        class="mt-4 block text-sm text-gray-400 hover:underline"
        @click="resendOTP"
      >
        Resend OTP
      </button>
      <button
        class="mt-6 w-full px-3 py-2 bg-primary-100 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";

export default {
  props: {
    confirmationResult: {
      type: Object,
      required: true, // Ensure confirmationResult is received as a prop
    },
  },
  data() {
    return {
      verificationOtp: ["", "", "", "", "", ""],
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    handleInput(index) {
      // Focus on the next input if current one is filled
      if (this.verificationOtp[index].length === 1 && index < 5) {
        this.$refs[`otpBox${index + 1}`][0].focus();
      }

      // Limit input to numbers only
      this.verificationOtp[index] = this.verificationOtp[index].replace(/\D/g, "");
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
        const credential = PhoneAuthProvider.credential(
          this.confirmationResult,
          otp
        );

        await signInWithCredential(firebase.auth(), credential) // Assuming firebase is imported elsewhere
          .then((res) => {
            console.log(res);
            this.successMessage = "Verification successful!";
            // Redirect logic (consider using router or a dedicated function)
            setTimeout(() => {
              // Your redirection logic here (e.g., this.$router.push('/dashboard'))
            }, 1500);
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
      // Implement resend OTP logic here
      console.log("Resending OTP...");
    },
  },
  mounted() {
    this.$refs.otpBox0[0].focus();
  },
};
</script>
