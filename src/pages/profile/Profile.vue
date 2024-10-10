<template>
  <div class="header ms-10">
    <SearchComponent />
  </div>
  <div class="ms-10 me-10">
    <div class="card mb-5">
      <div class="card-body pt-9 pb-0">
        <!--begin::Details-->
        <div class="d-flex flex-wrap flex-sm-nowrap">
          <!--begin: Pic-->
          <div class="me-7 mb-4">
            <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
              <img :src="user.imgUrl" alt="image" />
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
                  <span class="text-gray-900 fs-2 fw-bold me-1">{{ user.userName }}</span>
                  <button class="btn btn-sm ms-10" :class="isFollow ? 'btn-light' : 'btn-primary'"
                    @click="toggleFollow()">
                    <span>{{ isFollow ? '팔로잉' : '팔로우' }}</span>
                  </button>
                </div>
                <!--end::Name-->

                <!--begin::Info-->
                <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                  <router-link to="/mbti"
                    class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2 mt-3">
                    <i class="ki-duotone ki-profile-circle fs-4 me-1">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                    </i>
                    {{user.mbtiName}}
                  </router-link>
                </div>
                <!--end::Info-->
              </div>
              <!--end::User-->

              <!--begin::Actions-->
              <div class="d-flex">
                <!-- 라우팅 -->
                 <div class="btn btn-sm btn-primary me-3" @click="analysisMbti()">
                  금융 MBTI 진단
                 </div>

                <!-- 모달 트리거 버튼 (display: none; - JS를 통해 제어) -->
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal"
                  style="display: none" ref="modalTrigger"></button>

                <!--begin::Menu-->
                <div class="me-0">
                  <button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click"
                    ref="menuButton">
                    <i class="ki-solid ki-dots-horizontal fs-2x me-1"></i>
                  </button>
                  <!--begin::Menu 3-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true">
                    <!-- 메뉴 항목들 -->
                    <div class="menu-item px-3">
                      <!-- 프로필 수정 버튼 -->
                      <router-link to="/auth/update" class="menu-link px-3">
                        프로필 수정
                      </router-link>
                    </div>
                    <div class="menu-item px-3">
                      <!-- Create Payment 버튼과 툴팁 -->
                      <a href="#" class="menu-link flex-stack px-3">
                        Create Payment
                        <span class="ms-2" data-bs-toggle="tooltip"
                          title="Specify a target name for future usage and reference">
                          <i class="ki-duotone ki-information fs-6">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                          </i>
                        </span>
                      </a>
                    </div>
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
                  <router-link :to="`/profile/${userNo}/spending`"
                    class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <!--begin::Label-->
                    <div class="fs-5 text-center">
                      <span class="text-gray-900 text-hover-primary fw-bold">소비 내역 수</span>
                    </div>
                    <!--end::Label-->
                    <!--begin::Number-->
                    <div class="d-flex align-items-center justify-content-center">
                      <span class="svg-icon svg-icon-primary svg-icon-2x me-3 mt-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3"
                            d="M3 6C2.4 6 2 5.6 2 5V3C2 2.4 2.4 2 3 2H5C5.6 2 6 2.4 6 3C6 3.6 5.6 4 5 4H4V5C4 5.6 3.6 6 3 6ZM22 5V3C22 2.4 21.6 2 21 2H19C18.4 2 18 2.4 18 3C18 3.6 18.4 4 19 4H20V5C20 5.6 20.4 6 21 6C21.6 6 22 5.6 22 5ZM6 21C6 20.4 5.6 20 5 20H4V19C4 18.4 3.6 18 3 18C2.4 18 2 18.4 2 19V21C2 21.6 2.4 22 3 22H5C5.6 22 6 21.6 6 21ZM22 21V19C22 18.4 21.6 18 21 18C20.4 18 20 18.4 20 19V20H19C18.4 20 18 20.4 18 21C18 21.6 18.4 22 19 22H21C21.6 22 22 21.6 22 21Z"
                            fill="currentColor" />
                          <path
                            d="M3 16C2.4 16 2 15.6 2 15V9C2 8.4 2.4 8 3 8C3.6 8 4 8.4 4 9V15C4 15.6 3.6 16 3 16ZM13 15V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V15C11 15.6 11.4 16 12 16C12.6 16 13 15.6 13 15ZM17 15V9C17 8.4 16.6 8 16 8C15.4 8 15 8.4 15 9V15C15 15.6 15.4 16 16 16C16.6 16 17 15.6 17 15ZM9 15V9C9 8.4 8.6 8 8 8H7C6.4 8 6 8.4 6 9V15C6 15.6 6.4 16 7 16H8C8.6 16 9 15.6 9 15ZM22 15V9C22 8.4 21.6 8 21 8H20C19.4 8 19 8.4 19 9V15C19 15.6 19.4 16 20 16H21C21.6 16 22 15.6 22 15Z"
                            fill="currentColor" />
                        </svg>
                      </span>

                      <count-up class="fs-2 text-gray-900 text-hover-primary fw-bold mt-2" :end-val="spendingCounts"></count-up>
                    </div>
                    <!--end::Number-->
                  </router-link>
                  <!--end::Stat-->
                  <!--begin::Stat-->
                  <router-link :to="`/profile/${userNo}/follower`"
                    class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <!--begin::Label-->
                    <div class="fs-5 text-center">
                      <span class="text-gray-900 text-hover-primary fw-bold">팔로워</span>
                    </div>
                    <!--end::Label-->
                    <!--begin::Number-->
                    <div class="d-flex align-items-center justify-content-center">
                      <span class="svg-icon svg-icon-primary svg-icon-2x me-3 mt-2">
                        <img src="/assets/media/follow/follower.png" width="31" height="32" />
                      </span>

                      <count-up class="fs-2 text-gray-900 text-hover-primary fw-bold mt-2" :end-val="91"></count-up>
                    </div>
                    <!--end::Number-->
                  </router-link>
                  <!--end::Stat-->
                  <!--begin::Stat-->

                  <router-link :to="`/profile/${userNo}/following`"
                    class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <!--begin::Label-->
                    <div class="fs-5 text-center">
                      <span class="text-gray-900 text-hover-primary fw-bold">팔로잉</span>
                    </div>
                    <!--end::Label-->
                    <!--begin::Number-->
                    <div class="d-flex align-items-center justify-content-center">
                      <span class="svg-icon svg-icon-primary svg-icon-2x me-3 mt-2">
                        <img src="/assets/media/follow/following.png" width="30" height="29" />
                      </span>

                      <count-up class="fs-2 text-gray-900 text-hover-primary fw-bold mt-2" :end-val="113"></count-up>
                    </div>
                    <!--end::Number-->
                  </router-link>

                  <div style="position: absolute; bottom: 10px; right: 20px">
                    <i class="ki-duotone ki-arrows-circle text-primary fs-3x" style="cursor: pointer;" @click="renew()">
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

    <!-- 가입한 예적금 -->
    <div class="text-center fs-1 fw-bold mt-10">가입한 금융상품</div>
    <div class="d-flex justify-content-between mt-10">
      <table id="kt_datatable_column_rendering" class="table table-row-bordered gy-5"
        style="width: 50%; margin-left: 100px">
        <tbody>
          <tr v-for="(item, index) in dataList" :key="index" @click="gotoDepositDetail(item)"
            class="fs-4 text-gray-600 fw-bold" style="cursor: pointer;">
            <td>
              <img :src="item.img_url" alt="depositkor_co_nm" width="28" height="24" loading="eager" />
              <span class="ms-3 text-hover-primary" style="color: black;">{{ item.kor_co_nm }}</span>
            </td>
            <td>
              <span class="text-hover-primary">{{ item.fin_prdt_nm }}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <Carousel style="width: 50%; margin-left: -30px">
        <Slide v-for="(item, index) in cards" :key="index" @click="gotoCardDetail(item)">
          <div style="text-align: center; cursor: pointer;">
            <img :src="item.card_img_url" ref="image" style="width: 100px; display: block; margin: 0 auto;">
            <div class="mt-3 fs-1 fw-bold text-hover-primary" style="color: black;">
              {{ item.card_name }}
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <hr class="mt-10">

    <router-view></router-view>
  </div>
