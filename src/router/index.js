import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Search from '@/pages/Search.vue';
import Profile from '@/pages/Profile.vue';
import Deposit from '@/pages/Deposit.vue';
import InstallmentSavings from '@/pages/InstallmentSavings.vue';
import Card from '@/pages/Card.vue';
import Message from '@/pages/Message.vue';
import CreditHistory from '@/components/common/CreditHistory.vue';
import Analysis from '@/components/common/Analysis.vue';
import Follower from '@/components/common/Follower.vue';
import Following from '@/components/common/Following.vue';
import PayDetails from '@/pages/PayDetails.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/search', name: 'Search', component: Search },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      redirect: '/profile/creditHistory',
      children: [
        {
          path: 'creditHistory',
          component: CreditHistory,
        },
        {
          path: 'analysis',
          component: Analysis,
        },
        {
          path: 'follower',
          component: Follower,
        },
        {
          path: 'following',
          component: Following,
        },
        {
          path: 'payDetails/:id', // 소비 상세 페이지
          name: 'PayDetails',
          component: PayDetails,
        },
      ],
    },
    { path: '/deposit', name: 'Deposit', component: Deposit },
    {
      path: '/installmentSavings',
      name: 'InstallmentSavings',
      component: InstallmentSavings,
    },
    { path: '/card', name: 'Card', component: Card },
    { path: '/message', name: 'Message', component: Message },
  ],
});

export default router;
