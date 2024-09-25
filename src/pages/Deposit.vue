<template>
    예금 상품 페이지!!
    <br><br><br>
    <div>
        <!-- 탭 -->
        <div class="m-5">
            <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
                <li class="nav-item">
                    <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/Deposit" exact-active-class="active">
                        <h3 class="tab-title">예금</h3>
                    </router-link>
                    </li>
                <li class="nav-item">
                    <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/InstallmentSavings" exact-active-class="active">
                        <h3 class="tab-title">적금</h3>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/Card" exact-active-class="active">
                        <h3 class="tab-title">카드</h3>
                    </router-link>
                </li>
            </ul>
        </div>
        
        <div class="tab-content" id="myTabContent">
            <!-- 예금 탭 내용-->
            <div class="m-5 mb-1">
                <div class="card mb-10">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <!-- 검색 입력 -->
                            <div class="position-relative w-md-400px me-md-2">
                                <i class="ki-duotone ki-magnifier fs-3 text-gray-500 position-absolute top-50 translate-middle ms-6">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                                <input type="text" class="form-control form-control-solid ps-10" placeholder="예금 상품명을 입력해주세요.">
                            </div>
                            <div class="d-flex align-items-center">
                                <button type="submitSearch" class="btn btn-primary me-5">검색</button>
                            </div>
                        </div>
                    </div>

                    <!-- 가입 기간 필터 -->
                    <div class="m-5 mb-1 ms-10">
                        <div class="col-lg-6">
                            <label class="fs-6 form-label fw-bold text-gray-900">가입 기간</label>
                            <div class="nav-group nav-group-fluid">
                                <label><input type="radio" class="btn-check" name="depositPeriod" value="all" checked><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">전체</span></label>
                                <label><input type="radio" class="btn-check" name="depositPeriod" value="1month"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">1개월</span></label>
                                <label><input type="radio" class="btn-check" name="depositPeriod" value="3months"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">3개월</span></label>
                                <label><input type="radio" class="btn-check" name="depositPeriod" value="1year"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">1년</span></label>
                                <label><input type="radio" class="btn-check" name="depositPeriod" value="2years"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">2년</span></label>
                                <label><input type="radio" class="btn-check" name="depositPeriod" value="3years"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">3년</span></label>
                            </div>
                        </div>
                    </div>

                    <!-- 이자 계산 방식 필터 -->
                    <div class="m-5 mb-1 ms-10">
                        <div class="col-lg-6">
                            <label class="fs-6 form-label fw-bold text-gray-900 mb-5">이자 계산 방식</label>
                            <div class="nav-group nav-group-fluid">
                                <label><input type="radio" class="btn-check" name="depositInterest" value="all" checked><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">전체</span></label>
                                <label><input type="radio" class="btn-check" name="depositInterest" value="simple"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">단리</span></label>
                                <label><input type="radio" class="btn-check" name="depositInterest" value="compound"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">복리</span></label>
                            </div>
                        </div>
                    </div>

                    <!-- 가입 대상 필터 -->
                    <div class="m-5 mb-1 ms-10">
                        <label class="fs-6 form-label fw-bold text-gray-900 mb-5">가입 제한</label>
                        <div class="d-flex">
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="deposit_search_category_1" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="deposit_search_category_1">제한 없음</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="deposit_search_category_2">
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="deposit_search_category_2">제한 있음(서민 전용, 일부제한)</label>
                            </div>
                        </div>
                    </div>

                    <!-- 가입 방법 필터 -->
                    <div class="m-5 mb-1 ms-10">
                        <label class="fs-6 form-label fw-bold text-gray-900 mb-5">가입 방법</label>
                        <div class="d-flex">
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="deposit_search_category_1" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="deposit_search_category_1">전체</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="deposit_search_category_2" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="deposit_search_category_2">영업점</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="deposit_search_category_3" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="deposit_search_category_3">인터넷</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="deposit_search_category_4" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="deposit_search_category_4">스마트폰</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="deposit_search_category_5" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="deposit_search_category_5">모집인</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="deposit_search_category_6" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="deposit_search_category_6">전화(텔레뱅킹)</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 예금 상품 리스트 -->
                <div class="m-5">
                    <div class="d-flex flex-wrap flex-stack pb-7">
                        <!--begin::Title-->
                        <div class="d-flex flex-wrap align-items-center my-1">
                            <h3 class="fw-bold me-5 my-1">57    
                            <span class="text-gray-500 fs-6">예금 상품 개수</span></h3>
                        </div>
                        <!--end::Title-->
                        <!--begin::Controls-->
                        <div class="d-flex flex-wrap my-1">
                            <!--begin::Actions-->
                            <div class="d-flex my-0">
                                <!--begin::Select-->
                                <select v-model="selectedSort" class="form-select form-select-solid" data-control="select1" data-placeholder="Select an option" data-hide-search="true">
                                    <option value="default" selected>기본 정렬</option>
                                    <option value="intr_rate2Desc">최고 금리순</option>
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
                                <img :src="item.img_url" alt="depositkor_co_nm" width="28" height="24" loading="eager" />
                                {{ item.kor_co_nm }}
                            </td>
                            <td>{{ item.fin_prdt_nm }}</td>
                            <td>{{ item.intr_rate }}</td>
                            <td>{{ item.intr_rate2 }}</td>
                            <td>
                                <a href="#" class="btn btn-sm btn-primary me-3" @click="viewDetails(item)">자세히 보기</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                        
                    <!-- 페이지네이션 -->
                    <div id="" class="row">
                        <!-- 페이지 개수 -->
                        <div id="" class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                            <div class="dataTables_length" id="">
                                <label>
                                    <select name="" aria-controls="" class="form-select form-select-sm form-select-solid">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    <!-- 페이징 -->
                        <div id="" class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                            <div class="dataTables_paginate paging_simple_numbers" id="">
                                <ul class="pagination">
                                    <li class="paginate_button page-item previous disabled" id="">
                                        <a href="#" aria-controls="" data-dt-idx="0" tabindex="0" class="page-link">
                                            <i class="previous"></i>
                                        </a>
                                    </li>
                                    <li class="paginate_button page-item active">
                                        <a href="#" aria-controls="" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                                    </li>
                                    <li class="paginate_button page-item next disabled" id="">
                                        <a href="#" aria-controls="" data-dt-idx="2" tabindex="0" class="page-link">
                                            <i class="next"></i>
                                        </a>
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
import { ref, computed } from 'vue';

