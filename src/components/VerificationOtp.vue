<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
      <h2 class="mb-8 text-3xl font-extrabold text-center text-gray-900">
        Verification
      </h2>
      <form @submit.prevent="submitForm">
        <div class="space-y-4">
          <div>
            <input
              v-model="otp"
              type="number"
              maxlength="6"
              placeholder="OTP"
              class="w-full px-4 py-2 bg-gray-100 rounded-md"
            />
            <p class="mt-2 text-red-500">{{ errors.VerificationOtp }}</p>
          </div>

          <div>
            <button
              type="submit"
              class="w-full py-2 font-semibold text-white bg-blue-500 rounded-md"
            >
              Verification
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import authentication from "./config";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
export default {
  data() {
    return {
      otp: "",
      errors: {},
    };
  },
  mounted() {
    console.log(this.$route.query.data);
  },
  methods: {
    submitForm() {
      try {
        let credential = PhoneAuthProvider.credential(
          confirmationResult?.verificationId,
          this.otp
        );
        signInWithCredential(authentication, credential)
          .then((res) => {
            // setIsResetDialogOpen(true);
            console.log(res);
          })
          .catch((error) => {
            if (error.code == "auth/invalid-verification-code") {
              console.log(error);
            }
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
