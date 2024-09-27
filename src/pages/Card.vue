<template>
    <div>
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
                    <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/Card"
                        exact-active-class="active" style="font-size: 20px; font-weight: bold; color: #216DBE;">
                        카드
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="tab-content" id="myTabContent">
            <!-- 카드 탭 내용 -->
            <div class="m-5 mb-1">
                <div class="card mb-10">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <!-- 검색 입력 -->
                            <div class="card-body">
                                <div class="col-lg-6">
                                    <label class="fs-6 form-label fw-bold text-gray-900">검색</label>
                                    <div class="d-flex align-items-center">
                                        <div class="position-relative w-md-550px me-md-2">
                                            <i
                                                class="ki-duotone ki-magnifier fs-3 text-gray-500 position-absolute top-50 translate-middle ms-6">
                                                <span class="path1"></span>
                                                <span class="path2"></span>
                                            </i>
                                            <input v-model="searchInstallment" type="text"
                                                class="form-control form-control-solid ps-10"
                                                placeholder="은행명, 카드 상품명을 입력해주세요.">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 카드 카테고리 탭 -->
                <div class="m-5">
                    <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#">
                                <h3 class="tab-title">전체</h3>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#">
                                <h3 class="tab-title">식비</h3>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#">
                                <h3 class="tab-title">여가</h3>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#">
                                <h3 class="tab-title">교통</h3>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#">
                                <h3 class="tab-title">의료</h3>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#">
                                <h3 class="tab-title">통신</h3>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#">
                                <h3 class="tab-title">교육</h3>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- 카드 상품 리스트 -->
                <div class="mt-5">
                    <div class="d-flex flex-wrap flex-stack">
                        <!--begin::Title-->
                        <div class="d-flex flex-wrap align-items-center my-1">
                            <h3 class="fw-bold me-5 my-1 ms-5">57
                                <span class="text-gray-500 fs-6">카드 상품 개수</span>
                            </h3>
                        </div>
                        <!--end::Title-->
                    </div>
                    <!-- 데이터 테이블 -->
                    <table id="kt_datatable_column_rendering" class="table table-striped table-row-bordered gy-5 gs-7">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="card card-flush shadow-sm m-5">
                                        <div class="card-side d-flex justify-content-between m-7 align-items-center">
                                            <div class="left ms-5">
                                                <img src="../assets/media/avatars/American Express Blue Card.png" alt=""
                                                    width="300" height="180">
                                            </div>
                                            <div class="flex-grow-1 ms-10 ">
                                                <!--begin::Head-->
                                                <div
                                                    class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                                    <!--begin::Details-->
                                                    <div class="d-flex flex-column">
                                                        <!--begin::Status-->
                                                        <div class="d-flex align-items-center mb-1">
                                                            <a href="#"
                                                                class="text-gray-800 text-hover-primary fs-2 fw-bold me-3">[KB]Our
                                                                WE_SH 카드</a>
                                                        </div>
                                                        <!--end::Status-->
                                                    </div>
                                                    <!--end::Details-->
                                                    <!--begin::Actions-->
                                                    <div class="d-flex mb-4">
                                                        <a href="#" class="btn btn-sm btn-primary me-3"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#kt_modal_new_target">자세히 보기</a>
                                                    </div>
                                                    <!--end::Actions-->
                                                </div>
                                                <!--end::Head-->
                                                <!--begin::Info-->
                                                <div class="d-flex flex-wrap justify-content-start">
                                                    <!--begin::Stats-->
                                                    <div class="d-flex flex-wrap">
                                                        <!--begin::Stat-->
                                                        <div
                                                            class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                            <!--begin::Number-->
                                                            <div class="d-flex align-items-center">
                                                                <div class="fs-4 fw-bold">전기/수소차 충전</div>
                                                            </div>
                                                            <!--end::Number-->
                                                            <!--begin::Label-->
                                                            <div class="fw-semibold fs-6 text-gray-500">20% 청구 할인</div>
                                                            <!--end::Label-->
                                                        </div>
                                                        <!--end::Stat-->
                                                        <!--begin::Stat-->
                                                        <div
                                                            class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                            <!--begin::Number-->
                                                            <div class="d-flex align-items-center">
                                                                <div class="fs-4 fw-bold">주차, 세차</div>
                                                            </div>
                                                            <!--end::Number-->
                                                            <!--begin::Label-->
                                                            <div class="fw-semibold fs-6 text-gray-500">20% 청구 할인</div>
                                                            <!--end::Label-->
                                                        </div>
                                                        <!--end::Stat-->
                                                        <!--begin::Stat-->
                                                        <div
                                                            class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                            <!--begin::Number-->
                                                            <div class="d-flex align-items-center">
                                                                <div class="fs-4 fw-bold">OTT</div>
                                                            </div>
                                                            <!--end::Number-->
                                                            <!--begin::Label-->
                                                            <div class="fw-semibold fs-6 text-gray-500">20%</div>
                                                            <!--end::Label-->
                                                        </div>
                                                        <!--end::Stat-->
                                                    </div>
                                                    <!--end::Stats-->
                                                    <!--begin::Users-->

                                                </div>
                                                <!--end::Info-->
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="card card-flush shadow-sm m-5">
                                        <div class="card-header">
                                            <h3 class="card-title">Title</h3>
                                            <div class="card-toolbar">
                                                <button type="button" class="btn btn-sm btn-light">
                                                    Action
                                                </button>
                                            </div>
                                        </div>
                                        <div class="card-body py-5">
                                            Lorem Ipsum is simply dummy text...
                                        </div>
                                        <div class="card-footer">
                                            Footer
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="card card-flush shadow-sm m-5">
                                        <div class="card-header">
                                            <h3 class="card-title">Title</h3>
                                            <div class="card-toolbar">
                                                <button type="button" class="btn btn-sm btn-light">
                                                    Action
                                                </button>
                                            </div>
                                        </div>
                                        <div class="card-body py-5">
                                            Lorem Ipsum is simply dummy text...
                                        </div>
                                        <div class="card-footer">
                                            Footer
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- 페이징 -->
                    <div id="" class="row">
                        <div id=""
                            class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                            <div class="dataTables_length" id="">
                                <label>
                                    <select name="" aria-controls=""
                                        class="form-select form-select-sm form-select-solid">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div id=""
                            class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                            <div class="dataTables_paginate paging_simple_numbers" id="">
                                <ul class="pagination">
                                    <li class="paginate_button page-item previous disabled" id="">
                                        <a href="#" aria-controls="" data-dt-idx="0" tabindex="0" class="page-link">
                                            <i class="previous"></i>
                                        </a>
                                    </li>
                                    <li class="paginate_button page-item active">
                                        <a href="#" aria-controls="" data-dt-idx="1" tabindex="0"
                                            class="page-link">1</a>
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