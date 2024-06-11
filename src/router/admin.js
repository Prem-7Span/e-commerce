import adminSignIn from "@/pages/auth/sign-in.vue";
import adminVerificationOtp from "@/pages/auth/verification-otp.vue"; // Make sure to include the correct file extension (.vue)
import Analytics from "@/pages/private/dashboard/analytics.vue";
import orders from "../pages/private/dashboard/orders.vue";
import auth from "@/layouts/auth.vue";
import adminproducts from "../pages/private/dashboard/products.vue";
import customers from "../pages/private/dashboard/customers.vue";
import addproducts from "../pages/private/dashboard/add-products.vue";

const routes = [
  {
    name: "layout",
    path: "",
    component: auth,
    redirect: { name: "admin-sign-in" },
    children: [
      {
        name: "admin-sign-in",
        path: "sign-in",
        component: adminSignIn,
      },
      {
        name: "adminVerificationOtp",
        path: "verification-otp",
        component: adminVerificationOtp,
      },
    ],
  },
  {
    name: "analytics",
    path: "analytics",
    component: Analytics,
  },
  {
    name: "adminproducts",
    path: "adminproducts",
    component: adminproducts,
  },
  {
    name: "orders",
    path: "orders",
    component: orders,
  },
  {
    name: "customers",
    path: "customers",
    component: customers,
  },
  {
    name: "addprodcts",
    path: "addproducts",
    component: addproducts,
  },

  // {
  //   name: "adminSignIn",
  //   path: "sign-in",
  //   component: adminSignIn,
  // },

  // {
  //   name: "adminVerificationOtp",
  //   path: "verification-otp",
  //   component: adminVerificationOtp,
  // },
];

export default routes;

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//   scrollBehavior() {
//     document.querySelector("body").scrollIntoView({ behavior: "smooth" });
//   },
// });
