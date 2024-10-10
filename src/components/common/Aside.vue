<template>
  <div id="kt_aside" class="aside aside-default aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle" style="overflow-y: auto;">
    <!--begin::Brand-->
    <div class="aside-logo flex-column-auto px-10 pt-9 pb-5" id="kt_aside_logo">
      <!--begin::Logo-->
      <router-link to="/">
        <img alt="Logo" src="/assets/media/logos/logo-FInNS.png" width="120px" style="margin-left: 1px;"/>
      </router-link>
      <!--end::Logo-->
    </div>
    <!--end::Brand-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid ps-3 pe-1">
      <!--begin::Aside Menu-->
      <!--begin::Menu-->

      <!-- fs-? 변경해서 메뉴바 글씨 크기 조절 -->
      <div
        class="menu menu-sub-indention menu-column menu-rounded menu-title-gray-600 menu-active-bg menu-arrow-gray-500 fw-semibold fs-3 my-5 mt-lg-2 mb-lg-0"
        id="kt_aside_menu" data-kt-menu="true">
        <div class="hover-scroll-y mx-4" id="kt_aside_menu_wrapper" data-kt-scroll="false"
          data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="20px"
          data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer">
          <!--begin:Menu item-->
          <div class="menu-item mt-5">
            <!--begin:Menu link-->
            <router-link class="menu-link" to="/" exact-active-class="active">
              <span class="menu-icon svg-icon svg-icon-primary svg-icon-2hx">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z"
                    fill="currentColor" />
                </svg>
              </span>
              <span class="menu-title mx-5">홈</span>
            </router-link>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->

          <!--begin:Menu item-->
          <div class="menu-item mt-5">
            <!--begin:Menu link-->
            <router-link class="menu-link" active-class="active" :to="`/profile/${2}`">
              <span class="menu-icon svg-icon svg-icon-2hx" style="color: palevioletred">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3"
                    d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                    fill="currentColor" />
                  <path
                    d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                    fill="currentColor" />
                  <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                </svg>
              </span>
              <span class="menu-title mx-5">프로필</span>
            </router-link>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->

          <!--begin:Menu item-->
          <div class="menu-item mt-5">
            <!--begin:Menu link-->
            <router-link class="menu-link" to="/mbti" exact-active-class="active">
              <!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/keenthemes/craft/docs/core/html/src/media/icons/duotune/maps/map009.svg-->
              <span class="svg-icon svg-icon-muted svg-icon-2hx">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3"
                    d="M13.625 22H9.625V3C9.625 2.4 10.025 2 10.625 2H12.625C13.225 2 13.625 2.4 13.625 3V22Z"
                    fill="#ff0000" />
                  <path
                    d="M19.625 10H12.625V4H19.625L21.025 6.09998C21.325 6.59998 21.325 7.30005 21.025 7.80005L19.625 10Z"
                    fill="#ffff00" />
                  <path d="M3.62499 16H10.625V10H3.62499L2.225 12.1001C1.925 12.6001 1.925 13.3 2.225 13.8L3.62499 16Z"
                    fill="#ff0000" />
                </svg>
              </span>

              <!--end::Svg Icon-->
              <span class="menu-title mx-5">금융 MBTI</span>
            </router-link>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->

          <!--카드 월드컵-->
          <div class="menu-item mt-5">
            <!--begin:Menu link-->
            <router-link class="menu-link" to="/cardworldcup" exact-active-class="active">
              <!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/keenthemes/craft/docs/core/html/src/media/icons/duotune/general/gen020.svg-->
              <span class="svg-icon svg-icon-warning svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 18V16H10V18L9 20H15L14 18Z" fill="currentColor" />
                  <path opacity="0.3"
                    d="M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z"
                    fill="currentColor" />
                </svg>
              </span>
              <!--end::Svg Icon-->
              <span class="menu-title mx-5">카드 월드컵</span>
            </router-link>
            <!--end:Menu link-->
          </div>

          <!--begin:Menu item-->
          <div data-kt-menu-trigger="click" class="menu-item menu-accordion mt-5">
            <!--begin:Menu link-->
            <span class="menu-link">
              <span class="menu-icon svg-iconsvg-icon-2hx" style="color: green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor" />
                  <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor" />
                  <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor" />
                  <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor" />
                </svg>
              </span>
              <span class="menu-title mx-5">금융상품 찾기</span>
              <span class="menu-arrow"></span>
            </span>
            <!--end:Menu link-->

            <!--begin:Menu sub-->
            <div class="menu-sub menu-sub-accordion">
              <!--begin:Menu item-->
              <div class="menu-item mt-1">
                <!--begin:Menu link-->
                <router-link class="menu-link" to="/deposit" exact-active-class="active">
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                  <span class="menu-title mx-5">예금</span>
                </router-link>
                <!--end:Menu link-->
              </div>
              <!--end:Menu item-->
              <!--begin:Menu item-->
              <div class="menu-item mt-1">
                <!--begin:Menu link-->
                <router-link class="menu-link" to="/installmentSavings" exact-active-class="active">
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                  <span class="menu-title mx-5">적금</span>
                </router-link>
                <!--end:Menu link-->
              </div>
              <!--end:Menu item-->
              <!--begin:Menu item-->
              <div class="menu-item mt-1">
                <!--begin:Menu link-->
                <router-link class="menu-link" to="/card" exact-active-class="active">
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                  <span class="menu-title mx-5">카드</span>
                </router-link>
                <!--end:Menu link-->
              </div>
              <!--end:Menu item-->
            </div>
            <!--end:Menu sub-->
          </div>
          <!--end:Menu item-->

          <!--금융상품추천-->
          <div class="recommendation-container">
            <div class="card-container">

              <div v-for="(item, index) in products" :key="index" class="recommendation-card">
                <div class="icon">
                  <img :src="item.icon" alt="상품 아이콘" />
                </div>
                <div class="card-content pt-12">
                  <h4>{{ item.title }}</h4>
                  <p>
                    <router-link :to="item.link1">{{ item.linkText1 }}</router-link>
                    |
                    <router-link :to="item.link2">{{ item.linkText2 }}</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end::Menu-->
    </div>
    <!--end::Aside menu-->
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
{
    icon: '/assets/media/icons/sug1.jpg', // 아이콘 링크
    title: '금리가 가장 높은 상품',
    link1: { name: 'Deposit' }, 
    link2: { name: 'InstallmentSavings' }, 
    linkText1: '예금 상품', 
    linkText2: '적금 상품', 
  },
  {
    icon: '/assets/media/icons/sug2.jpg', // 아이콘 링크
    title: '최다 가입 상품',
    link1: { name: 'Deposit' }, 
    link2: { name: 'InstallmentSavings' }, // 라우트 이름
    linkText1: '예금 상품', // 링크에 표시될 텍스트
    linkText2: '적금 상품', // 링크에 표시될 텍스트
  },
]);
</script>

<style scoped>
.recommendation-container {
  text-align: center;
  margin: 20px;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recommendation-card {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* background-color: #dceafd; */
  border: 1.5px solid #eee;
  border-radius: 12px;
  padding: 20px;
  width: 225px;
  margin: 10px 0;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); */
  justify-content: left;
}

.icon {
  margin-bottom: 30px;
  position: absolute; /* card-container의 왼쪽 상단에 고정 */
  
}

.icon img {
  width: 30px;
  height: 30px;

}

.card-content h4 {
  font-size: 18px;
  color: #333;
  margin-bottom: 6px;
}

.card-content p {
  font-size: 15px;
  color: #666;
}
</style>
