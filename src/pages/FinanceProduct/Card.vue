<template>
    <div class="justify-content-center align-items-center text-center bg-title">
    <h1 class="text-gray-900 fw-bold pt-8 mt-9 my-1" style="font-size: xx-large;">카드 상품</h1>
    <h2 class="text-gray-700 fw-bold p-4 fs-2">
      자신에게 맞는 조건을 선택하여 맞춤 카드 상품을 확인해보세요.
    </h2>
  </div>
    <!-- 탭 -->
    <div class="m-5">
        <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
            <li class="nav-item">
                <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/Deposit"
                    exact-active-class="active" style="font-size: 20px;">
                    예금
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/InstallmentSavings"
                    exact-active-class="active" style="font-size: 20px; ">
                    적금
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/Card" exact-active-class="active"
                    style="font-size: 20px; font-weight: bold; color: #216DBE;">
                    카드
                </router-link>
            </li>
        </ul>
    </div>

    <div class="tab-content" id="myTabContent" style="margin-top: -30px;">
        <!-- 카드 탭 내용 -->
        <div class="m-5 mb-1">
            <!-- 검색어 필터링 -->
            <div class="card mb-10">
                <div class="d-flex align-items-center">
                    <div class="card-body">
                        <label class="fs-6 form-label fw-bold text-gray-900 me-3">검색</label>
                        <div class="d-flex align-items-center">
                            <div class="position-relative w-md-600px me-2">
                                <i
                                    class="ki-duotone ki-magnifier fs-3 text-gray-500 position-absolute top-50 translate-middle ms-6">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                                <input v-model="searchCard" type="text" class="form-control form-control-solid ps-10"
                                    placeholder="은행명, 카드명을 입력해주세요.">
                            </div>
                            <div>
                                <button class="btn btn-primary px-4" @click="searchFunction">검색</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 카드 카테고리 탭 -->
            <div class="m-5">
                <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
                    <li v-for="(item, index) in tabList" :key="index" class="nav-item">
                        <a href="#" :class="['nav-link', { 'active': selectedTab === item }]"
                            @click.prevent="selectTab(item)">
                            <h3 class="tab-title">{{ item }}</h3>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- 카드 상품 리스트 -->
            <div class="mt-5">
                <div class="d-flex flex-wrap flex-stack">
                    <!--begin::Title-->
                    <div class="d-flex flex-wrap align-items-center my-1">
                        <h3 class="fw-bold me-5 my-1 ms-5">{{ filteredCards.length }}
                            <span class="text-gray-500 fs-6">카드 상품 개수</span>
                        </h3>
                    </div>
                    <!--end::Title-->
                </div>
                <!-- 데이터 테이블 -->
                <table id="kt_datatable_column_rendering" class="table table-striped table-row-bordered gy-5 gs-7">
                    <tr v-for="(item, index) in paginatedCards" :key="index">
                        <td>
                            <div class="card card-flush shadow-sm m-5">
                                <div class="card-side d-flex justify-content-between m-7 align-items-center">
                                    <div class="text-center ms-5" style="width: 200px;">
                                        <img :src="item.card_img_url" ref="image" @load="onImageLoad($event)"
                                            style="width: 100px; ">
                                    </div>
                                    <div class="flex-grow-1 ms-10 ">
                                        <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                            <div class="d-flex flex-column">
                                                <div class="d-flex align-items-center mb-1">
                                                    <a href="#"
                                                        class="text-gray-800 text-hover-primary fs-2 fw-bold me-3">{{
                                                            item.copr_name }} {{ item.card_name }}</a>
                                                </div>
                                            </div>
                                            <div class="d-flex mb-4">
                                                <a @click="gotoCardDetail(item)" href="#"
                                                    class="btn btn-sm btn-primary me-3" data-bs-toggle="modal"
                                                    data-bs-target="#kt_modal_new_target">자세히
                                                    보기</a>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-wrap justify-content-start">
                                            <!--begin::Stats-->
                                            <div class="d-flex flex-wrap">
                                                <div
                                                    class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div class="fs-4 fw-bold">전기/수소차 충전</div>
                                                    </div>
                                                    <div class="fw-semibold fs-6 text-gray-500">
                                                        20% 청구 할인</div>
                                                </div>
                                                <div
                                                    class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div class="fs-4 fw-bold">주차, 세차</div>
                                                    </div>
                                                    <div class="fw-semibold fs-6 text-gray-500">
                                                        20% 청구 할인</div>
                                                </div>
                                                <div
                                                    class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div class="fs-4 fw-bold">OTT</div>
                                                    </div>
                                                    <div class="fw-semibold fs-6 text-gray-500">20% 청구 할인</div>
                                                </div>
                                            </div>
                                            <!--end::Stats-->
                                        </div>
                                        <!--end::Info-->
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

                <!-- 페이지네이션 -->
                <div id="" class="row">
                    <!-- 페이지 개수 -->
                    <div id=""
                        class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                        <div class="dataTables_length" id="">
                            <label>
                                <select v-model="itemsPerPage" @change="currentPage = 1"
                                    class="form-select form-select-sm form-select-solid">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <!-- 페이징 -->
                    <div
                        class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                        <div class="dataTables_paginate paging_simple_numbers">
                            <ul class="pagination">
                                <li class="paginate_button page-item" :class="{ 'disabled': currentPage === 1 }">
                                    <a href="#" @click.prevent="changePage(currentPage - 1)" class="page-link">이전</a>
                                </li>

                                <li v-for="page in visiblePages" :key="page" class="paginate_button page-item"
                                    :class="{ 'active': currentPage === page }">
                                    <a href="#" @click.prevent="changePage(page)" class="page-link">{{ page }}</a>
                                </li>

                                <li class="paginate_button page-item"
                                    :class="{ 'disabled': currentPage === totalPages }">
                                    <a href="#" @click.prevent="changePage(currentPage + 1)" class="page-link">다음</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import Banner from "@/components/common/Banner.vue";

