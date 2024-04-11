import { createRouter, createWebHashHistory } from "vue-router"; // Import createRouter and createWebHashHistory from vue-router
import SignUp from "./components/pages/auth/sign-up.vue";
import SignIn from "./components/pages/auth/sign-in.vue";
import VerificationOtp from "./components/pages/auth/verification-otp.vue"; // Make sure to include the correct file extension (.vue)
import Auth from "./components/layouts/auth.vue";

const routes = [
  {
    path: "/",
    component: Auth,
    children: [
      {
        name: "signIn",
        path: "",
        component: SignIn,
      },
      {
        name: "signUp",
        path: "signup",
        component: SignUp,
      },
      {
        name: "VerificationOtp",
        path: "VerificationOtp",
        component: VerificationOtp,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
