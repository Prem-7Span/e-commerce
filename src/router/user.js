import SignUp from "@/pages/auth/sign-up.vue";
import SignIn from "@/pages/auth/sign-in.vue";
import VerificationOtp from "@/pages/auth/verification-otp.vue"; // Make sure to include the correct file extension (.vue)
import Auth from "@/layouts/auth.vue";
import HomePage from "@/pages/public/home-page/index.vue";
import ProductDetail from "@/pages/public/products/products-details.vue";
import ProductList from "@/pages/public/products/products-list.vue";
import paymentSuccessful from "../components/payment-gateway/payment-successful.vue";
import paymentError from "../components/payment-gateway/payment-error.vue";
import Default from "@/layouts/default.vue";
import admin from "@/layouts/admin.vue";
import vieworder from "../pages/private/view-orders/index.vue";
import CheckOut from "../pages/private/product-checkout/index.vue";
import wishList from "@/pages/private/wish-list/index.vue";
import edit from "@/pages/private/profile/edit.vue";
import profile from "../pages/private/profile/index.vue";

const routes = [
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
    name: "payment-error",
    path: "/payment-failed",
    component: paymentError,
  },
  {
    name: "payment-successful",
    path: "/payment-successful",
    component: paymentSuccessful,
  },
  {
    name: "vieworder",
    path: "vieworder",
    component: vieworder,
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
];

export default routes;