</template>

<script setup>
import SearchComponent from "@/components/common/SearchComponent.vue";
import "vue3-carousel/dist/carousel.css";
import CountUp from 'vue-countup-v3';
import { ref, onMounted, nextTick, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const userNo = route.params.userNo;
const user = ref({});

watch(() => route.params.userNo, () => {
  window.location.reload();
});

const getUser = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/users/${userNo}`);
    user.value = response.data;

    console.log(user.value);

  } catch (error) {
    console.error('Error renewing posts:', error);
  }
};

let spendingCounts = ref(0);
const getSpendingCounts = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/users/${userNo}/posts/count`);
    spendingCounts.value = response.data;

  } catch (error) {
    console.error('Error renewing posts:', error);
  }
};

const renew = async () => {
  try {
    const response = await axios.put(`http://localhost:8080/users/${userNo}/renew`);
    location.reload();
  } catch (error) {
    console.error('Error renewing posts:', error);
  }
};

const analysisMbti = async () => {
  try {
    const response = await axios.put(`http://localhost:8080/users/${userNo}/mbti`);

  } catch (error) {
    console.error('Error analysis mbti:', error);
  }

  router.push("/mbti");
};

const isFollow = ref(false);
const toggleFollow = () => {
  isFollow.value = !isFollow.value; // 선택한 사용자의 팔로우 상태 전환

  // true, false 값에 따라 디비에 수정돼야함
};

