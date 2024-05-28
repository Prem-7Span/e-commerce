import { createRouter, createWebHistory } from "vue-router"; // Import createRouter and createWebHashHistory from vue-router
import SignUp from "@/pages/auth/sign-up.vue";
import SignIn from "@/pages/auth/sign-in.vue";
import VerificationOtp from "@/pages/auth/verification-otp.vue"; // Make sure to include the correct file extension (.vue)
import Auth from "@/layouts/auth.vue";
import HomePage from "@/pages/public/home-page/index.vue";
import ProductDetail from "@/pages/public/products/products-details.vue";
import ProductList from "@/pages/public/products/products-list.vue";
import Default from "@/layouts/default.vue";
import CheckOut from "../pages/public/product-checkout/index.vue";
import wishList from "@/pages/public/wish-list/index.vue";
import edit from "@/pages/private/edit.vue";
import profile from "../pages/private/profile.vue";
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
        name: "check-out",
        path: "/checkout",
        component: CheckOut,
      },
      {
        name: "wish-list",
        path: "/wishlist",
        component: wishList,
      },
      {
        name: "auth",
        path: "/",
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
          {
            name: "editProfile",
            path: "edit",
            component: edit,
          },
          {
            name: "profile",
            path: "profile",
            component: profile,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.querySelector("body").scrollIntoView({ behavior: "smooth" });
  },
});

// Before each
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next({ name: "SignIn" });
    }
  } else {
    next();
  }
});

export default router;