// 일시적인 데이터set
const dataList = [
{ save_trm: "1개월", intr_rate_type_nm: "단리", join_member: "제한없음", join_way: "인터넷", img_url: "https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_KB_Symbol.png", kor_co_nm: "KB국민은행", fin_prdt_nm: "주택청약종합저축", intr_rate: "1.5%", intr_rate2: "3.5%", },
{ save_trm: "1년", intr_rate_type_nm: "단리", join_member: "제한없음", join_way: "스마트폰", img_url: "https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_SHINHAN_Symbol.png", kor_co_nm: "신한은행", fin_prdt_nm: "자유적립예금", intr_rate: "1.7%", intr_rate2: "3.8%", },
{ save_trm: "3개월", intr_rate_type_nm: "복리", join_member: "일부제한", join_way: "영업점", img_url: "https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_WOORI_Symbol.png", kor_co_nm: "우리은행", fin_prdt_nm: "정기예금", intr_rate: "2.0%", intr_rate2: "4.0%", },
{ save_trm: "1개월", intr_rate_type_nm: "단리", join_member: "서민 전용", join_way: "모집인", img_url: "https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_HANA_Symbol.png", kor_co_nm: "하나은행", fin_prdt_nm: "비과세저축", intr_rate: "1.8%", intr_rate2: "3.9%", }
];

// 정렬된 데이터 리스트를 계산
const selectedSort = ref('default');
const sortedDataList = computed(() => {
    if (selectedSort.value === 'intr_rate2Desc') {
        // 최고 금리 기준 내림차순 정렬
        return [...dataList].sort((a, b) => {
        const rateA = parseFloat(a.intr_rate2);
        const rateB = parseFloat(b.intr_rate2);
        return rateB - rateA;
        });
    }
    // 기본 정렬 (원래 데이터 순서)
    return dataList;
});

// '자세히 보기' 버튼 클릭 시 호출되는 메서드
const viewDetails = (item) => {
    alert(`가입기간: ${item.save_trm}\n이자 계산방식: ${item.intr_rate_type_nm}\n가입 대상:${item.join_member}\n가입 방법:${item.join_way}\n은행: ${item.kor_co_nm}\n상품: ${item.fin_prdt_nm}\n기본 금리: ${item.intr_rate}\n최대 금리: ${item.intr_rate2}`);
};
</script>