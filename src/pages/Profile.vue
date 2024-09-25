<template>
  <!--begin::Toolbar-->
  <div class="toolbar mt-10" id="kt_toolbar">
    <div class="container-fluid d-flex flex-stack flex-wrap flex-sm-nowrap">
      <div class="d-flex flex-column align-items-start justify-content-center flex-wrap me-2">
        <h1 class="text-gray-900 fw-bold my-1 fs-2">프로필</h1>
      </div>
    </div>
  </div>
  <!--end::Toolbar-->

  <!--begin::Post-->
  <div class="post fs-6 d-flex flex-column-fluid mt-8" id="kt_post">
    <!--begin::Container-->
    <div class="container-xxl">
      <!--begin::Navbar-->
      <div class="card mb-6">
        <div class="card-body pt-9 pb-0">
          <!--begin::Details-->
          <div class="d-flex flex-wrap flex-sm-nowrap">
            <!--begin: Pic-->
            <div class="me-7 mb-4">
              <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                <img src="@/assets/media/avatars/300-1.jpg" alt="image" />
              </div>
            </div>
            <!--end::Pic-->
            <!--begin::Info-->
            <div class="flex-grow-1">
              <!--begin::Title-->
              <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <!--begin::User-->
                <div class="d-flex flex-column">
                  <!--begin::Name-->
                  <div class="d-flex align-items-center mb-2">
                    <span class="text-gray-900 fs-2 fw-bold me-1">Yujin_1219</span>
                  </div>
                  <!--end::Name-->

                  <!--begin::Info-->
                  <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                    <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2 mt-3">
                      <i class="ki-duotone ki-profile-circle fs-4 me-1">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span> </i
                      >자기관리마니아</a
                    >
                  </div>
                  <!--end::Info-->
                </div>
                <!--end::User-->
                <!--begin::Actions-->
                <div class="d-flex">
                  <router-link to="/mbti" class="btn btn-sm btn-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">금융 MBTI 진단</router-link>
                  <!--begin::Menu-->
                  <div class="me-0">
                    <button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                      <i class="ki-solid ki-dots-horizontal fs-2x me-1"></i>
                    </button>
                    <!--begin::Menu 3-->
                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                      <!--begin::Heading-->
                      <div class="menu-item px-3">
                        <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">설정</div>
                      </div>
                      <!--end::Heading-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">Create Invoice</a>
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link flex-stack px-3"
                          >Create Payment
                          <span class="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
                            <i class="ki-duotone ki-information fs-6">
                              <span class="path1"></span>
                              <span class="path2"></span>
                              <span class="path3"></span>
                            </i> </span
                        ></a>
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">Generate Bill</a>
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                        <a href="#" class="menu-link px-3">
                          <span class="menu-title">Subscription</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <!--begin::Menu sub-->
                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">Plans</a>
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">Billing</a>
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">Statements</a>
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu separator-->
                          <div class="separator my-2"></div>
                          <!--end::Menu separator-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <div class="menu-content px-3">
                              <!--begin::Switch-->
                              <label class="form-check form-switch form-check-custom form-check-solid">
                                <!--begin::Input-->
                                <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                                <!--end::Input-->
                                <!--end::Label-->
                                <span class="form-check-label text-muted fs-6">Recuring</span>
                                <!--end::Label-->
                              </label>
                              <!--end::Switch-->
                            </div>
                          </div>
                          <!--end::Menu item-->
                        </div>
                        <!--end::Menu sub-->
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3 my-1">
                        <a href="#" class="menu-link px-3">Settings</a>
                      </div>
                      <!--end::Menu item-->
                    </div>
                    <!--end::Menu 3-->
                  </div>
                  <!--end::Menu-->
                </div>
                <!--end::Actions-->
              </div>
              <!--end::Title-->
              <!--begin::Stats-->
              <div class="d-flex flex-wrap flex-stack">
                <!--begin::Wrapper-->
                <div class="d-flex flex-column flex-grow-1 pe-8">
                  <!--begin::Stats-->
                  <div class="d-flex flex-wrap">
                    <!--begin::Stat-->
                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <!--begin::Label-->
                      <div class="fw-semibold fs-5 text-gray-500 text-center">
                        <router-link class="text-gray-900 text-hover-primary fw-bold" to="/profile/creditHistory">소비 내역 수</router-link>
                      </div>
                      <!--end::Label-->
                      <!--begin::Number-->
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="svg-icon svg-icon-primary svg-icon-2x me-3 mt-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M3 6C2.4 6 2 5.6 2 5V3C2 2.4 2.4 2 3 2H5C5.6 2 6 2.4 6 3C6 3.6 5.6 4 5 4H4V5C4 5.6 3.6 6 3 6ZM22 5V3C22 2.4 21.6 2 21 2H19C18.4 2 18 2.4 18 3C18 3.6 18.4 4 19 4H20V5C20 5.6 20.4 6 21 6C21.6 6 22 5.6 22 5ZM6 21C6 20.4 5.6 20 5 20H4V19C4 18.4 3.6 18 3 18C2.4 18 2 18.4 2 19V21C2 21.6 2.4 22 3 22H5C5.6 22 6 21.6 6 21ZM22 21V19C22 18.4 21.6 18 21 18C20.4 18 20 18.4 20 19V20H19C18.4 20 18 20.4 18 21C18 21.6 18.4 22 19 22H21C21.6 22 22 21.6 22 21Z" fill="currentColor"/>
                            <path d="M3 16C2.4 16 2 15.6 2 15V9C2 8.4 2.4 8 3 8C3.6 8 4 8.4 4 9V15C4 15.6 3.6 16 3 16ZM13 15V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V15C11 15.6 11.4 16 12 16C12.6 16 13 15.6 13 15ZM17 15V9C17 8.4 16.6 8 16 8C15.4 8 15 8.4 15 9V15C15 15.6 15.4 16 16 16C16.6 16 17 15.6 17 15ZM9 15V9C9 8.4 8.6 8 8 8H7C6.4 8 6 8.4 6 9V15C6 15.6 6.4 16 7 16H8C8.6 16 9 15.6 9 15ZM22 15V9C22 8.4 21.6 8 21 8H20C19.4 8 19 8.4 19 9V15C19 15.6 19.4 16 20 16H21C21.6 16 22 15.6 22 15Z" fill="currentColor"/>
                          </svg>
                        </span>

                        <count-up class="fs-2 fw-bold mt-2" :end-val="67"></count-up>
                      </div>
                      <!--end::Number-->
                    </div>
                    <!--end::Stat-->
                    <!--begin::Stat-->
                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <!--begin::Label-->
                      <div class="fw-semibold fs-5 text-gray-500 text-center">
                        <router-link class="text-gray-900 text-hover-primary fw-bold" to="/profile/follower">팔로워</router-link>
                      </div>
                      <!--end::Label-->
                      <!--begin::Number-->
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="svg-icon svg-icon-primary svg-icon-2x me-3 mt-2">
                          <img src="@/assets/media/follow/follower.png" width="31" height="32">
                        </span>

                        <count-up class="fs-2 fw-bold mt-2" :end-val="91"></count-up>
                      </div>
                      <!--end::Number-->
                    </div>
                    <!--end::Stat-->
                    <!--begin::Stat-->
                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <!--begin::Label-->
                      <div class="fw-semibold fs-5 text-gray-500 text-center">
                        <router-link class="text-gray-900 text-hover-primary fw-bold" to="/profile/following">팔로잉</router-link>
                      </div>
                      <!--end::Label-->
                      <!--begin::Number-->
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="svg-icon svg-icon-primary svg-icon-2x me-3 mt-2">
                          <img src="@/assets/media/follow/following.png" width="30" height="29">
                        </span>
                        <count-up class="fs-2 fw-bold mt-2" :end-val="113"></count-up>
                      </div>
                      <!--end::Number-->
                    </div>

                    <div style="position: absolute; bottom: 10px; right: 20px;">
                      <i class="ki-duotone ki-arrows-circle text-primary fs-3x" @click="updateHistory">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                    </div>
                    <!--end::Stat-->
                  </div>
                  <!--end::Stats-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Info-->
          </div>
          <!--end::Details-->
        </div>
      </div>
      <!--end::Navbar-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Post-->

  <router-view class="mt-10"></router-view>
</template>

<script setup>
import '@/assets/js/custom/pages/user-profile/general.js';
import CountUp from 'vue-countup-v3';

// 갱신 버튼 클릭 시 사용
// import { ref } from 'vue';

// const data = ref(null); // 가져온 데이터를 저장할 반응형 변수

// const updateHistory = async () => {
//   console.log('데이터를 가져오는 중...');

//   try {
//     const response = await fetch('https://api.example.com/data');
//     if (!response.ok) {
//       throw new Error('네트워크 응답에 문제가 있습니다.');
//     }
//     data.value = await response.json(); // 데이터를 반응형 변수에 저장
//     console.log('가져온 데이터:', data.value);
//   } catch (error) {
//     console.error('데이터 가져오는 중 오류 발생:', error);
//   }
// };

</script>
