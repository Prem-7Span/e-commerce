<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen px-4 py-12 sign-up-page h-full-screen-adjusted"
  >
    <div
      class="w-full max-w-md px-8 py-6 space-y-5 text-center bg-white rounded-lg shadow-md md:text-left md:max-w-md"
    >
      <div class="text-2xl animate_animated animate_fadeIn">Sign Up</div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="firstname"
          type="text"
          placeholder="First Name"
          @input="validateField('firstname')"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.firstname }}</p>
      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="lastname"
          type="text"
          placeholder="Last Name"
          @input="validateField('lastname')"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.lastname }}</p>
      </div>

      <div class="flex flex-col space-y-2">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          @input="validateField('email')"
          class="px-3 py-2 text-gray-700 transition duration-200 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700 hover:border-indigo-500"
        />
        <p class="mt-2 text-primary-200">{{ errors.email }}</p>
      </div>

      <div class="flex flex-col space-y-2">
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

      <div class="flex space-x-2">
        <input
          v-model="termsAccepted"
          type="checkbox"
          id="terms"
          class="w-4 h-4 mt-1 accent-indigo-500 focus:ring-indigo-500"
        />
        <label for="terms" class="text-sm text-gray-700">
          By continuing you agree to the website's Terms & Conditions and
          Privacy Policy
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
        @click="submitForm"
      >
        Continue
      </button>

      <div class="text-sm text-center text-gray-500">
        Already have an account?
        <router-link
          :to="{ name: 'SignIn' }"
          class="text-primary-200 hover:text-primary-100"
        >
          Sign in
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      errors: {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
      },
      termsAccepted: false,
    };
  },
  computed: {
    canSubmit() {
      return (
        this.firstname &&
        this.lastname &&
        this.email &&
        this.phoneNumber &&
        this.termsAccepted &&
        !this.errors.firstname &&
        !this.errors.lastname &&
        !this.errors.email &&
        !this.errors.phoneNumber
      );
    },
  },
  methods: {
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    validateField(field) {
      switch (field) {
        case "firstname":
          this.errors.firstname = this.firstname
            ? ""
            : "First Name is required";
          break;
        case "lastname":
          this.errors.lastname = this.lastname ? "" : "Last Name is required";
          break;
        case "email":
          if (!this.email) {
            this.errors.email = "Email is required";
          } else if (!this.isValidEmail(this.email)) {
            this.errors.email = "Invalid email address";
          } else {
            this.errors.email = "";
          }
          break;
        case "phoneNumber":
          this.errors.phoneNumber = this.phoneNumber
            ? ""
            : "Phone Number is required";
          break;
      }
    },
    async submitForm() {
      this.validateField("firstname");
      this.validateField("lastname");
      this.validateField("email");
      this.validateField("phoneNumber");

      if (this.canSubmit) {
        this.registerUser();
      }
    },
    async registerUser() {
      try {
        const response = await axios.post(
          "https://api.8orbit.shop/api/v1/register",
          {
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            mobileNo: this.phoneNumber,
          }
        );

        this.toast.success("Signup successful");
        this.$router.push({ name: "SignIn" });
      } catch (error) {
        console.error("Error during signup:", error);
        this.errors.phoneNumber = "Phone number already exists, please login!";
        this.toast.error("User already exists, please login");
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
