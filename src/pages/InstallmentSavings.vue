<template>
    적금 상품 페이지!!
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
            <!-- 적금 탭 내용 -->
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
                                <input type="text" class="form-control form-control-solid ps-10" name="savingsSearch" placeholder="적금 상품명을 입력해주세요.">
                            </div>
                            <div class="d-flex align-items-center">
                                <button type="submit" class="btn btn-primary me-5">검색</button>
                            </div>
                        </div>
                    </div>

                    <!-- 가입 기간 필터 -->
                    <div class="m-5 mb-1 ms-10">
                        <div class="col-lg-6">
                            <label class="fs-6 form-label fw-bold text-gray-900">가입 기간</label>
                            <div class="nav-group nav-group-fluid">
                                <label><input type="radio" class="btn-check" name="savingsPriod" value="all" checked><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">전체</span></label>
                                <label><input type="radio" class="btn-check" name="savingsPriod" value="1month"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">1개월</span></label>
                                <label><input type="radio" class="btn-check" name="savingsPriod" value="3months"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">3개월</span></label>
                                <label><input type="radio" class="btn-check" name="savingsPriod" value="1year"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">1년</span></label>
                                <label><input type="radio" class="btn-check" name="savingsPriod" value="2years"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">2년</span></label>
                                <label><input type="radio" class="btn-check" name="savingsPriod" value="3years"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">3년</span></label>
                            </div>
                        </div>
                    </div>

                    <!-- 이자 계산 방식 필터 -->
                    <div class="m-5 mb-1 ms-10">
                        <div class="col-lg-6">
                            <label class="fs-6 form-label fw-bold text-gray-900 mb-5">이자 계산 방식</label>
                            <div class="nav-group nav-group-fluid">
                                <label><input type="radio" class="btn-check" name="savingsInterest" value="all" checked><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">전체</span></label>
                                <label><input type="radio" class="btn-check" name="savingsInterest" value="simple"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">단리</span></label>
                                <label><input type="radio" class="btn-check" name="savingsInterest" value="compound"><span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">복리</span></label>
                            </div>
                        </div>
                    </div>

                    <!-- 가입 대상 필터 -->
                    <div class="m-5 mb-1 ms-10">
                        <label class="fs-6 form-label fw-bold text-gray-900 mb-5">가입 대상</label>
                        <div class="d-flex">
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="savings_search_category_1">
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="savings_search_category_1">제한 없음</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="savings_search_category_2" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="savings_search_category_2">제한 있음(서민 전용, 일부제한)</label>
                            </div>
                        </div>
                    </div>

                    <!-- 가입 방법 필터 -->
                    <div class="m-5 mb-1 ms-10">
                        <label class="fs-6 form-label fw-bold text-gray-900 mb-5">가입 방법</label>
                        <div class="d-flex">
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="savings_search_category_1" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="savings_search_category_1">전체</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="savings_search_category_2" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="savings_search_category_2">영업점</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="savings_search_category_3" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="savings_search_category_3">인터넷</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="savings_search_category_4" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="savings_search_category_4">스마트폰</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="savings_search_category_5" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="savings_search_category_5">모집인</label>
                            </div>
                            <div class="form-check form-check-custom form-check-solid mb-5 me-5">
                                <input class="form-check-input" type="checkbox" id="savings_search_category_6" checked>
                                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="savings_search_category_6">전화(텔레뱅킹)</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 적금 상품 리스트 -->
                <div class="m-5">
                    <div class="d-flex flex-wrap flex-stack pb-7">
                        <!--begin::Title-->
                        <div class="d-flex flex-wrap align-items-center my-1">
                            <h3 class="fw-bold me-5 my-1">57    
                            <span class="text-gray-500 fs-6">적금 상품 개수</span></h3>
                        </div>
                        <!--end::Title-->
                        <!--begin::Controls-->
                        <div class="d-flex flex-wrap my-1">
                            <!--begin::Actions-->
                            <div class="d-flex my-0">
                                <!--begin::Select-->
                                <select class="form-select form-select-solid" data-control="select2" data-placeholder="Select an option" data-hide-search="true">
                                    <option value="1" selected>기본 정렬</option>
                                    <option value="2">최고 금리순</option>
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
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                            </tr>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                            </tr>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                            </tr>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <!-- 페이징 -->
                    <div id="" class="row">
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

<script>
</script>