// 일시적인 데이터set
const dataList = ref([]);
const setDataList = async () => {
  dataList.value = [
    // 예금 상품 2개
    {
      financial_product_no: 1,
      save_trm: "12",
      intr_rate_type_nm: "단리",
      join_member: "제한없음",
      join_way: "인터넷",
      img_url: "https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_KB_Symbol.png",
      kor_co_nm: "KB국민은행",
      fin_prdt_nm: "주택청약종합저축",
      intr_rate: "1.5%",
      intr_rate2: "3.5%"
    },
    {
      financial_product_no: 2,
      save_trm: "24",
      intr_rate_type_nm: "단리",
      join_member: "제한없음",
      join_way: "스마트폰",
      img_url: "https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_SHINHAN_Symbol.png",
      kor_co_nm: "신한은행",
      fin_prdt_nm: "자유적립예금",
      intr_rate: "1.7%",
      intr_rate2: "3.8%"
    },

    // 적금 상품 2개
    {
      financial_product_no: 3,
      save_trm: "36",
      intr_rate_type_nm: "복리",
      join_member: "일부제한",
      join_way: "영업점",
      img_url: "https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_WOORI_Symbol.png",
      kor_co_nm: "우리은행",
      fin_prdt_nm: "정기예금",
      intr_rate: "2.0%",
      intr_rate2: "4.0%"
    },
    {
      financial_product_no: 3,
      save_trm: "36",
      intr_rate_type_nm: "복리",
      join_member: "일부제한",
      join_way: "영업점",
      img_url: "https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_WOORI_Symbol.png",
      kor_co_nm: "우리은행",
      fin_prdt_nm: "정기예금",
      intr_rate: "2.0%",
      intr_rate2: "4.0%"
    },
  ];
}

// 해당 item 전체를 문자열로 변환하여 넘김
const gotoDepositDetail = (item) => {
  router.push({
    path: `/Deposit/${item.financial_product_no}`,
    query: {
      item: JSON.stringify(item)
    }
  });
}
// 카드 상세 페이지로 이동
const gotoCardDetail = (item) => {
  router.push({
    path: `/Card/${item.card_no}`,
    query: {
      item: JSON.stringify(item),
    },
  });
};
const cards = ref([
  {
    card_no: 1,
    corp_name: "삼성카드",
    card_name: "삼성카드 taptap O",
    category: "식비",
    card_img_url: "https://d1c5n4ri2guedi.cloudfront.net/card/49/card_img/27705/49card.png",
    name: '[KB]Our WE_SH 카드',
  },
  {
    card_no: 1,
    corp_name: "삼성카드",
    card_name: "삼성카드 taptap O",
    category: "식비",
    card_img_url: "https://d1c5n4ri2guedi.cloudfront.net/card/49/card_img/27705/49card.png",
    name: '[KB]Our WE_SH 카드',
  },
]);

// 모달 트리거를 위한 ref
const modalTrigger = ref(null);
// 메뉴를 위한 ref
const menuButton = ref(null);

onMounted(async () => {
  await getUser();
  await getSpendingCounts();

  // DOM이 렌더링된 후 초기화
  await nextTick();

  // 모달 트리거
  if (modalTrigger.value) {
    modalTrigger.value.click();
  }

  // 메뉴 초기화 (만약 `KTMenu`를 사용 중이라면)
  if (window.KTMenu && menuButton.value) {
    window.KTMenu.createInstances();
  }

  setDataList();
});
</script>

<style scoped>
table#kt_datatable_column_rendering tr {
  border-bottom: none !important;
  /* 구분선 제거 */
}
</style>