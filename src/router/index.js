import { createRouter, createWebHistory } from "vue-router"; // Import createRouter and createWebHashHistory from vue-router
import Default from "@/layouts/default.vue";
import admin from "@/layouts/admin.vue";
import adminRoutes from "./admin";
import userRoutes from "./user";
const routes = [
  {
    path: "/admin",
    component: admin,
    redirect: { name: "admin-sign-in" },
    children: [...adminRoutes],
  },
  {
    path: "/",
    component: Default,
    children: [...userRoutes],
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
    // console.log("8899",to.meta.requiresAuth);
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
