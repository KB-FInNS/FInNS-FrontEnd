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
import { useAuthStore } from '@/stores/auth';
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
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/profile/:userNo',
          name: 'Profile',
          component: Profile,
          redirect: (to) => `/profile/${to.params.userNo}/spending`,
          //beforeEnter: isAuthenticated,
          children: [
            {
              path: 'spending',
              component: Spending,
              //beforeEnter: isAuthenticated,
            },
            {
              path: 'analysis',
              component: Analysis,
              //beforeEnter: isAuthenticated,
            },
            {
              path: 'follower',
              component: Follower,
              //beforeEnter: isAuthenticated,
            },
            {
              path: 'following',
              component: Following,
              //beforeEnter: isAuthenticated,
            },
          ],
        },
        {
          path: '/deposit',
          name: 'Deposit',
          component: Deposit,
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/installmentSavings',
          name: 'InstallmentSavings',
          component: InstallmentSavings,
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/card',
          name: 'Card',
          component: Card,
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/payDetails/:postNo', // 소비 상세 페이지
          name: 'PayDetails',
          component: PayDetails,
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/postDetails/:postNo', // 게시물 상세 페이지
          name: 'PostDetails',
          component: PostDetails,
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/auth/update',
          name: 'Update',
          component: Update,
          //beforeEnter: isAuthenticated,
        },
        {
          path: 'cardworldcup',
          component: CardWorldCup,
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/cardworldcup/winnercard',
          component: WinnerCard,
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/deposit/:financeProductNo', // 예금 상품 상세 페이지
          name: 'DepositDetail',
          // component: DepositDetail,
          component: ProductDetail,
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/installmentSavings/:financeProductNo', // 적금 상품 상세 페이지
          name: 'installmentSavingsDetail',
          // component: installmentSavingsDetail,
          component: ProductDetail,
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/card/:cardNo', // 적금 상품 상세 페이지
          name: 'CardDetail',
          // component: CardDetail,
          component: CardDetail,
          //beforeEnter: isAuthenticated,
        },
        {
          path: '/postView/:postNo',
          name: 'PostViewPage',
          component: PostViewPage,
          //beforeEnter: isAuthenticated,
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


router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  // 로그인이 필요하지 않은 페이지 목록
  const publicPages = ['/auth/login', '/auth/join'];
  const authRequired = !publicPages.includes(to.path);

  // 사용자가 로그인하지 않은 상태이고, 인증이 필요한 페이지로 접근하려 할 때
  if (authRequired && !auth.isLogin) {
    next('/auth/login');
  } 
  // 사용자가 이미 로그인한 상태에서 로그인 또는 회원가입 페이지로 접근하려 할 때
  else if (auth.isLogin && publicPages.includes(to.path)) {
    next('/');
  }
  // 그 외의 경우 (인증이 필요 없는 페이지이거나, 인증된 사용자가 인증이 필요한 페이지에 접근할 때)
  else {
    next();
  }
});







export default router;
