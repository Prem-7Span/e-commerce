import { createRouter, createWebHashHistory } from 'vue-router'; // Import createRouter and createWebHashHistory from vue-router
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';

const routes = [
    {
        name: "signUp",
        path: '/',
        component: SignUp
    },
    {
        name: "signIn",
        path: '/signin',
        component: SignIn
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
