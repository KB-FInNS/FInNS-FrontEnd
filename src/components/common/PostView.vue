<template>
    <!-- <div class="col-lg-8"> -->
    <!--begin::Posts-->
    <div class="mb-10" id="kt_social_feeds_posts" style="width: 890px;">
        <!--begin::Post 1-->
        <!--begin::Card-->
        <div class="card card-flush mb-10" v-if="post">
            <!--begin::Card header-->
            <div class="card-header pt-9">
                <!--begin::Author-->
                <div class="d-flex align-items-center">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-50px me-5">
                        <img :src="`${post.userImgUrl}`" class="" alt="" />
                    </div>
                    <!--end::Avatar-->
                    <!--begin::Info-->
                    <div class="flex-grow-1">
                        <a :href="`/profile/${post.userNo}/spending`"
                            class="text-gray-800 text-hover-primary fs-4 fw-bold">
                            {{ post.userName || '알 수 없음' }}
                        </a>
                        <span class="text-gray-500 fw-semibold d-block">
                            {{ post.transactionDate ? formatDate(post.transactionDate) : 'Unknown Date' }}
                        </span>
                    </div>

                    <!-- 모달 트리거 버튼 (display: none; - JS를 통해 제어) -->
                    <!-- <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal"
                        style="display: none" ref="modalTrigger"></button> -->

                    <div v-if="post.userNo == auth.user.user_no" class="dropdown me-0">
                        <button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ki-solid ki-dots-horizontal fs-2x me-1"></i>
                        </button>
                        <!-- Dropdown Menu -->
                        <ul class="dropdown-menu">
                            <!-- 메뉴 항목들 -->
                            <li>
                                <button class="dropdown-item" style="text-align: center;" @click="goToPostView(post.postNo)">
                                    게시물 상세
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
                <!--end::Author-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body">
                <!--begin::Post content-->
                <!--장소 표시 아이콘-->
                <div>
                    <span class="svg-icon svg-icon-primary svg-icon-2hx">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3"
                                d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                                fill="currentColor" />
                            <path
                                d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                                fill="currentColor" />
                        </svg>
                    </span>
                    <!--장소-->
                    <span class="fs-6 fw-bold text-gray-700 mb-5 ms-2">
                        {{ post.place || 'Unknown Place' }}
                    </span>
                </div>
                <div class="mt-3">
                    <!--동전 아이콘-->
                    <span class="svg-icon svg-icon-warning svg-icon-2hx">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M12.5 22C11.9 22 11.5 21.6 11.5 21V3C11.5 2.4 11.9 2 12.5 2C13.1 2 13.5 2.4 13.5 3V21C13.5 21.6 13.1 22 12.5 22Z" fill="currentColor"/>
                            <path d="M17.8 14.7C17.8 15.5 17.6 16.3 17.2 16.9C16.8 17.6 16.2 18.1 15.3 18.4C14.5 18.8 13.5 19 12.4 19C11.1 19 10 18.7 9.10001 18.2C8.50001 17.8 8.00001 17.4 7.60001 16.7C7.20001 16.1 7 15.5 7 14.9C7 14.6 7.09999 14.3 7.29999 14C7.49999 13.8 7.80001 13.6 8.20001 13.6C8.50001 13.6 8.69999 13.7 8.89999 13.9C9.09999 14.1 9.29999 14.4 9.39999 14.7C9.59999 15.1 9.8 15.5 10 15.8C10.2 16.1 10.5 16.3 10.8 16.5C11.2 16.7 11.6 16.8 12.2 16.8C13 16.8 13.7 16.6 14.2 16.2C14.7 15.8 15 15.3 15 14.8C15 14.4 14.9 14 14.6 13.7C14.3 13.4 14 13.2 13.5 13.1C13.1 13 12.5 12.8 11.8 12.6C10.8 12.4 9.99999 12.1 9.39999 11.8C8.69999 11.5 8.19999 11.1 7.79999 10.6C7.39999 10.1 7.20001 9.39998 7.20001 8.59998C7.20001 7.89998 7.39999 7.19998 7.79999 6.59998C8.19999 5.99998 8.80001 5.60005 9.60001 5.30005C10.4 5.00005 11.3 4.80005 12.3 4.80005C13.1 4.80005 13.8 4.89998 14.5 5.09998C15.1 5.29998 15.6 5.60002 16 5.90002C16.4 6.20002 16.7 6.6 16.9 7C17.1 7.4 17.2 7.69998 17.2 8.09998C17.2 8.39998 17.1 8.7 16.9 9C16.7 9.3 16.4 9.40002 16 9.40002C15.7 9.40002 15.4 9.29995 15.3 9.19995C15.2 9.09995 15 8.80002 14.8 8.40002C14.6 7.90002 14.3 7.49995 13.9 7.19995C13.5 6.89995 13 6.80005 12.2 6.80005C11.5 6.80005 10.9 7.00005 10.5 7.30005C10.1 7.60005 9.79999 8.00002 9.79999 8.40002C9.79999 8.70002 9.9 8.89998 10 9.09998C10.1 9.29998 10.4 9.49998 10.6 9.59998C10.8 9.69998 11.1 9.90002 11.4 9.90002C11.7 10 12.1 10.1 12.7 10.3C13.5 10.5 14.2 10.7 14.8 10.9C15.4 11.1 15.9 11.4 16.4 11.7C16.8 12 17.2 12.4 17.4 12.9C17.6 13.4 17.8 14 17.8 14.7Z" fill="currentColor"/>
                        </svg>
                    </span>
                    <!--가격-->
                    <span class="fs-6 fw-bold text-gray-700 mb-5 ms-2">
                        {{ post.amount ? `${post.amount.toLocaleString()}원` : '0원 ' }}
                    </span>
                </div>
                <div class="mt-3">
                    <!--카드 아이콘-->
                    <span class="svg-icon svg-icon-dark svg-icon-2hx">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                            <path opacity="0.3"
                                d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                fill="currentColor" />
                        </svg>
                    </span>
                    <!--가격-->
                    <span class="fs-6 fw-bold text-gray-700 mb-5 ms-2">
                        {{ post.cardName }}
                    </span>
                </div>
                <!--end::Post content-->
                <!--begin:: 게시물 사진-->
                <Carousel v-if="post.imgUrls.length > 0">
                    <Slide v-for="(image, index) in post.imgUrls" :key="index">
                        <img :src="image" alt="Image Slide" class="carousel-image" />
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
                <div class="pt-10 pb-4">
                    <!--가격 카테고리-->
                    <span class="fw-bold p-3" style="background-color: #F1F7FF; border-radius: 5px;">
                        <img :src="getCategoryIcon(post.category)" alt="icon" style="height: 26px; width: 26px;" />
                        {{ post.category || 'Unknown Category' }}
                    </span>
                    <span class="fs-6 fw-bold text-gray-700 mb-5 ms-2">에 소비했어요</span>
                </div>
                <!--end:: 게시물-->
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
                            <button class="btn btn-sm"
                                :style="{ backgroundColor: (goodisActive ? '#F1F7FF' : '#FFFFFF') }"
                                @click="toggleGreatOrStupid(true)" style="height: 32px;">
                                <i class="ki-duotone ki-like text-primary fs-2 me-1">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                                <span class="text-primary fw-bold">{{ post.greatCount }} 좋은소비</span>
                            </button>
                        </li>
                        <!--이돈이면 버튼-->
                        <li class="nav-item">
                            <button class="btn btn-sm"
                                :style="{ backgroundColor: (badisActive ? '#FFEFEF' : '#FFFFFF') }"
                                @click="toggleGreatOrStupid(false)" style="height: 32px;">
                                <i class="ki-duotone ki-dislike text-danger fs-2 me-1">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                                <span class="text-danger fw-bold">{{ post.stupidCount }} 이돈이면...</span>
                            </button>
                        </li>
                    </ul>
                    <!--end::Nav-->
                    <!--begin::Separator-->
                    <div class="separator separator-solid mb-1"></div>
                    <!--end::Separator-->
                    <!--begin::댓글-->
                    <div>
                        <!-- 댓글 리스트 -->
                        <div class="collapse show" id="kt_social_feeds_comments_1">
                            <!-- 댓글을 반복해서 출력 -->
                            <div class="d-flex pt-6" v-for="(comment, index) in comments" :key="index">
                                <!-- 아바타 -->
                                <div class="symbol symbol-45px me-5">
                                    <img :src="comment.imgUrl" alt="" />
                                </div>

                                <!-- 댓글 내용 -->
                                <div class="d-flex flex-column flex-row-fluid">
                                    <div class="d-flex align-items-center flex-wrap mb-0">
                                        <!-- 댓글 작성자 -->
                                        <a :href="`/profile/${comment.userNo}/spending`" class="text-gray-800 text-hover-primary fw-bold me-6">{{
                                            comment.userName }}</a>
                                    </div>
                                    <!-- 댓글 텍스트 -->
                                    <span class="text-gray-800 fs-7 fw-normal pt-1">{{ comment.content }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end::Info-->
                <!--begin::Comment form-->
                <div class="d-flex align-items-center">
                    <!-- Input and Button Wrapper -->
                    <div class="d-flex w-100">
                        <!-- Comment Input -->
                        <input v-model="newComment" @keyup.enter.prevent="addComment" type="text" class="form-control form-control-solid border ps-5 me-2"
                            name="search" placeholder="댓글을 작성하세요." />
                        <!-- Submit Button -->
                        <button @click="addComment" class="btn btn-primary"
                            style="height: 38px; padding: 0 12px; font-size: small; white-space: nowrap;">
                            등록
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::Card-->
        <!--end::Post 1-->
    </div>
    <!-- </div> -->
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { defineProps } from 'vue';

const router = useRouter();

const auth = JSON.parse(localStorage.getItem('auth'));

const props = defineProps({
    postNo: {
        type: Number,
        required: true,
    },
});
const getCategoryIcon = (categoryName) => {
    const categoryItem = category.find(item => item.name === categoryName);
    return categoryItem ? categoryItem.icon : '/assets/media/category/default.png';
};

const post = ref(null);
const goodisActive = ref(false);
const badisActive = ref(false);
const isGreat = ref(null);

// 서버에서 게시물 데이터를 가져오는 함수
const fetchPost = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/posts/${props.postNo}`);
        post.value = response.data; // 가져온 게시물 데이터를 저장

    } catch (error) {
        console.error('Error fetching post data:', error);
    }
};

// isGreat 값을 가져오는 함수
const fetchIsGreat = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/greatOrStupid/${auth.user.user_no}/${props.postNo}/isGreat`);
        isGreat.value = response.data;

        goodisActive.value = isGreat.value === true; // isGreat가 true이면 goodisActive를 true로 설정
        badisActive.value = isGreat.value === false; // isGreat가 false이면 badisActive를 true로 설정
    } catch (error) {
        console.error('Error fetching isGreat value:', error);
    }
};

