// main.js

import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import router from "./router"; // Assuming you have a router setup in router/index.js
import "./style.css";

const app = createApp(App);
app.use(router); // Use Vue Router
app.use(Toast);
app.mount("#app");
