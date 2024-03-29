import { createRouter, createWebHashHistory } from 'vue-router'; // Import createRouter and createWebHashHistory from vue-router
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import VerificationOtp from './components/VerificationOtp.vue'; // Make sure to include the correct file extension (.vue)

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
    },
    {
        name: "VerificationOtp",
        path: '/otp', // Corrected path to '/otp'
        component: VerificationOtp
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
