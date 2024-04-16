// main.js

import { createApp } from "vue";
import Tabs from "vue3-tabs";
import { createPinia } from "pinia";
import VueCarousel from "vue-carousel";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import router from "@/router/index.js"; // Assuming you have a router setup in router/index.js
import "./style.css";

const app = createApp(App);
const pinia = createPinia();
// Vue.use(VueCarousel);
app.use(router); // Use Vue Router
app.use(Tabs);
app.use(Toast);
app.use(pinia);
app.mount("#app");
