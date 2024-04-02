<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
      <h2 class="mb-8 text-3xl font-extrabold text-center text-gray-900">
        Verification
      </h2>
      <div class="flex items-center justify-center mb-4 otp-input">
        <input
          v-for="n in 6"
          :key="n"
          ref="otpBox{{n}}"
          type="text"
          maxlength="1"
          class="w-12 h-12 m-2 text-2xl text-center bg-gray-100 border border-gray-300 rounded-md otp-box"
          @input="handleInput(n)"
          autofocus
        />
        <div
          class="mt-2 text-xs text-red-500 error"
          v-if="errors.VerificationOtp"
        >
          {{ errors.VerificationOtp }}
        </div>
      </div>
      <form @submit.prevent="submitForm">
        <div class="space-y-4">
          <div>
            <input v-model="VerificationOtp" type="hidden" name="otp" />
          </div>
          <div>
            <button
              type="submit"
              v-on:click="submitForm()"
              class="w-full py-2 font-semibold text-white bg-blue-500 rounded-md"
            >
              Verify
            </button>
          </div>
        </div>
      </form>
      <div v-if="successMessage" class="mt-4 text-center text-green-500">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="mt-4 text-center text-red-500">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import authentication from "/src/components/config.js";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";

export default {
  data() {
    return {
      VerificationOtp: "",
      errors: {},
      successMessage: "",
      errorMessage: "",
      confirmationResult: this.$route.query.obj, // Placeholder for Firebase confirmation result
    };
  },
  methods: {
    handleInput(index) {
      // Focus on the next input if current one is filled
      if (this.VerificationOtp.length === index) {
        this.$refs[`otpBox${index + 1}`].focus();
      }

      // Limit input to numbers only
      this.VerificationOtp = this.VerificationOtp.replace(/\D/g, "");
    },
    async submitForm() {
      console.log("OTP::", this.VerificationOtp);
      try {
        let credential = PhoneAuthProvider.credential(
          this.confirmationResult,
          this.VerificationOtp
        );
        signInWithCredential(authentication, credential)
          .then((res) => {
            // setIsResetDialogOpen(true);
            console.log(res);
          })
          .catch((error) => {
            if (error.code == "auth/invalid-verification-code") {
              console.log("catch ====", error);
            }
          });
      } catch (error) {
        console.log("error ===", error);
      }

      this.errors = {};
      this.errorMessage = ""; // Reset error message

      if (!this.VerificationOtp) {
        this.errors.VerificationOtp = "OTP is required";
        return;
      }

      // Replace this with logic to get the confirmationResult from your signup flow
      // (assuming you have a confirmationResult object after sending the OTP)
      if (!this.confirmationResult) {
        console.error("Missing confirmationResult for OTP verification");
        this.errorMessage = "An error occurred. Please try again.";
        return;
      }

      const isVerified = await verifyOTP(
        this.confirmationResult,
        this.VerificationOtp
      );

      if (isVerified) {
        this.successMessage = "Verification successful!";
        // Redirect to the desired page after a brief delay for feedback
        setTimeout(() => {
          // Your redirection logic here (e.g., using router.push('/dashboard'))
        }, 1500);
      } else {
        this.errorMessage = "Invalid OTP. Please try again.";
      }
    },
  },
  mounted() {
    this.$refs.otpBox1.focus();
  },
};
</script>