const toggleGreatOrStupid = async (greatOrStupid) => {
    try {
        const requestData = {
            userNo: auth.user.user_no,
            postNo: props.postNo,
            greatOrStupid: greatOrStupid
        };

        const response = await axios.put(`http://localhost:8080/greatOrStupid`, requestData);
        post.value.greatCount = response.data.greatCount;
        post.value.stupidCount = response.data.stupidCount;

        fetchIsGreat();
    } catch (error) {
        console.error('Error toggling great status:', error);
    }
};

// 날짜 형식을 변환하는 함수
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${month}월 ${day}일 ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
};

// 모달 트리거를 위한 ref
const modalTrigger = ref(null);
// 메뉴를 위한 ref
const menuButton = ref(null);

onMounted(async () => {
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

    fetchPost();
    fetchIsGreat();
    fetchComments();
});

const category = [
    { name: '식비 · 카페', icon: '/assets/media/category/meal.png' },
    { name: '쇼핑', icon: '/assets/media/category/shopping.png' },
    { name: '미용', icon: '/assets/media/category/beauty.png' },
    { name: '의료', icon: '/assets/media/category/health.png' },
    { name: '통신', icon: '/assets/media/category/communication.png' },
    { name: '교통', icon: '/assets/media/category/car.png' },
    { name: '문화 · 여행', icon: '/assets/media/category/travel.png' },
    { name: '교육', icon: '/assets/media/category/study.png' },
    { name: '술 · 유흥', icon: '/assets/media/category/play.png' },
    { name: '기타', icon: '/assets/media/category/else.png' }
];

