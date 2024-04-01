<template>
  <div class="bg-black min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
      <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Verification</h2>
      <div class="otp-input flex justify-center items-center mb-4">
        <input v-for="n in 6" :key="n" type="text" maxlength="1" class="otp-box text-center bg-gray-100 rounded-md m-2 w-12 h-12 text-2xl border border-gray-300" @input="handleInput(n)" />
        <div class="error text-red-500 text-xs mt-2" v-if="errorMessage">{{ errorMessage }}</div>
      </div>
      <form @submit.prevent="submitForm">
        <div class="space-y-4">
          <div>
            <input v-model="otp" type="hidden">
          </div>
          <div>
            <button type="submit" class="w-full bg-blue-500 text-white font-semibold rounded-md py-2">Verification</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerificationForm',
  data() {
    return {
      otp: '',
      errorMessage: '',
      errors: {}
    };
  },
  methods: {
    handleInput(index) {
      const input = this.$refs[`otpBox${index}`];

      if (input.value.length > 1) {
        input.value = input.value.slice(0, 1);
      }

      if (input.value !== '' && index < 6) {
        this.$refs[`otpBox${index + 1}`].focus();
      } else if (input.value !== '' && index === 6) {
        this.submitOtp();
      }

      this.updateOtp();
    },
    updateOtp() {
      this.otp = '';
      for (let i = 1; i <= 6; i++) {
        this.otp += this.$refs[`otpBox${i}`].value;
      }
      this.validateOtp();
    },
    validateOtp() {
      if (this.otp.length !== 6 || !/^\d+$/.test(this.otp)) {
        this.errorMessage = 'Invalid OTP. Please enter 6 digits.';
      } else {
        this.errorMessage = '';
      }
    },
    submitOtp() {
      console.log('Submitted OTP:', this.otp);
    },
    submitForm() {
      this.errors = {};
      if (!this.otp) this.errorMessage = 'OTP is required';
      // Add any additional form validation logic here
    },
  },
};
</script>

<style scoped>
/* No specific styles needed */
</style>
