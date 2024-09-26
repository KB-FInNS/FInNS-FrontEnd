<template>
  <div>
    <!-- 탭 -->
    <div class="m-5">
      <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
        <li class="nav-item">
          <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/Deposit" exact-active-class="active"
            style="font-size: 20px; font-weight: bold; color: #216DBE;">
            예금
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/InstallmentSavings"
            exact-active-class="active" style="font-size: 20px;">
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

    <div class="tab-content" id="myTabContent">
      <!-- 예금 탭 내용-->
      <div class="m-5 mb-1">
        <div class="card mb-10">
          <!-- 검색 입력 -->
          <div class="card-body">
            <div class="col-lg-6">
              <label class="fs-6 form-label fw-bold text-gray-900">검색</label>
              <div class="d-flex align-items-center">
                <div class="position-relative w-md-550px me-md-2">
                  <i class="ki-duotone ki-magnifier fs-3 text-gray-500 position-absolute top-50 translate-middle ms-6">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <input v-model="searchDeposit" type="text" class="form-control form-control-solid ps-10"
                    placeholder="은행명, 예금 상품명을 입력해주세요.">
                </div>
              </div>
            </div>
          </div>

          <!-- 가입 기간 필터 -->
          <div class="m-5 mb-1 ms-10">
            <div class="col-lg-6">
              <label class="fs-6 form-label fw-bold text-gray-900">가입 기간</label>
              <div class="nav-group nav-group-fluid">
                <label><input v-model="selectedPeriod" type="radio" class="btn-check" name="depositPeriod" value="전체"
                    checked /><span
                    class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">전체</span></label>
                <label><input v-model="selectedPeriod" type="radio" class="btn-check" name="depositPeriod"
                    value="1" /><span
                    class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">1개월</span></label>
                <label><input v-model="selectedPeriod" type="radio" class="btn-check" name="depositPeriod"
                    value="3" /><span
                    class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">3개월</span></label>
                <label><input v-model="selectedPeriod" type="radio" class="btn-check" name="depositPeriod"
                    value="12" /><span
                    class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">1년</span></label>
                <label><input v-model="selectedPeriod" type="radio" class="btn-check" name="depositPeriod"
                    value="24" /><span
                    class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">2년</span></label>
                <label><input v-model="selectedPeriod" type="radio" class="btn-check" name="depositPeriod"
                    value="36" /><span
                    class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">3년</span></label>
              </div>
            </div>
          </div>

          <!-- 이자 계산 방식 필터 -->
          <div class="m-5 mb-1 ms-10">
            <div class="col-lg-6">
              <label class="fs-6 form-label fw-bold text-gray-900 mb-5">이자 계산 방식</label>
              <div class="nav-group nav-group-fluid">
                <label><input v-model="selectedInttype" type="radio" class="btn-check" value="전체" checked /><span
                    class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">전체</span></label>
                <label><input v-model="selectedInttype" type="radio" class="btn-check" value="단리" /><span
                    class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">단리</span></label>
                <label><input v-model="selectedInttype" type="radio" class="btn-check" value="복리" /><span
                    class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">복리</span></label>
              </div>
            </div>
          </div>

          <!-- 가입 대상 필터 -->
          <div class="m-5 mb-1 ms-10">
            <label class="fs-6 form-label fw-bold text-gray-900 mb-5">가입 제한</label>
            <div class="d-flex">
              <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                <input v-model="selectedMember" class="form-check-input" type="checkbox" id="deposit_search_Membery_1"
                  value="제한없음" />
                <label class="form-check-label flex-grow-1 fw-semibold fs-6"
                  :class="{ 'selected-color': selectedMember.includes('제한없음'), 'default-color': !selectedMember.includes('제한없음') }"
                  for="deposit_search_Membery_1">제한 없음
                </label>
              </div>
              <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                <input v-model="selectedMember" class="form-check-input" type="checkbox" id="deposit_search_Membery_2"
                  value="제한있음" />
                <label class="form-check-label flex-grow-1 fw-semibold fs-6"
                  :class="{ 'selected-color': selectedMember.includes('제한있음'), 'default-color': !selectedMember.includes('제한있음') }"
                  for="deposit_search_Membery_2">제한 있음(서민 전용, 일부제한)
                </label>
              </div>
            </div>
          </div>

          <!-- 가입 방법 필터 -->
          <div class="m-5 mb-1 ms-10">
            <label class="fs-6 form-label fw-bold text-gray-900 mb-5">가입 방법</label>
            <div class="d-flex">
              <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                <input v-model="selectedJoinWay" @click="toggleAllJoinWays" value="전체" class="form-check-input"
                  type="checkbox" id="deposit_search_period_1">
                <label class="form-check-label flex-grow-1 fw-semibold fs-6"
                  :class="{ 'selected-color': selectedJoinWay.includes('전체'), 'default-color': !selectedJoinWay.includes('전체') }"
                  for="deposit_search_period_1">전체
                </label>
              </div>
              <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                <input v-model="selectedJoinWay" value="영업점" class="form-check-input" type="checkbox"
                  id="deposit_search_category_2" />
                <label class="form-check-label flex-grow-1 fw-semibold fs-6"
                  :class="{ 'selected-color': selectedJoinWay.includes('영업점'), 'default-color': !selectedJoinWay.includes('영업점') }"
                  for="deposit_search_category_2">영업점
                </label>
              </div>
              <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                <input v-model="selectedJoinWay" value="인터넷" class="form-check-input" type="checkbox"
                  id="deposit_search_category_3" />
                <label class="form-check-label flex-grow-1 fw-semibold fs-6"
                  :class="{ 'selected-color': selectedJoinWay.includes('인터넷'), 'default-color': !selectedJoinWay.includes('인터넷') }"
                  for="deposit_search_category_3">인터넷
                </label>
              </div>
              <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                <input v-model="selectedJoinWay" value="스마트폰" class="form-check-input" type="checkbox"
                  id="deposit_search_category_4" />
                <label class="form-check-label flex-grow-1 fw-semibold fs-6"
                  :class="{ 'selected-color': selectedJoinWay.includes('스마트폰'), 'default-color': !selectedJoinWay.includes('스마트폰') }"
                  for="deposit_search_category_4">스마트폰
                </label>
              </div>
              <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                <input v-model="selectedJoinWay" value="모집인" class="form-check-input" type="checkbox"
                  id="deposit_search_category_5" />
                <label class="form-check-label flex-grow-1 fw-semibold fs-6"
                  :class="{ 'selected-color': selectedJoinWay.includes('모집인'), 'default-color': !selectedJoinWay.includes('모집인') }"
                  for="deposit_search_category_5">모집인
                </label>
              </div>
              <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                <input v-model="selectedJoinWay" value="전화(텔레뱅킹)" class="form-check-input" type="checkbox"
                  id="deposit_search_category_6" />
                <label class="form-check-label flex-grow-1 fw-semibold fs-6"
                  :class="{ 'selected-color': selectedJoinWay.includes('전화(텔레뱅킹)'), 'default-color': !selectedJoinWay.includes('전화(텔레뱅킹)') }"
                  for="deposit_search_category_6">전화(텔레뱅킹)
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- 예금 상품 리스트 -->
        <div class="m-5">
          <div class="d-flex flex-wrap flex-stack pb-7">
            <!--begin::Title-->
            <div class="d-flex flex-wrap align-items-center my-1">
              <h3 class="fw-bold me-2 my-1">{{ totalDeposit }} <span class="text-gray-500 fs-6">예금 상품 개수</span></h3>
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
                  <li class="paginate_button page-item" v-for="page in totalPages" :key="page"
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
import { ref, computed, watch } from 'vue';