const goToPostView = (postNo) => {
    router.push({
        path: `/postDetails/${postNo}` // Use path parameter instead of query
    });
    window.scrollTo(0, 0);
};

// 새로운 댓글을 입력할 변수
const newComment = ref('');
// 댓글 목록을 저장할 배열
const comments = ref([
    { name: 'Mr. Anderson', text: '맛있는 삼겹살을 드셨네요! 근데 과소비 하신건 아닌지....' }
]);
const fetchComments = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/comment/${props.postNo}`);
        comments.value = response.data;
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
};

// 댓글을 추가하는 함수
const addComment = async () => {
    if (newComment.value.trim() === '') {
        alert('댓글을 입력하세요.');
        return;
    }

    try {
        const requestData = {
            postNo: props.postNo,
            userNo: auth.user.user_no,
            content: newComment.value,
        };

        await axios.post('http://localhost:8080/comment', requestData);

        newComment.value = ''; 
        await fetchComments();
    } catch (error) {
        console.error('댓글 추가 중 오류 발생:', error);
        alert('댓글 추가에 실패했습니다.');
    }
};
</script>

<style scoped>
.carousel-image {
    width: 100%;
    /* 이미지가 Carousel의 너비에 맞춰짐 */
    height: 500px;
    /* contain : 사진 크기에 맞게, cover : carousel 에 맞게(이미지 잘림) */
    object-fit: contain;
}
</style>