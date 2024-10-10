<template>
  <div>
  <div class="justify-content-center align-items-center text-center bg-title">
    <h1 class="text-gray-900 fw-bold pt-8 mt-9 my-1" style="font-size: xx-large;">적금 상품</h1>
    <h2 class="text-gray-700 fw-bold p-4 fs-2">
      자신에게 맞는 조건을 선택하여 맞춤 적금 상품을 확인해보세요.
    </h2>
  </div>
    <!-- <Banner titleText="적금 상품" descriptionText="안정적인 수익을 목적으로 하는 사랑 받는 적금 상품입니다." /> -->
    <!-- 탭 -->
    <div class="m-5">
      <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
        <li class="nav-item">
          <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/Deposit" exact-active-class="active"
            style="font-size: 20px;">
            예금
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/InstallmentSavings"
            exact-active-class="active" style="font-size: 20px; font-weight: bold; color: #216DBE;">
            적금
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/Card" exact-active-class="active"
            style="font-size: 20px;">
            카드
          </router-link>
        </li>
      </ul>
    </div>

    <div class="tab-content" id="myTabContent" style="margin-top: -30px;">
      <!-- 적금 탭 내용 -->
      <div class="m-5 mb-1">
        <!-- 검색어 필터링 -->
        <div class="card mb-10">
          <!-- 검색어 -->
          <div class="card-body">
            <label class="fs-6 form-label fw-bold text-gray-900 me-3">검색</label>
            <div class="d-flex align-items-center">
              <div class="position-relative w-md-600px me-2">
                <i class="ki-duotone ki-magnifier fs-3 text-gray-500 position-absolute top-50 translate-middle ms-6">
                  <span class="path1"></span>
                  <span class="path2"></span>
                </i>
                <input v-model="searchInstallment" @keyup.enter="searchEnter" type="text" class="form-control form-control-solid ps-10"
                  placeholder="은행명, 적금 상품명을 입력해주세요.">
              </div>
              <div>
                <button class="btn btn-primary px-4" @click="searchEnter">검색</button>
              </div>
            </div>
          </div>


          <!-- 가입 기간 필터 -->
          <div class="m-5 mb-1 ms-10">
            <div class="col-lg-6">
              <label class="fs-6 form-label fw-bold text-gray-900">가입 기간</label>
              <div class="nav-group nav-group-fluid">
                <label v-for="period in periods" :key="period.value">
                  <input v-model="selectedPeriod" type="radio" class="btn-check" :value="period.value" />
                  <span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">{{ period.label
                    }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- 이자 계산 방식 필터 -->
          <div class="m-5 mb-1 ms-10">
            <div class="col-lg-6">
              <label class="fs-6 form-label fw-bold text-gray-900 mb-5">이자 계산 방식</label>
              <div class="nav-group nav-group-fluid">
                <label v-for="intType in interestTypes" :key="intType.value">
                  <input v-model="selectedInttype" type="radio" class="btn-check" :value="intType.value" />
                  <span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">{{ intType.label
                    }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- 가입 대상 필터 -->
          <div class="m-5 mb-1 ms-10">
            <label class="fs-6 form-label fw-bold text-gray-900 mb-5">가입 제한</label>
            <div class="d-flex">
              <div class="form-check form-check-custom form-check-solid mb-5 me-5" v-for="member in memberOptions"
                :key="member.value">
                <input v-model="selectedMember" class="form-check-input" type="checkbox"
                  :id="'deposit_search_Membery_' + member.value" :value="member.value" />
                <label class="form-check-label flex-grow-1 fw-semibold fs-6"
                  :class="{ 'selected-color': selectedMember.includes(member.value), 'default-color': !selectedMember.includes(member.value) }"
                  :for="'deposit_search_Membery_' + member.value">{{ member.label }}</label>
              </div>
            </div>
          </div>

          <!-- 가입 방법 필터 -->
          <div class="m-5 mb-1 ms-10">
            <label class="fs-6 form-label fw-bold text-gray-900 mb-5">가입 방법</label>
            <div class="d-flex">
              <div class="form-check form-check-custom form-check-solid mb-5 me-5"
                v-for="(joinWay, index) in joinWayOptions" :key="index">
                <input v-model="selectedJoinWay" @click="joinWay.value === '전체' ? toggleAllJoinWays() : null"
                  :value="joinWay.value" class="form-check-input" type="checkbox"
                  :id="'deposit_search_category_' + index" />
                <label class="form-check-label flex-grow-1 fw-semibold fs-6"
                  :class="{ 'selected-color': selectedJoinWay.includes(joinWay.value), 'default-color': !selectedJoinWay.includes(joinWay.value) }"
                  :for="'deposit_search_category_' + index">{{ joinWay.label }}</label>
              </div>
            </div>
          </div>

        </div>


        <!-- 적금 상품 리스트 -->
        <div class="m-5">
          <div class="d-flex flex-wrap flex-stack pb-7">
            <!--begin::Title-->
            <div class="d-flex flex-wrap align-items-center my-1">
              <h3 class="fw-bold me-2 my-1">{{ totalInstallmentSavings }} <span class="text-gray-500 fs-6">적금 상품
                  개수</span></h3>
            </div>
            <!--end::Title-->
            <!--begin::Controls-->
            <div class="d-flex flex-wrap my-1">
              <!--begin::Actions-->
              <div class="d-flex my-0">
                <!--begin::Select-->
                <select v-model="selectedSort" class="form-select form-select-solid" data-control="select1"
                  data-placeholder="Select an option" data-hide-search="true">
                  <option value="default" selected>기본 정렬</option>
                  <option value="intr_rate2">최고 금리순</option>
                </select>
                <!--end::Select-->
              </div>
              <!--end::Actions-->
            </div>
            <!--end::Controls-->
          </div>

          <!-- 데이터 테이블 -->
          <table id="kt_datatable_column_rendering" class="table table-striped table-row-bordered gy-5 gs-7">
            <thead>
              <tr class="fw-semibold fs-6 text-gray-800">
                <th>은행</th>
                <th>상품명</th>
                <th>기본 금리</th>
                <th>최고 금리</th>
                <th>상세 정보</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in sortedDataList" :key="index">
                <td>
                  <img :src="item.imgUrl" width="28" height="24" loading="eager" />
                  {{ item.korCoNm }}
                </td>
                <td>{{ item.finPrdtNm }}</td>
                <td>{{ item.intrRate }}</td>
                <td>{{ item.intrRate2 }}</td>
                <td>
                  <a class="btn btn-sm btn-primary me-3" @click="gotoInstallmentDetail(item)">자세히 보기</a>
                </td>
              </tr>
            </tbody>
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
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </label>
              </div>
            </div>

            <!-- 페이징 -->
            <div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
              <div class="dataTables_paginate paging_simple_numbers">
                <ul class="pagination">
                  <li class="paginate_button page-item" :class="{ 'disabled': currentPage === 1 }">
                    <a href="#" @click.prevent="changePage(currentPage - 1)" class="page-link">이전</a>
                  </li>
                  <li v-for="page in visiblePages" :key="page" class="paginate_button page-item"
                    :class="{ 'active': currentPage === page }">
                    <a href="#" @click.prevent="changePage(page)" class="page-link">{{ page }}</a>
                  </li>
                  <li class="paginate_button page-item" :class="{ 'disabled': currentPage === totalPages }">
                    <a href="#" @click.prevent="changePage(currentPage + 1)" class="page-link">다음</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref, computed, watch, onMounted } from 'vue';
