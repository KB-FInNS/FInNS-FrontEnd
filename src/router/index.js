
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue';
import Search from '@/pages/Search.vue';
import Profile from '@/pages/Profile.vue';
import Deposit from '@/pages/Deposit.vue';
import InstallmentSavings from '@/pages/InstallmentSavings.vue';
import Card from '@/pages/Card.vue';
import Message from '@/pages/Message.vue';
import Payment from '@/components/common/Payment.vue';
import Analysis from '@/components/common/Analysis.vue';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', name: "Home", component: Home },
        { path: '/search', name: "Search", component: Search },
        { path: '/profile', name: "Profile", component: Profile,
            redirect: '/profile/payment',
            children: [
                {
                    path: 'payment',
                    component: Payment
                },
                {
                    path: 'analysis',
                    component: Analysis
                }
            ]
         },
        { path: '/deposit', name: "Deposit", component: Deposit },
        { path: '/installmentSavings', name: "InstallmentSavings", component: InstallmentSavings },
        { path: '/card', name: "Card", component: Card },
        { path: '/message', name: "Message", component: Message },
        { path: '/profile/payment', name: "Payment", component: Payment },
    ]
});

export default router;