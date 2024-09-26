import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/components/common/DefaultLayout.vue'; // 사이드바가 있는 기본 레이아웃
import AuthLayout from '@/components/common/AuthLayout.vue'; // 사이드바가 없는 로그인, 회원가입 레이아웃
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
import CardWorldCup from '@/pages/CardWorldCup.vue';
import Mbti from '@/pages/Mbtidiagnosis.vue';
import Update from '@/pages/auth/ProfilePage.vue';
import Login from '@/pages/auth/LoginPage.vue';
import Join from '@/pages/auth/JoinPage.vue';
import { isAuthenticated } from '@/util/guards';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 기본 레이아웃이 적용되는 라우트
    {
      path: '/',
      component: DefaultLayout, // 사이드바가 있는 기본 레이아웃
      children: [
        { path: '', name: 'Home', component: Home },

        {
          path: 'search',
          name: 'Search',
          component: Search,
          // beforeEnter: isAuthenticated,,
        },
        {
          path: 'mbti',
          name: 'Mbti',
          component: Mbti,
          // beforeEnter: isAuthenticated,,
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile,
          redirect: '/profile/creditHistory',
          // beforeEnter: isAuthenticated,,
          children: [
            {
              path: 'creditHistory',
              component: CreditHistory,
            },
            {
              path: 'analysis',
              component: Analysis,
              // beforeEnter: isAuthenticated,,
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
              path: 'cardworldcup',
              component: CardWorldCup,
            },
          ],
        },
        {
          path: '/deposit',
          name: 'Deposit',
          component: Deposit,
          // beforeEnter: isAuthenticated,,
        },
        {
          path: '/installmentSavings',
          name: 'InstallmentSavings',
          component: InstallmentSavings,
          // beforeEnter: isAuthenticated,,
        },
        {
          path: '/card',
          name: 'Card',
          component: Card,
          // beforeEnter: isAuthenticated,,
        },
        {
          path: '/message',
          name: 'Message',
          component: Message,
          // beforeEnter: isAuthenticated,,
        },
        {
          path: 'payDetails/:id', // 소비 상세 페이지
          name: 'PayDetails',
          component: PayDetails,
        },
      ],
    },

    // 로그인, 회원가입 페이지는 사이드바 없는 레이아웃 사용
    {
      path: '/auth',
      component: AuthLayout, // 사이드바가 없는 로그인/회원가입 레이아웃
      children: [
        { path: 'login', name: 'Login', component: Login },
        { path: 'join', name: 'Join', component: Join },
        {
          path: 'update',
          name: 'Update',
          component: Update,
          // beforeEnter: isAuthenticated,,
        },
      ],
    },
  ],
});

// // 글로벌 가드 설정
// router.beforeEach((to, from, next) => {
//   // 여기서 모든 경로에 대한 전처리 작업을 수행
//   console.log('Navigating to:', to.path);

//   // 예: 로그인 확인 또는 권한 체크
//   if (to.path !== '/auth/login') {
//     // next('/auth/login'); // 로그인 페이지로 리디렉션
//     console.log('로긴안됌!');
//   } else {
//     next(); // 계속 진행
//     console.log('로긴됌!');
//   }
// });

export default router;