import axios from 'axios';

const router = useRouter();

// 데이터를 가져오기 위한 일시적 데이터 변수
const dataList = ref([]);

const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/product/02');
    dataList.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);  // 에러를 콘솔에 출력
  }
};

// 컴포넌트가 마운트될 때 데이터를 가져오기
onMounted(() => {
  getProducts();
});

// 컴포넌트가 마운트될 때 데이터를 가져오기
onMounted (async() => {
  try {
    const response = await axios.get('http://localhost:8080/product/02');
    dataList.value = response.data;
    console.log(dataList.value);
  } catch (error) {
    console.error('Error fetching data:', error);  // 에러를 콘솔에 출력
  }
});

// 필터링 상태 관리
const searchInstallment = ref('');
const selectedPeriod = ref('전체');
const selectedInttype = ref('전체');
const selectedMember = ref(["제한없음", "제한있음"]);
const selectedJoinWay = ref(["전체", "영업점", "인터넷", "스마트폰", "모집인", "전화(텔레뱅킹)"]);

// 페이지네이션 상태
const itemsPerPage = ref(10);
const currentPage = ref(1);
const selectedSort = ref('default');

// 가입 기간 옵션 배열
const periods = ref([
  { label: '전체', value: '전체' },
  { label: '1개월', value: 1 },
  { label: '3개월', value: 3 },
  { label: '1년', value: 12 },
  { label: '2년', value: 24 },
  { label: '3년', value: 36 },
]);