// 일시적인 데이터set
const dataList = [
  {
    save_trm: '12',
    intr_rate_type_nm: '단리',
    join_member: '제한없음',
    join_way: '인터넷',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_KB_Symbol.png',
    kor_co_nm: 'KB국민은행',
    fin_prdt_nm: '주택청약종합저축',
    intr_rate: '1.5%',
    intr_rate2: '3.5%',
  },
  {
    save_trm: '24',
    intr_rate_type_nm: '단리',
    join_member: '제한없음',
    join_way: '스마트폰',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_SHINHAN_Symbol.png',
    kor_co_nm: '신한은행',
    fin_prdt_nm: '자유적립예금',
    intr_rate: '1.7%',
    intr_rate2: '3.8%',
  },
  {
    save_trm: '36',
    intr_rate_type_nm: '복리',
    join_member: '일부제한',
    join_way: '영업점',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_WOORI_Symbol.png',
    kor_co_nm: '우리은행',
    fin_prdt_nm: '정기예금',
    intr_rate: '2.0%',
    intr_rate2: '4.0%',
  },
  {
    save_trm: '12',
    intr_rate_type_nm: '단리',
    join_member: '서민 전용',
    join_way: '모집인',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_HANA_Symbol.png',
    kor_co_nm: '하나은행',
    fin_prdt_nm: '비과세저축',
    intr_rate: '1.8%',
    intr_rate2: '3.9%',
  },
  {
    save_trm: '3',
    intr_rate_type_nm: '복리',
    join_member: '서민 전용',
    join_way: '모집인',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_HANA_Symbol.png',
    kor_co_nm: '하나은행',
    fin_prdt_nm: '비과세저축',
    intr_rate: '1.8%',
    intr_rate2: '3.9%',
  },
  {
    save_trm: '1',
    intr_rate_type_nm: '복리',
    join_member: '서민 전용',
    join_way: '모집인',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_HANA_Symbol.png',
    kor_co_nm: '하나은행',
    fin_prdt_nm: '비과세저축',
    intr_rate: '1.8%',
    intr_rate2: '3.9%',
  },
  {
    save_trm: '1',
    intr_rate_type_nm: '단리',
    join_member: '서민 전용',
    join_way: '모집인',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_HANA_Symbol.png',
    kor_co_nm: '하나은행',
    fin_prdt_nm: '비과세저축',
    intr_rate: '1.8%',
    intr_rate2: '3.9%',
  },
  {
    save_trm: '1',
    intr_rate_type_nm: '단리',
    join_member: '서민 전용',
    join_way: '모집인',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_HANA_Symbol.png',
    kor_co_nm: '하나은행',
    fin_prdt_nm: '비과세저축',
    intr_rate: '1.8%',
    intr_rate2: '3.9%',
  },
  {
    save_trm: '12',
    intr_rate_type_nm: '복리',
    join_member: '제한없음',
    join_way: '인터넷',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_KB_Symbol.png',
    kor_co_nm: 'KB국민은행',
    fin_prdt_nm: '정기예금',
    intr_rate: '1.9%',
    intr_rate2: '4.2%',
  },
  {
    save_trm: '24',
    intr_rate_type_nm: '단리',
    join_member: '서민 전용',
    join_way: '스마트폰',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_SHINHAN_Symbol.png',
    kor_co_nm: '신한은행',
    fin_prdt_nm: '장기예금',
    intr_rate: '2.1%',
    intr_rate2: '4.5%',
  },
  {
    save_trm: '36',
    intr_rate_type_nm: '복리',
    join_member: '제한없음',
    join_way: '영업점',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_WOORI_Symbol.png',
    kor_co_nm: '우리은행',
    fin_prdt_nm: '정기적금',
    intr_rate: '2.5%',
    intr_rate2: '5.0%',
  },
  {
    save_trm: '12',
    intr_rate_type_nm: '단리',
    join_member: '일부제한',
    join_way: '모집인',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_HANA_Symbol.png',
    kor_co_nm: '하나은행',
    fin_prdt_nm: '주택청약저축',
    intr_rate: '1.6%',
    intr_rate2: '3.6%',
  },
  {
    save_trm: '24',
    intr_rate_type_nm: '복리',
    join_member: '서민 전용',
    join_way: '모집인',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_KB_Symbol.png',
    kor_co_nm: 'KB국민은행',
    fin_prdt_nm: '세이프저축',
    intr_rate: '2.2%',
    intr_rate2: '4.8%',
  },
  {
    save_trm: '6',
    intr_rate_type_nm: '단리',
    join_member: '제한없음',
    join_way: '인터넷',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_WOORI_Symbol.png',
    kor_co_nm: '우리은행',
    fin_prdt_nm: '정기예금',
    intr_rate: '1.4%',
    intr_rate2: '3.2%',
  },
  {
    save_trm: '1',
    intr_rate_type_nm: '복리',
    join_member: '일부제한',
    join_way: '모집인',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_SHINHAN_Symbol.png',
    kor_co_nm: '신한은행',
    fin_prdt_nm: '정기적금',
    intr_rate: '1.9%',
    intr_rate2: '3.5%',
  },
  {
    save_trm: '3',
    intr_rate_type_nm: '단리',
    join_member: '서민 전용',
    join_way: '영업점',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_HANA_Symbol.png',
    kor_co_nm: '하나은행',
    fin_prdt_nm: '비과세예금',
    intr_rate: '1.7%',
    intr_rate2: '4.1%',
  },
  {
    save_trm: '6',
    intr_rate_type_nm: '복리',
    join_member: '제한없음',
    join_way: '스마트폰',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_WOORI_Symbol.png',
    kor_co_nm: '우리은행',
    fin_prdt_nm: '자유적립예금',
    intr_rate: '2.4%',
    intr_rate2: '4.9%',
  },
  {
    save_trm: '12',
    intr_rate_type_nm: '단리',
    join_member: '서민 전용',
    join_way: '인터넷',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_KB_Symbol.png',
    kor_co_nm: 'KB국민은행',
    fin_prdt_nm: '정기예금',
    intr_rate: '1.8%',
    intr_rate2: '4.0%',
  },
  {
    save_trm: '36',
    intr_rate_type_nm: '복리',
    join_member: '일부제한',
    join_way: '영업점',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_SHINHAN_Symbol.png',
    kor_co_nm: '신한은행',
    fin_prdt_nm: '단기예금',
    intr_rate: '2.2%',
    intr_rate2: '4.5%',
  },
  {
    save_trm: '24',
    intr_rate_type_nm: '단리',
    join_member: '서민 전용',
    join_way: '모집인',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_WOORI_Symbol.png',
    kor_co_nm: '우리은행',
    fin_prdt_nm: '비과세저축',
    intr_rate: '1.5%',
    intr_rate2: '3.8%',
  },
  {
    save_trm: '6',
    intr_rate_type_nm: '단리',
    join_member: '제한없음',
    join_way: '스마트폰',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_HANA_Symbol.png',
    kor_co_nm: '하나은행',
    fin_prdt_nm: '주택청약종합저축',
    intr_rate: '1.9%',
    intr_rate2: '3.9%',
  },
  {
    save_trm: '1',
    intr_rate_type_nm: '복리',
    join_member: '서민 전용',
    join_way: '모집인',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_WOORI_Symbol.png',
    kor_co_nm: '우리은행',
    fin_prdt_nm: '단기예금',
    intr_rate: '1.6%',
    intr_rate2: '4.0%',
  },
  {
    save_trm: '12',
    intr_rate_type_nm: '단리',
    join_member: '제한없음',
    join_way: '영업점',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_SHINHAN_Symbol.png',
    kor_co_nm: '신한은행',
    fin_prdt_nm: '정기예금',
    intr_rate: '1.8%',
    intr_rate2: '4.3%',
  },
  {
    save_trm: '36',
    intr_rate_type_nm: '복리',
    join_member: '서민 전용',
    join_way: '인터넷',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_KB_Symbol.png',
    kor_co_nm: 'KB국민은행',
    fin_prdt_nm: '자유적립예금',
    intr_rate: '2.3%',
    intr_rate2: '4.7%',
  },
  {
    save_trm: '24',
    intr_rate_type_nm: '단리',
    join_member: '일부제한',
    join_way: '스마트폰',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_WOORI_Symbol.png',
    kor_co_nm: '우리은행',
    fin_prdt_nm: '정기적금',
    intr_rate: '1.4%',
    intr_rate2: '3.6%',
  },
  {
    save_trm: '1',
    intr_rate_type_nm: '복리',
    join_member: '제한없음',
    join_way: '영업점',
    img_url: 'https://financial.pstatic.net/pie/common-bi/1.9.2/images/BK_SHINHAN_Symbol.png',
    kor_co_nm: '신한은행',
    fin_prdt_nm: '단기적금',
    intr_rate: '2.0%',
    intr_rate2: '4.1%',
  },
];

