import { createRouter, createWebHashHistory } from "vue-router"; // Import createRouter and createWebHashHistory from vue-router
import SignUp from "@/pages/auth/sign-up.vue";
import SignIn from "@/pages/auth/sign-in.vue";
import VerificationOtp from "@/pages/auth/verification-otp.vue"; // Make sure to include the correct file extension (.vue)
import Auth from "@/layouts/auth.vue";
import HomePage from "@/pages/public/home-page/index.vue";
import ProductDetail from "@/pages/public/products/products-details.vue";
import ProductList from "@/pages/public/products/products-list.vue";
import Default from "@/layouts/default.vue";
// import Checkout from "../pages/public/product-checkout/index.vue";
// import address from "../components/address/index.vue";
const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        name: "home",
        path: "",
        component: HomePage,
      },
      {
        name: "products",
        path: "",
        redirect: { name: "list" },
        children: [
          {
            name: "list",
            path: "/products",
            component: ProductList,
          },
          {
            name: "details",
            path: "/products/:slug",
            component: ProductDetail,
          },
        ],
      },

      {
        name: "auth",
        path: "auth",
        component: Auth,
        children: [
          {
            name: "SignIn",
            path: "sign-in",
            component: SignIn,
          },

          {
            name: "SignUp",
            path: "sign-up",
            component: SignUp,
          },

          {
            name: "VerificationOtp",
            path: "verification-otp",
            component: VerificationOtp,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
