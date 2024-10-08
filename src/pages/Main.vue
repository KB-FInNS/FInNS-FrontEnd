<template>
    <div class="header ms-10">
        <SearchComponent />
    </div>
    <!-- <div class="maincontainer"> -->
        <div class="row ms-7 me-7">
            <!--게시글 피드-->
            <div class="col-lg-8">
            <div @scroll="handleScroll" style="overflow-y: auto; ">
                <div v-if="postNos.length > 0" v-for="post in postNos" :key="post.postNo">
                    <PostView :postNo="post.postNo" />
                </div>
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
                        <div v-for="(category, index) in rankings" :key="index">
                            <div class="mt-2">
                                <h2 class="ms-2 fs-1">
                                    <span class="svg-icon svg-icon-warning svg-icon-2hx me-2"><svg width="26"
                                            height="26" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 18V16H10V18L9 20H15L14 18Z" fill="currentColor" />
                                            <path opacity="0.3"
                                                d="M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    <span class="fs-2">{{ category.title }}</span>
                                </h2>

                                <ul>
                                    <li v-for="(item, idx) in category.items" :key="idx">
                                        <span class="ms-3 me-5 fw-bold fs-1"
                                            style="font-variant-numeric: tabular-nums;">{{ idx + 1 }}</span>

                                        <!-- 유저 목록 -->
                                        <div class="symbol symbol-40px me-5 ms-1">
                                            <img :src="`${item.profileImage}`" class="h-50 align-self-center" alt="" />
                                        </div>
                                        <div class="flex-grow-1 me-6">
                                            <a href="profile/spending"
                                                class="text-gray-800 text-hover-primary fs-6 fw-bold">
                                                {{ item.name }}
                                            </a>
                                        </div>
                                        <span style="position: absolute; right: 40px;" class="ms-10 ps-7">{{ item.amount
                                            }}</span>
                                    </li>
                                </ul>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>

                <!--추천 친구-->
                <div class="card mb-5 mb-xl-8">
                    <div class="card-header border-0 pt-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="d-flex align-items-center card-label fw-bold text-gray-900 fs-4">
                                <i class="ki-duotone ki-people fs-2hx me-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                    <span class="path3"></span>
                                    <span class="path4"></span>
                                    <span class="path5"></span>
                                </i>
                                회원님을 위한 추천
                            </span>
                            <span class="text-muted mt-1 fw-bold fs-7 ms-11">나와 비슷한 소비 습관을 가진 사용자</span>
                        </h3>

                    </div>
                    <div class="card-body pt-5">
                        <!-- User List 반복 -->
                        <div v-for="(user, index) in users" :key="index">
                            <!-- 유저 정보 -->
                            <div class="d-flex flex-stack">
                                <!-- 유저 아바타 -->
                                <div class="symbol symbol-40px me-5">
                                    <img :src="`${user.avatar}`" class="h-50 align-self-center" alt="" />
                                </div>
                                <!-- 유저 이름 및 회사 정보 -->
                                <div class="flex-grow-1 me-5">
                                    <a href="profile/spending" class="text-gray-800 text-hover-primary fs-6 fw-bold">
                                        {{ user.name }}
                                    </a>
                                </div>
                                <div class="ms-2">
                                    <button class="btn btn-sm" :class="user.isFollowing ? 'btn-primary' : 'btn-light'"
                                        @click="toggleFollow(user)" style="height : 32px;">
                                        <span>{{ user.isFollowing ? '팔로잉' : '팔로우' }}</span>
                                    </button>
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
import axios from 'axios';
import PostView from '@/components/common/PostView.vue';
import SearchComponent from '@/components/common/SearchComponent.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 컴포넌트가 마운트될 때 초기 5개의 게시물 번호만 가져오기
onMounted(() => {
    fetchPostNos(initialLoadSize);
});
const postNos = ref([]); // 게시물 번호 목록
let count = 0; // 현재 가져온 데이터의 수
const initialLoadSize = 2; // 처음에 가져올 게시물 번호 수
const additionalLoadSize = 2; // 추가로 가져올 게시물 번호 수

// 서버에서 게시물 번호를 가져오는 함수
const fetchPostNos = async (loadSize) => {
  try {
    // 요청할 데이터를 정의합니다.
    const postRequestDTO = {
      userNo: 1, // 사용자 번호
      date: "2024-10-01", // 특정 날짜 대신 월을 지정
      isOnlyPublic: true, // 공개된 게시물만 가져오기
      offset: count, // 현재까지 가져온 데이터의 수를 오프셋으로 사용
      limit: loadSize // 가져올 데이터 수
    };

    const response = await axios.post('http://localhost:8080/posts/byDate', postRequestDTO);
    console.log('Fetched Post Nos:', response.data);

    // 응답 데이터가 유효한지 확인하고, postNo를 포함한 객체를 배열에 추가
    if (response.data && response.data.length > 0) {
      postNos.value = [...postNos.value, ...response.data.map(post => ({ postNo: post.postNo }))];
      count += loadSize; // 가져온 데이터 수만큼 count 증가
    } else {
      console.warn('No posts returned from the API');
    }
  } catch (error) {
    console.error('Error fetching post numbers:', error);
  }
};

// 스크롤 이벤트 핸들러
const handleScroll = (event) => {
  const scrollTop = event.target.scrollTop;
  const containerHeight = event.target.scrollHeight;
  const windowHeight = event.target.clientHeight;

  // 스크롤이 중간에 도달하면 추가 게시물 번호 불러오기
  if (scrollTop + windowHeight >= containerHeight / 2) {
    fetchPostNos(additionalLoadSize);
  }
};

const rankings = ref([
    {
        title: '소비 TOP 3',
        items: [
            { name: 'Yujin_1219', amount: '1,000,000원', profileImage: '/assets/media/avatars/300-11.jpg' },
            { name: 'Yujin_1219', amount: '900,000원', profileImage: '/assets/media/avatars/300-12.jpg' },
            { name: 'Yujin_1219', amount: '600,000원', profileImage: '/assets/media/avatars/300-16.jpg' },
        ],
    },
    {
        title: '좋은소비 TOP 3',
        items: [
            { name: 'Yujin_1219', amount: '1,000,000회', profileImage: '/assets/media/avatars/300-4.jpg' },
            { name: 'Yujin_1219', amount: '900,000회', profileImage: '/assets/media/avatars/300-2.jpg' },
            { name: 'Yujin_1219', amount: '100,000회', profileImage: '/assets/media/avatars/300-6.jpg' },
        ],
    },
]);

const users = ref([
    {
        name: "Jacob Jones",
        avatar: '/assets/media/avatars/300-11.jpg',
        profileLink: "pages/user-profile/overview.html",
        isFollowing: true
    },
    {
        name: "Annette Black",
        avatar: "/assets/media/avatars/300-2.jpg",
        profileLink: "pages/user-profile/overview.html",
        isFollowing: true
    },
    {
        name: "Devon Lane",
        avatar: "/assets/media/avatars/300-7.jpg",
        profileLink: "pages/user-profile/overview.html",
        isFollowing: true
    },
    {
        name: "Kristin Watson",
        avatar: "/assets/media/avatars/300-9.jpg",
        profileLink: "pages/user-profile/overview.html",
        isFollowing: true
    },
    {
        name: "Eleanor Pena",
        avatar: "/assets/media/avatars/300-12.jpg",
        profileLink: "pages/user-profile/overview.html",
        isFollowing: true
    }
]);
const toggleFollow = (user) => {
    user.isFollowing = !user.isFollowing; // 선택한 사용자의 팔로우 상태 전환
};
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