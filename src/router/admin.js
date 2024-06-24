import adminSignIn from "@/pages/auth/sign-in.vue";
import adminVerificationOtp from "@/pages/auth/verification-otp.vue"; // Make sure to include the correct file extension (.vue)
import Analytics from "@/pages/private/dashboard/analytics.vue";
import orders from "../pages/private/dashboard/orders.vue";
import auth from "@/layouts/auth.vue";
import adminproducts from "../pages/private/dashboard/products.vue";
import customers from "../pages/private/dashboard/customers.vue";
import addproducts from "../pages/private/dashboard/add-products.vue";
import OrderDetail from "@/pages/private/dashboard/order-detail.vue";
import editproducts from "../pages/private/dashboard/edit-product.vue";

const routes = [
  {
    name: "layout",
    path: "",
    component: auth,
    children: [
      {
        path: "",
        redirect: { name: "admin-sign-in" },
      },
      {
        name: "admin-sign-in",
        path: "sign-in",
        component: adminSignIn,
      },
      {
        name: "adminVerificationOtp",
        path: "admin-verification-otp",
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
    name: "OrderDetail",
    path: "/orders/:orderId",
    component: OrderDetail,
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
  {
    name: "editprodcts",
    path: "editproducts/:slug",
    component: editproducts,
  },
];

export default routes;