// const route = useRoute();
// const router = useRouter();

// 검색어
const searchDeposit = ref('');

// 정렬 기준
// const filteredDataList = ref([]);
const selectedSort = ref('default');

// 필터링 및 선택 상태를 위한 상태 관리 변수 추가
const selectedPeriod = ref('전체'); // 기본적으로 'all' 설정
const selectedInttype = ref('전체'); // 기본적으로 'all' 설정
const selectedMember = ref(["제한없음", "제한있음"]);   // 기본값으로 배열 설정
const selectedJoinWay = ref(["전체", "영업점", "인터넷", "스마트폰", "모집인", "전화(텔레뱅킹)"]); // 기본적으로 "전체"가 체크된 상태로 설정
const itemsPerPage = ref(10); // 한 페이지에 보여줄 아이템 수
const currentPage = ref(1); // 현재 페이지


// '전체' 체크박스의 클릭 동작을 처리
const toggleAllJoinWays = () => {
  if (selectedJoinWay.value.includes('전체')) {
    // "전체"가 선택된 상태라면 모든 옵션을 활성화
    selectedJoinWay.value = [];
  } else {
    // "전체"가 선택되지 않은 상태라면 "전체"를 선택
    selectedJoinWay.value = ["전체", "영업점", "인터넷", "스마트폰", "모집인", "전화(텔레뱅킹)"];
  }
};

