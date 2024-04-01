<template>
  <div class="bg-black min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
      <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Verification</h2>
      <div class="otp-input flex justify-center items-center mb-4">
        <input
          v-for="n in 6"
          :key="n"
          ref="otpBox{{n}}"
          type="text"
          maxlength="1"
          class="otp-box text-center bg-gray-100 rounded-md m-2 w-12 h-12 text-2xl border border-gray-300"
          @input="handleInput(n)"
          autofocus
        />
        <div class="error text-red-500 text-xs mt-2" v-if="errors.VerificationOtp">
          {{ errors.VerificationOtp }}
        </div>
      </div>
      <form @submit.prevent="submitForm">
        <div class="space-y-4">
          <div>
            <input v-model="VerificationOtp" type="hidden" name="otp">
          </div>
          <div>
            <button type="submit" v-on:click="submitForm()" class="w-full bg-blue-500 text-white font-semibold rounded-md py-2">
              Verify
            </button>
          </div>
        </div>
      </form>
      <div v-if="successMessage" class="text-green-500 mt-4 text-center">{{ successMessage }}</div>
      <div v-if="errorMessage" class="text-red-500 mt-4 text-center">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      VerificationOtp: '',
      errors: {},
      successMessage: '',
      errorMessage: '',
      confirmationResult: null, // Placeholder for Firebase confirmation result
    };
  },
  methods: {
    handleInput(index) {
      // Focus on the next input if current one is filled
      if (this.VerificationOtp.length === index) {
        this.$refs[`otpBox${index + 1}`].focus();
      }

      // Limit input to numbers only
      this.VerificationOtp = this.VerificationOtp.replace(/\D/g, '');
    },
    async submitForm() {
      this.errors = {};
      this.errorMessage = ''; // Reset error message

      if (!this.VerificationOtp) {
        this.errors.VerificationOtp = 'OTP is required';
        return;
      }

      // Replace this with logic to get the confirmationResult from your signup flow
      // (assuming you have a confirmationResult object after sending the OTP)
      if (!this.confirmationResult) {
        console.error('Missing confirmationResult for OTP verification');
        this.errorMessage = 'An error occurred. Please try again.';
        return;
      }

      const isVerified = await verifyOTP(this.confirmationResult, this.VerificationOtp);

      if (isVerified) {
        this.successMessage = 'Verification successful!';
        // Redirect to the desired page after a brief delay for feedback
        setTimeout(() => {
          // Your redirection logic here (e.g., using router.push('/dashboard'))
        }, 1500);
      } else {
        this.errorMessage = 'Invalid OTP. Please try again.';
      }
    },
  },
  mounted() {
    this.$refs.otpBox1.focus();
  },
};
</script>
