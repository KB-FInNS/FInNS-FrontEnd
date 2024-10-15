<template>
    <div class="header ms-10">
        <SearchUser />
    </div>
    <!-- <div class="maincontainer"> -->
    <div class="row ms-7 me-7">
        <!--게시글 피드-->
        <div class="col-lg-8">

            <div style="overflow-y: auto;">
                <!-- postNos가 있을 때만 v-for로 렌더링 -->
                <div v-if="postNos.length > 0">
                    <!-- 스크롤이 최하단에 도달했을 때 PostView로 번호를 넘김 -->
                    <div v-for="postNo in postNos" :key="postNo">
                        <PostView :postNo="postNo" />
                    </div>
                </div>

                <!-- 데이터가 없을 때 로딩 메시지 표시 -->
                <div v-else>
                    <p>Loading posts...</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4" style="float: left;">
            <!--이달의 TOP 랭킹-->
            <div class="card mb-5 mb-xl-8">
                <div class="card-header border-0 pt-5">
                    <h1 class="mt-5" style="text-shadow: 3px;">이달의 TOP 랭킹</h1>
                    <!-- <div v-for="(category, index) in rankings" :key="index"> -->
                    <div class="mt-2">
                        <!--소비 TOP3 유저 목록-->
                        <h2 class="ms-2 fs-1">
                            <span class="svg-icon svg-icon-warning svg-icon-2hx me-2"><svg width="26" height="26"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 18V16H10V18L9 20H15L14 18Z" fill="currentColor" />
                                    <path opacity="0.3"
                                        d="M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <span class="fs-2">소비 TOP3</span>
                        </h2>
                        <ul>
                            <li v-for="(user, idx) in TopUser" :key="idx">
                                <span class="ms-3 me-5 fw-bold fs-1" style="font-variant-numeric: tabular-nums;">{{
                                    idx + 1 }}</span>
                                <div class="symbol symbol-40px me-5 ms-1">
                                    <img :src="`${user.imgUrl}`" />
                                </div>
                                <div class="flex-grow-1 me-6">
                                    <a :href="`profile/${user.userNo}/spending`"
                                        class="text-gray-800 text-hover-primary fs-6 fw-bold">
                                        {{ user.userName }}
                                    </a>
                                </div>
                                <span style="position: absolute; right: 40px;" class="ms-10 ps-7">{{
                                    user.totalAmount }}</span>
                            </li>
                        </ul>
                        <br>
                        <!--좋은소비 TOP3 게시글 목록-->
                        <h2 class="ms-2 fs-1">
                            <span class="svg-icon svg-icon-warning svg-icon-2hx me-2"><svg width="26" height="26"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 18V16H10V18L9 20H15L14 18Z" fill="currentColor" />
                                    <path opacity="0.3"
                                        d="M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <span class="fs-2">좋은소비 TOP3</span>
                        </h2>
                        <ul>
                            <li v-for="(post, idx) in TopPost" :key="idx">
                                <span class="ms-3 me-5 fw-bold fs-1" style="font-variant-numeric: tabular-nums;">
                                    {{ idx + 1 }}
                                </span>
                                <div class="symbol symbol-40px me-5 ms-1">
                                    <img :src="categoryMap.get(post.category).img_url" />
                                </div>
                                <div class="flex-grow-1 me-6">
                                    <a :href="`postView/${post.postNo}`"
                                        class="text-gray-800 text-hover-primary fs-6 fw-bold">
                                        {{ post.place }}
                                    </a>
                                </div>
                                <!-- <span style="position: absolute; right: 100px;" class="ms-10 ps-7">{{ post.greatCount }}
                                    <i class="ki-duotone ki-like text-primary fs-2 me-1">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i> -->

                                <!-- </span>     -->

                                <span style="position: absolute; right: 40px;" class="ms-10 ps-7">
                                    {{ post.amount.toLocaleString() }}원
                                </span>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>

            <!--추천 친구-->
            <div class="card mb-5 mb-xl-8">
                <div class="card-header border-0 pt-5">
                    <h3 class="card-title align-items-center flex-column mb-5">
                        <span class="d-flex align-items-center card-label fw-bold text-gray-900 fs-4">
                            <i class="ki-duotone ki-people fs-2hx me-2">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                                <span class="path4"></span>
                                <span class="path5"></span>
                            </i>
                            <span class="fs-1" style="font-weight: 700;">회원님을 위한 추천</span>
                        </span>
                        <span class="text-muted mt-2 fw-bold fs-4 ms-2">나와 비슷한 소비 습관을 가진 사용자</span>
                    </h3>

                </div>
                <div class="card-body pt-5">
                    <!-- User List 반복 -->
                    <div v-for="(user, index) in users" :key="index">
                        <!-- 유저 정보 -->
                        <div class="d-flex flex-stack">
                            <!-- 유저 아바타 -->
                            <div class="ms-5 symbol symbol-40px">
                                <img :src="`${user.imgUrl}`" />
                            </div>
                            <!-- 유저 이름 및 회사 정보 -->
                            <div class="ms-5 flex-grow-1">
                                <a :href="`profile/${user.userNo}/spending`"
                                    class="text-gray-800 text-hover-primary fs-6 fw-bold">
                                    {{ user.userName }}
                                </a>
                            </div>
                            <div class="me-5">
                                <FollowButton
                                    :to_user_no="user.userNo" 
                                    :initialIsFollowing="user.follow"
                                />
                            </div>
                        </div>
                        <div v-if="index !== users.length - 1" class="separator separator-dashed my-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import FollowButton from '@/components/common/FollowButton.vue';