// 다른 체크박스의 상태를 감지하여 "전체" 체크박스 해제
watch(selectedJoinWay, (newVal) => {
  // 모든 항목이 선택되어 있으면 '전체' 체크박스도 선택
  if (newVal.length === 6 && !newVal.includes('전체')) {
    selectedJoinWay.value = ["전체", "영업점", "인터넷", "스마트폰", "모집인", "전화(텔레뱅킹)"];
  }
  // 하나라도 체크가 해제되면 '전체' 체크박스를 해제
  else if (newVal.length < 6 && newVal.includes('전체')) {
    selectedJoinWay.value = newVal.filter(option => option !== '전체');
  }
});

  // 필터링된 데이터 리스트 계산
const filteredDataList = computed(() => {
  return dataList.filter(item => {
    const matchesSearch = item.fin_prdt_nm.includes(searchDeposit.value) || item.kor_co_nm.includes(searchDeposit.value);
    const matchesPeriod = selectedPeriod.value === '전체' || item.save_trm === selectedPeriod.value;
    const matchesInttype = selectedInttype.value === '전체' || item.intr_rate_type_nm === selectedInttype.value;
    const matchesMemberCheck = selectedMember.value.includes('제한없음') && item.join_member === '제한없음'
      || selectedMember.value.includes('제한있음') && item.join_member !== '제한없음';
    const matchesJoinWayCheck = selectedJoinWay.value.includes('전체') || selectedJoinWay.value.includes(item.join_way);

    return matchesSearch && matchesPeriod && matchesInttype && matchesMemberCheck && matchesJoinWayCheck;
  });
});