// 이자 계산 방식 옵션 배열
const interestTypes = ref([
  { label: '전체', value: '전체' },
  { label: '단리', value: '단리' },
  { label: '복리', value: '복리' },
]);

// 가입 제한 필터 옵션 배열 
const memberOptions = ref([
  { label: '제한 없음', value: '제한없음' },
  { label: '제한 있음(서민 전용, 일부제한)', value: '제한있음' },
]);

// 가입 방법 필터 옵션 배열
const joinWayOptions = ref([
  { label: '전체', value: '전체' },
  { label: '영업점', value: '영업점' },
  { label: '인터넷', value: '인터넷' },
  { label: '스마트폰', value: '스마트폰' },
  { label: '모집인', value: '모집인' },
  { label: '전화(텔레뱅킹)', value: '전화(텔레뱅킹)' },
]);

// '전체' 체크박스의 클릭 동작 처리
const filteredDataList = computed(() => {
  return dataList.value.filter(item => {
    const matchesSearch = item.finPrdtNm.includes(searchInstallment.value) || item.korCoNm.includes(searchInstallment.value);
    const matchesPeriod = selectedPeriod.value === '전체' || item.saveTrm === selectedPeriod.value;
    const matchesInttype = selectedInttype.value === '전체' || item.intrRateTypeNm === selectedInttype.value;
    const matchesMemberCheck = selectedMember.value.includes('제한없음') && item.joinMember === '제한없음'
      || selectedMember.value.includes('제한있음') && item.joinMember !== '제한없음';
    const matchesJoinWayCheck = selectedJoinWay.value.includes('전체') || selectedJoinWay.value.some(joinWay => item.joinWay.includes(joinWay));
    

    return matchesSearch && matchesPeriod && matchesInttype && matchesMemberCheck && matchesJoinWayCheck;
  });
});

// 정렬된 데이터 계산
const sortedDataList = computed(() => {
  const data = [...filteredDataList.value];
  if (selectedSort.value === 'intr_rate2') {
    data.sort((a, b) => parseFloat(b.intr_rate2) - parseFloat(a.intr_rate2));
  }
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return data.slice(start, start + itemsPerPage.value);
});

// 체크박스 상태 변경 감시
watch(selectedJoinWay, (newVal) => {
  if (newVal.length === 6 && !newVal.includes('전체')) {
    selectedJoinWay.value = ["전체", "영업점", "인터넷", "스마트폰", "모집인", "전화(텔레뱅킹)"];
  } else if (newVal.length < 6 && newVal.includes('전체')) {
    selectedJoinWay.value = newVal.filter(option => option !== '전체');
  }
});

const allJoinWays = ["전체", "영업점", "인터넷", "스마트폰", "모집인", "전화(텔레뱅킹)"];
// 체크박스 동작 처리
const toggleAllJoinWays = () => {
  selectedJoinWay.value = selectedJoinWay.value.includes('전체') ? [] : allJoinWays;
};

// 검색 버튼
const selectEnter = () =>{
  if (searchInstallment.value) {
    alert(`검색어: ${searchInstallment.value}`);
  } else {
    alert('검색어를 입력해주세요.');
  }
};

// 데이터 총 개수 계산
const totalInstallmentSavings = computed(() => filteredDataList.value.length);

// 총 페이지 수 계산
const totalPages = computed(() => Math.ceil(filteredDataList.value.length / itemsPerPage.value));


// 페이지 변경
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
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

// 상세 정보로 이동
const gotoInstallmentDetail = (item) => {
  router.push({
    path: `/installmentSavings/${item.financial_product_no}`,
    query: {
      item: JSON.stringify(item)
    },
  });
};
</script>

<style>
.selected-color {
  color: #00A3FF;
}

.default-color {
  color: #98A1B7;
}
.bg-title {
  background-color: #f0f6f9; /* Powder Blue 색상 */
  height: 180px;

}
</style>