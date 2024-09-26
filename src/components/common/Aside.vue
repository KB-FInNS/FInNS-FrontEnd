<template>
  <div
    id="kt_aside"
    class="aside aside-default aside-hoverable"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle"
  >
    <!--begin::Brand-->
    <div class="aside-logo flex-column-auto px-10 pt-9 pb-5" id="kt_aside_logo">
      <!--begin::Logo-->
      <router-link to="/">
        <img
          alt="Logo"
          src="@/assets/media/logos/logo-default.svg"
          class="max-h-50px logo-default theme-light-show"
        />
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
        id="kt_aside_menu"
        data-kt-menu="true"
      >
        <div
          class="hover-scroll-y mx-4"
          id="kt_aside_menu_wrapper"
          data-kt-scroll="false"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_aside_menu"
          data-kt-scroll-offset="20px"
          data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
        >
          <!--begin:Menu item-->
          <div class="menu-item mt-5">
            <!--begin:Menu link-->
            <router-link class="menu-link" to="/" exact-active-class="active">
              <span class="menu-icon svg-icon svg-icon-primary svg-icon-2hx">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span class="menu-title mx-5 text-primary">홈</span>
            </router-link>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->

          <!--begin:Menu item-->
          <div class="menu-item mt-5">
            <!--begin:Menu link-->
            <router-link
              class="menu-link"
              to="/search"
              exact-active-class="active"
            >
              <span
                class="menu-icon svg-icon svg-icon-2hx"
                style="color: black"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x="17.0365"
                    y="15.1223"
                    width="8.15546"
                    height="2"
                    rx="1"
                    transform="rotate(45 17.0365 15.1223)"
                    fill="currentColor"
                  />
                  <path
                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span class="menu-title mx-5">검색</span>
            </router-link>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->

          <!--begin:Menu item-->
          <div class="menu-item mt-5">
            <!--begin:Menu link-->
            <router-link class="menu-link" to="/profile" active-class="active">
              <span
                class="menu-icon svg-icon svg-icon-2hx"
                style="color: palevioletred"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                    fill="currentColor"
                  />
                  <rect
                    x="7"
                    y="6"
                    width="4"
                    height="4"
                    rx="2"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span class="menu-title mx-5">프로필</span>
            </router-link>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->

          <!--begin:Menu item-->
          <div
            data-kt-menu-trigger="click"
            class="menu-item menu-accordion mt-5 show"
          >
            <!--begin:Menu link-->
            <span class="menu-link">
              <span class="menu-icon svg-iconsvg-icon-2hx" style="color: green">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="9"
                    width="3"
                    height="10"
                    rx="1.5"
                    fill="currentColor"
                  />
                  <rect
                    opacity="0.5"
                    x="13"
                    y="5"
                    width="3"
                    height="14"
                    rx="1.5"
                    fill="currentColor"
                  />
                  <rect
                    x="18"
                    y="11"
                    width="3"
                    height="8"
                    rx="1.5"
                    fill="currentColor"
                  />
                  <rect
                    x="3"
                    y="13"
                    width="3"
                    height="6"
                    rx="1.5"
                    fill="currentColor"
                  />
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
                <router-link
                  class="menu-link"
                  to="/deposit"
                  exact-active-class="active"
                >
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
                <router-link
                  class="menu-link"
                  to="/installmentSavings"
                  exact-active-class="active"
                >
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
                <router-link
                  class="menu-link"
                  to="/card"
                  exact-active-class="active"
                >
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

          <!--begin:Menu item-->
          <div class="menu-item mt-5">
            <!--begin:Menu link-->
            <router-link
              class="menu-link"
              to="/message"
              exact-active-class="active"
            >
              <span
                class="menu-icon svg-icon svg-icon-muted svg-icon-2hx"
                style="color: violet"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.43 8.56949L10.744 15.1395C10.6422 15.282 10.5804 15.4492 10.5651 15.6236C10.5498 15.7981 10.5815 15.9734 10.657 16.1315L13.194 21.4425C13.2737 21.6097 13.3991 21.751 13.5557 21.8499C13.7123 21.9488 13.8938 22.0014 14.079 22.0015H14.117C14.3087 21.9941 14.4941 21.9307 14.6502 21.8191C14.8062 21.7075 14.9261 21.5526 14.995 21.3735L21.933 3.33649C22.0011 3.15918 22.0164 2.96594 21.977 2.78013C21.9376 2.59432 21.8452 2.4239 21.711 2.28949L15.43 8.56949Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M20.664 2.06648L2.62602 9.00148C2.44768 9.07085 2.29348 9.19082 2.1824 9.34663C2.07131 9.50244 2.00818 9.68731 2.00074 9.87853C1.99331 10.0697 2.04189 10.259 2.14054 10.4229C2.23919 10.5869 2.38359 10.7185 2.55601 10.8015L7.86601 13.3365C8.02383 13.4126 8.19925 13.4448 8.37382 13.4297C8.54839 13.4145 8.71565 13.3526 8.85801 13.2505L15.43 8.56548L21.711 2.28448C21.5762 2.15096 21.4055 2.05932 21.2198 2.02064C21.034 1.98196 20.8409 1.99788 20.664 2.06648Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span class="menu-title mx-5">메시지</span>
            </router-link>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->
          <!--카드 월드컵-->
          <div class="menu-item mt-5">
            <!--begin:Menu link-->
            <router-link
              class="menu-link"
              to="/cardworldcup"
              exact-active-class="active"
            >
              <!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/keenthemes/craft/docs/core/html/src/media/icons/duotune/general/gen020.svg-->
              <span class="svg-icon svg-icon-warning svg-icon-2hx"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 18V16H10V18L9 20H15L14 18Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
              <span class="menu-title mx-5">카드 월드컵</span>
            </router-link>
            <!--end:Menu link-->
          </div>
          <!--begin:Menu item-->
          <div class="menu-item mt-5">
            <!--begin:Menu link-->
            <router-link
              class="menu-link"
              to="/mbti"
              exact-active-class="active"
            >
              <i class="ki-duotone ki- illustrator">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
              </i>
              <span class="menu-title mx-5">MBTI 분석</span>
            </router-link>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->
        </div>
      </div>
      <!--end::Menu-->
    </div>
    <!--end::Aside menu-->
  </div>
</template>

<script setup></script>

<style scoped></style>
