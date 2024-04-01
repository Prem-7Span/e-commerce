<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
      <h2 class="mb-8 text-3xl font-extrabold text-center text-gray-900">
        Sign up
      </h2>
      <form @submit.prevent="submitForm">
        <div class="space-y-4">
          <div class="flex flex-col sm:flex-row sm:space-x-8">
            <div>
              <input
                v-model="firstname"
                type="text"
                placeholder="First Name"
                class="w-full px-4 py-2 bg-gray-100 rounded-md sm:w-44"
              />
              <p class="mt-2 text-red-500">{{ errors.firstname }}</p>
            </div>
            <div>
              <input
                v-model="lastname"
                type="text"
                placeholder="Last Name"
                class="w-full px-4 py-2 bg-gray-100 rounded-md sm:w-44"
              />
              <p class="mt-2 text-red-500">{{ errors.lastname }}</p>
            </div>
          </div>
          <div>
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="w-full px-4 py-2 bg-gray-100 rounded-md focus:ring-purple-600"
            />
            <p class="mt-2 text-red-500">{{ errors.email }}</p>
          </div>
          <div>
            <input
              v-model="phoneNumber"
              type="text"
              maxlength="12"
              placeholder="Phone Number"
              class="w-full px-4 py-2 bg-gray-100 rounded-md"
            />
            <p class="mt-2 text-red-500">{{ errors.phoneNumber }}</p>
          </div>

          <div>
            <button
              type="submit"
              class="w-full py-2 font-semibold text-white bg-blue-500 rounded-md"
            >
              Sign up
            </button>
          </div>
          <div id="recaptcha-container"></div>
          <p class="flex justify-end text-blue-500">
            <router-link to="/signin">Sign In</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import authentication from "./config";

export default {
  data() {
    return {
      firstname: "jay",
      lastname: "bharadia",
      email: "jay.p.b@7span.com",
      phoneNumber: "8104515329",
      recaptchaVerifier: undefined,
      errors: {},
      confirmationResult: {},
    };
  },
  methods: {
    generateCaptcha() {
      console.log("enter in method");
      this.recaptchaVerifier = new RecaptchaVerifier(
        authentication,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("response", response);
          },
        }
      );
    },

    async submitForm() {
      if (!this.recaptchaVerifier) {
        console.log("enter in recaptcha");
        this.generateCaptcha();
      }
      console.log("recaptchaVerifier", this.recaptchaVerifier);
      try {
        signInWithPhoneNumber(
          authentication,
          `+91${this.phoneNumber}`,
          this.recaptchaVerifier
        )
          .then((confirmationResult) => {
            this.confirmationResult = confirmationResult;
            console.log("captcha is", this.confirmationResult);
            this.$router.push({
              name: "VerificationOtp",
            });

            // this.mobileNumber = data.mobile;
            // this.$vayu.modal.open("forgot-modal");
            console.log("success", confirmationResult);
          })
          .catch((error) => {
            console.log("error in catch promise", error);
          });
        this.recaptchaVerifier.render().then(function (widgetId) {
          grecaptcha.reset(widgetId);
        });
      } catch (err) {
        console.log("error in catch blobk", err);
      }

      this.errors = {};
      if (!this.firstname) this.errors.firstname = "First Name is required";
      if (!this.lastname) this.errors.lastname = "Last Name is required";
      if (!this.email) this.errors.email = "Email is required";
      else if (!this.isValidEmail(this.email))
        this.errors.email = "Invalid email address";
      if (!this.phoneNumber)
        this.errors.phoneNumber = "Phone Number is required";

      if (Object.keys(this.errors).length === 0)
        console.log("Form submitted successfully");
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>
