// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assuming you have a router setup in router/index.js
import './style.css';

const app = createApp(App);
app.use(router); // Use Vue Router
app.mount('#app');
