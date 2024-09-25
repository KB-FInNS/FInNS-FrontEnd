<template>
    <div class="col-lg-7">
        <!--begin::Posts-->
        <div class="mb-10" id="kt_social_feeds_posts">
            <!--begin::Post 1-->
            <!--begin::Card-->
            <div class="card card-flush mb-10">
                <!--begin::Card header-->
                <div class="card-header pt-9">
                    <!--begin::Author-->
                    <div class="d-flex align-items-center">
                        <!--begin::Avatar-->
                        <div class="symbol symbol-50px me-5">
                            <img src="@/assets/media/avatars/300-4.jpg" class="" alt="" />
                        </div>
                        <!--end::Avatar-->
                        <!--begin::Info-->
                        <div class="flex-grow-1">
                            <!--begin::Name-->
                            <a href="#" class="text-gray-800 text-hover-primary fs-4 fw-bold">Yujin_1219</a>
                            <!--end::Name-->
                            <!--begin::Date-->
                            <span class="text-gray-500 fw-semibold d-block">09월 24일 15:30</span>
                            <!--end::Date-->
                        </div>
                        <!--end::Info-->
                    </div>
                    <!--end::Author-->

                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body">
                    <!--begin::Post content-->
                    <!--장소 표시 아이콘-->
                    <div>
                        <span class="svg-icon svg-icon-primary svg-icon-2hx"><svg width="24" height="24"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3"
                                    d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                                    fill="currentColor" />
                                <path
                                    d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                                    fill="currentColor" />
                            </svg>

                        </span>
                        <!--장소-->
                        <span class="fs-6 fw-bold text-gray-700 mb-5 ms-2">상구네 솥뚜껑 삼겹살</span>
                    </div>
                    <div class="pt-2">
                        <!--카드 아이콘-->
                        <span class="svg-icon svg-icon-dark svg-icon-2hx"><svg width="24" height="24"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                                <path opacity="0.3"
                                    d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                        <!--가격-->
                        <span class="fs-6 fw-bold text-gray-700 mb-5 ms-2">120,000원</span>
                    </div>
                    <!--end::Post content-->
                    <!--begin:: 게시물 사진-->
                    <div class="tns" id="slider" style="direction: ltr">
                        <div data-tns="true" data-tns-nav-position="bottom" data-tns-mouse-drag="true"
                            data-tns-controls="false">
                            <!--begin::Item-->

                            <div class="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                                <img src="@/assets/media/stock/600x400/img-1.jpg" class="card-rounded shadow mw-100"
                                    alt="" />
                            </div>
                            <div class="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                                <img src="@/assets/media/stock/600x400/img-2.jpg" class="card-rounded shadow mw-100"
                                    alt="" />
                            </div>
                            <div class="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                                <img src="@/assets/media/stock/600x400/img-3.jpg" class="card-rounded shadow mw-100"
                                    alt="" />
                            </div>
                            <div class="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                                <img src="@/assets/media/stock/600x400/img-4.jpg" class="card-rounded shadow mw-100"
                                    alt="" />
                            </div>
                            <div class="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                                <img src="@/assets/media/stock/600x400/img-5.jpg" class="card-rounded shadow mw-100"
                                    alt="" />
                            </div>
                            <div class="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                                <img src="@/assets/media/stock/600x400/img-6.jpg" class="card-rounded shadow mw-100"
                                    alt="" />
                            </div>
                            <!--end::Item-->

                        </div>
                    </div>
                    <div class="pt-2">
                        <!--카테고리-->
                        <span class="svg-icon svg-icon-dark svg-icon-2hx">
                        </span>
                        <!--가격-->
                        <span class="fw-bold p-2" style="background-color: #F1F7FF; border-radius: 5px;">{{category[0]}}</span>
                        <span class="fs-6 fw-bold text-gray-700 mb-5 ms-2">에 소비했어요</span>
                    </div>
                    <!--end:: 게시물-->
                </div>
                <!--end::Card body-->
                <!--begin::Card footer-->
                <div class="card-footer pt-0">
                    <!--begin::Info-->
                    <div class="mb-6">
                        <!--begin::Separator-->
                        <div class="separator separator-solid"></div>
                        <!--end::Separator-->
                        <!--begin::Nav-->
                        <ul class="nav py-3">
                            
                            <!--댓글보기 버튼-->
                            <li class="nav-item">
                                <a class="nav-link btn btn-sm btn-color-gray-600 btn-active-light-muted fw-bold px-4 me-1 collapsible active"
                                    data-bs-toggle="collapse" href="#kt_social_feeds_comments_1">
                                    <i class="ki-duotone ki-message-text-2 fs-2 me-1">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                        <span class="path3"></span>
                                    </i>댓글보기</a>
                            </li>
                            
                            
                            <!--좋은소비 버튼-->
                            <li class="nav-item">
                                <a href="#"
                                    class="nav-link btn btn-sm  btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1">
                                    <i class="ki-duotone ki-like text-primary fs-2 me-1">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                    <span class="text-primary">좋은소비</span>
                                    </a>
                            </li>
                            
                            <!--이돈이면 버튼-->
                            <li class="nav-item">
                                <a href="#"
                                    class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-danger btn-active-light-danger fw-bold px-4">
                                    <i class="ki-duotone ki-dislike text-danger fs-2 me-1">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                    <span class="text-danger">이 돈이면...</span>
                                </a>
                            </li>
                        </ul>
                        <!--end::Nav-->
                        <!--begin::Separator-->
                        <div class="separator separator-solid mb-1"></div>
                        <!--end::Separator-->
                        <!--begin::댓글-->
                        <div class="collapse show" id="kt_social_feeds_comments_1">
                            <!--begin::Comment-->
                            <div class="d-flex pt-6">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-45px me-5">
                                    <img src="@/assets/media/avatars/300-13.jpg" alt="" />
                                </div>
                                <!--end::Avatar-->
                                <!--begin::Wrapper-->
                                <div class="d-flex flex-column flex-row-fluid">
                                    <!--begin::Info-->
                                    <div class="d-flex align-items-center flex-wrap mb-0">
                                        <!--begin::Name-->
                                        <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mr.
                                            Anderson</a>
                                        <!--end::Name-->
                    
                                    </div>
                                    <!--end::Info-->
                                    <!--begin::Text-->
                                    <span class="text-gray-800 fs-7 fw-normal pt-1">맛있는 삼겹살을 드셨네요! 근데 과소비 하신건 아닌지....</span>
                                    <!--end::Text-->
                                </div>
                                <!--end::Wrapper-->
                            </div>
                            <!--end::Comment-->
                            
                        </div>
                        <!--end::Collapse-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Comment form-->
                    <div class="d-flex align-items-center">
                        <!--begin::Author-->
                        <div class="symbol symbol-35px me-3">
                            <img src="@/assets/media/avatars/300-3.jpg" alt="" />
                        </div>
                        <!--end::Author-->
                        <!--begin::Input group-->
                        <div class="position-relative w-100">
                            <!--begin::Input-->
                            <textarea type="text" class="form-control form-control-solid border ps-5" rows="1"
                                name="search" value="" data-kt-autosize="true"
                                placeholder="댓글을 작성하세요."></textarea>
                            <!--end::Input-->
                        </div>
                        <!--end::Input group-->
                    </div>
                    <!--end::Comment form-->
                </div>
                <!--end::Card footer-->
            </div>
            <!--end::Card-->
            <!--end::Post 1-->
        </div>
    </div>
</template>
<script setup>
import { onMounted, nextTick } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider.js'; // Tiny Slider 가져오기


onMounted(async () => {
    // nextTick을 사용하여 DOM이 업데이트된 후 슬라이더 초기화
    await nextTick();
    console.log('mounted');
    // 슬라이더 초기화
    tns({
        container: '#slider',  // 슬라이더를 감싸는 컨테이너의 ID
        items: 1,              // 한 번에 표시할 아이템 수
        slideBy: 'page',       // 페이지 단위로 슬라이드
        mouseDrag: true,       // 마우스 드래그 활성화
        swipeAngle: false,     // 스와이프 각도 비활성화
        speed: 400,            // 슬라이드 전환 속도
        autoplay: true,        // 자동 슬라이드 활성화
        autoplayTimeout: 3000  // 자동 슬라이드 전환 시간 (밀리초)
    });
});

const category = ['식비카페', '쇼핑', '미용', '의료', '통신', '교통', '문화여행', '교육', '술유흥', '기타'];

</script>

<style lang="">

</style>