import PostView from '@/components/common/PostView.vue';
import SearchUser from '@/components/common/SearchUser.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
let postNos = ref([]);
let nextNo;
let next2No;
let bottomCheck = false;
const allPostNos = ref([]);

const auth = JSON.parse(localStorage.getItem('auth'));

const fetchDistinctPostNos = async () => {
    try {
        const response = await axios.get('http://localhost:8080/posts/images/distinct');
        allPostNos.value = response.data; // 전체 데이터를 받아옴
        // 처음 5개의 데이터만 설정
        postNos.value = allPostNos.value.slice(0, 5);
    } catch (error) {
        console.error('Error fetching distinct post numbers:', error);
    }
};

// 스크롤이 하단에 도달하면 postNos에 2개의 번호 추가
const handleScrollBottom = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 스크롤 위치가 문서의 하단에 근접한 경우
    if (!bottomCheck && scrollTop + windowHeight >= documentHeight - 5) {

        //더 불러올 번호가 없으면 중지
        if (allPostNos.value.length === postNos.value.length) return;

        // bottomCheck를 true로 설정하여 중복 실행 방지
        bottomCheck = true;
        // 다음 번호 계산
        nextNo = allPostNos.value[postNos.value.length];
        next2No = allPostNos.value[postNos.value.length + 1];
        // 0.5초 후에 다음 번호 2개를 postNos에 추가

        postNos.value.push(nextNo, next2No);
        setTimeout(() => {
            // console.log(postNos.value);
            // bottomCheck를 false로 재설정하여 다음 스크롤 이벤트를 처리할 수 있게 함
            bottomCheck = false;
        }, 100); // 0.1초의 지연 (100ms)
    }


};

const categoryMap = new Map([
    ['식비 · 카페', { img_url: '/assets/media/category/meal.png' }],
    ['쇼핑', { img_url: '/assets/media/category/shopping.png' }],
    ['의료', { img_url: '/assets/media/category/health.png' }],
    ['통신', { img_url: '/assets/media/category/communication.png' }],
    ['술 · 유흥', { img_url: '/assets/media/category/play.png' }],
    ['미용', { img_url: '/assets/media/category/beauty.png' }],
    ['교통', { img_url: '/assets/media/category/car.png' }],
    ['문화 · 여행', { img_url: '/assets/media/category/travel.png' }],
    ['교육', { img_url: '/assets/media/category/study.png' }],
    ['기타', { img_url: '/assets/media/category/else.png' }]
]);

const TopUser = ref([]);
const getTop3Users = async () => {
    try {
        const nowDate = new Date();
        const response = await axios.get(`http://localhost:8080/users/top3/${nowDate.getFullYear()}/${nowDate.getMonth() + 1}`);

        TopUser.value = response.data;
        const formattedTotalAmount = response.data.map(item => ({
            ...item,
            totalAmount: item.totalAmount.toLocaleString() + '원'
        }));
        TopUser.value = formattedTotalAmount;
    } catch (error) {
        console.error('Error fetching top 3 users:', error);
        throw error;
    }
};
const TopPost = ref([]);
const getTop3Posts = async () => {
    try {
        const response = await axios.get('http://localhost:8080/posts/top3');
        TopPost.value = response.data;
        console.log('Top3', JSON.stringify(TopPost.value, null, 2)); // JSON 형식으로 출력
    } catch (error) {
        console.error('Error fetching top 3 users:', error);
        throw error;
    }
};

const users = ref([]);
const getRecommendUsers = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/users/${auth.user.user_no}/recommend5`);
    users.value = response.data;

    } catch (error) {
        console.error('Error fetching recommend 5 users:', error);
        throw error;
    }
};

const toggleFollow = (user) => {
    user.isFollowing = !user.isFollowing; // 선택한 사용자의 팔로우 상태 전환
};

// 컴포넌트가 마운트될 때 초기 데이터를 가져오기
onMounted(() => {
    fetchDistinctPostNos();
    getTop3Users();
    getRecommendUsers();
    getTop3Posts();
    window.addEventListener('scroll', handleScrollBottom);
});

// 컴포넌트가 언마운트될 때 스크롤 이벤트 제거
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScrollBottom);
});
</script>

<style scoped>
.maincontainer {
    margin-left: 33px;
    margin-right: 33px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #ffffff;
}

h1 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    width: 100%;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: 8px;
}

li:last-child {
    border-bottom: none;
}

img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
}
</style>