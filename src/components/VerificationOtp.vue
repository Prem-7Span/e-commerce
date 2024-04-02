<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
      <h2 class="mb-8 text-3xl font-extrabold text-center text-gray-900">
        Enter OTP
      </h2>
      <form @submit.prevent="submitOTP">
        <div>
          <input
            v-model="otp"
            type="text"
            maxlength="6"
            placeholder="Enter OTP"
            class="w-full px-4 py-2 bg-gray-100 rounded-md"
          />
          <p class="mt-2 text-red-500">{{ errors.otp }}</p>
        </div>
        <div>
          <button
            type="submit"
            class="w-full py-2 font-semibold text-white bg-blue-500 rounded-md"
          >
            Verify OTP
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otp: "",
      errors: {},
    };
  },
  methods: {
    submitOTP() {
      if (!this.otp) {
        this.errors.otp = "Please enter OTP";
      } else if (!this.isValidOTP(this.otp)) {
        this.errors.otp = "Invalid OTP";
      } else {

        const isCorrectOTP = this.verifyOTP(this.otp);
        if (isCorrectOTP) {
          alert("Correct OTP entered!");
          
        } else {
          this.errors.otp = "Incorrect OTP entered";
        }
      }
    },
    isValidOTP(otp) {
     
      return /^[0-9]{6}$/.test(otp);
    },
    verifyOTP(otp) {
 
      const isCorrectOTP = this.verifyOTP(this.otp);
        if (isCorrectOTP) { 
      return otp === correctOTP;
        }
    },
  },
};
</script>