// // 데이터 총 개수
const totalDeposit = computed(() => filteredDataList.value.length);

// 총 페이지 수 계산
const totalPages = computed(() => {
  return Math.ceil(filteredDataList.value.length / itemsPerPage.value);
});

// 정렬된 데이터 리스트 계산
const sortedDataList = computed(() => {
  const data = [...filteredDataList.value];

  if (selectedSort.value === 'intr_rate2Desc') {
    data.sort((a, b) => parseFloat(b.intr_rate2) - parseFloat(a.intr_rate2));
  }

  const start = (currentPage.value - 1) * itemsPerPage.value;
  return data.slice(start, start + itemsPerPage.value);
});

// 페이지 변경 메서드
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
};

// 자세히 보기 함수 -> 페이지 진행
const viewDetails = (item) => {
  alert(
    `가입기간: ${item.save_trm}\n이자 계산방식: ${item.intr_rate_type_nm}\n가입 대상: ${item.join_member}\n가입 방법: ${item.join_way}\n은행: ${item.kor_co_nm}\n상품: ${item.fin_prdt_nm}\n기본 금리: ${item.intr_rate}\n최대 금리: ${item.intr_rate2}`
  );
};
</script>
<style>
.selected-color {
  color: #00A3FF;
}

.default-color {
  color: #98A1B7;
}
</style>