const router = useRouter();

// 탭 리스트 및 카드 데이터
const tabList = ['전체', '식비', '여가', '교통', '의료', '통신', '교육'];

const image = ref(null);
const cards = ref([]); // 카드 데이터를 담을 ref

// 컴포넌트가 마운트될 때 데이터를 가져오기
onMounted(async () => {
    try {
        const response = await fetch('/assets/cardList.json');
        cards.value = await response.json();
    } catch (error) {
        alert('Error fetching data:', error);
    }
});

// 이미지 로드 시 호출되는 함수
// const onImageLoad = (event) => {
//   const img = event.target;
//   const width = img.naturalWidth;
//   const height = img.naturalHeight;

//   // 세로가 가로보다 크면 90도 회전
//   if (height > width) {
//     img.style.transform = 'rotate(90deg)';
//     // img.style.height = '300px'; // 세로 길이를 180px로 설정
//     // img.style.width = '285px'; // 가로는 자동으로 설정
//     // img.style.objectFit = 'contain';
//   }
// };

// 선택된 탭과 검색어 관리
const selectedTab = ref('전체');
const searchInstallment = ref('');

// 페이지네이션 상태
const itemsPerPage = ref(5);
const currentPage = ref(1);

// 필터링된 카드 리스트 계산
const filteredCards = computed(() => {
    return cards.value.filter(card => {
        return (selectedTab.value === '전체' || card.category === selectedTab.value);
    });
});

// 페이지네이션을 적용한 카드 리스트 계산
const paginatedCards = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return filteredCards.value.slice(start, start + itemsPerPage.value);
});

// 총 페이지 수 계산
const totalPages = computed(() => {
    return Math.ceil(filteredCards.value.length / itemsPerPage.value);
});

// 페이지 변경 메서드
const changePage = (page) => {
    if (page < 1 || page > totalPages.value) return;
    currentPage.value = page;
};

// 탭 선택 시 호출되는 함수
const selectTab = (tab) => {
    selectedTab.value = tab;
    currentPage.value = 1;
};

// 현재 페이지 기준으로 이전 2페이지, 이후 2페이지를 계산하는 computed 속성
const visiblePages = computed(() => {
    let pages = [];
    let startPage = Math.max(currentPage.value - 2, 1);
    let endPage = Math.min(currentPage.value + 2, totalPages.value);

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return pages;
});

// 상세 페이지로 이동
const gotoCardDetail = (item) => {
    router.push({
        path: `/Card/${item.card_no}`,
        query: {
            item: JSON.stringify(item),
        },
    });
};
</script>

<style scoped>
.nav-tabs .nav-link.active {
    color: #216DBE;
    font-weight: bold;
    border-bottom: 2px solid #216DBE;
}
.bg-title {
  background-color: #f0f6f9; /* Powder Blue 색상 */
  height: 180px;

}
</style>
