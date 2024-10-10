import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/components/common/DefaultLayout.vue'; // 사이드바가 있는 기본 레이아웃
import AuthLayout from '@/components/common/AuthLayout.vue'; // 사이드바가 없는 로그인, 회원가입 레이아웃
import Main from '@/pages/Main.vue';
import Profile from '@/pages/profile/Profile.vue';
import Deposit from '@/pages/FinanceProduct/Deposit.vue';
import InstallmentSavings from '@/pages/FinanceProduct/InstallmentSavings.vue';
import Card from '@/pages/FinanceProduct/Card.vue';
import Spending from '@/pages/profile/Spending.vue';
import Analysis from '@/pages/profile/Analysis.vue';
import Follower from '@/components/common/Follower.vue';
import Following from '@/components/common/Following.vue';
import PayDetails from '@/pages/PayDetails.vue';
import CardWorldCup from '@/pages/CardWorldCup.vue';
import Mbti from '@/pages/FinanceMbti.vue';
import Update from '@/pages/auth/ProfilePage.vue';
import Login from '@/pages/auth/LoginPage.vue';
import Join from '@/pages/auth/JoinPage.vue';
import { isAuthenticated } from '@/util/guards';
import PostDetails from '@/pages/PostDetails.vue';
import ProductDetail from '@/pages/FinanceProduct/ProductDetail.vue';
import CardDetail from '@/pages/FinanceProduct/CardDetail.vue';
import PostViewPage from '@/pages/PostViewPage.vue';
import WinnerCard from '@/pages/WinnerCard.vue';
// import DepositDetail from '@/pages/DepositDetail.vue';
// import installmentSavingsDetail from '@/pages/installmentSavingsDetail.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 기본 레이아웃이 적용되는 라우트
    {
      path: '/',
      component: DefaultLayout, // 사이드바가 있는 기본 레이아웃
      children: [
        { path: '', name: 'Main', component: Main },
        {
          path: 'mbti',
          name: 'Mbti',
          component: Mbti,
          // beforeEnter: isAuthenticated,,
        },
        {
          path: '/profile/:userNo',
          name: 'Profile',
          component: Profile,
          redirect: (to) => `/profile/${to.params.userNo}/spending`,
          // beforeEnter: isAuthenticated,
          children: [
            {
              path: 'spending',
              component: Spending,
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
          path: '/payDetails/:id', // 소비 상세 페이지
          name: 'PayDetails',
          component: PayDetails,
        },
        {
          path: '/postDetails', // 게시물 상세 페이지
          name: 'PostDetails',
          component: PostDetails,
        },
        {
          path: '/auth/update',
          name: 'Update',
          component: Update,
          // beforeEnter: isAuthenticated,,
        },
        {
          path: 'cardworldcup',
          component: CardWorldCup,
        },
        {
          path: '/cardworldcup/winnercard',
          component: WinnerCard,
        },
        {
          path: '/deposit/:financial_product_no', // 예금 상품 상세 페이지
          name: 'DepositDetail',
          // component: DepositDetail,
          component: ProductDetail,
        },
        {
          path: '/installmentSavings/:financial_product_no', // 적금 상품 상세 페이지
          name: 'installmentSavingsDetail',
          // component: installmentSavingsDetail,
          component: ProductDetail,
        },
        {
          path: '/card/:card_no', // 적금 상품 상세 페이지
          name: 'CardDetail',
          // component: CardDetail,
          component: CardDetail,
        },
        {
          path: '/postView/:postNo',
          name: 'PostViewPage',
          component: PostViewPage,
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
