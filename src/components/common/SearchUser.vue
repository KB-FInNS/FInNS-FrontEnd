<template>
  <div class="dropdown">
    <div class="search-container mt-10">
      <!-- 검색 입력 필드 -->
      <div style="position: relative; display: inline-block; width: 1000px;">
        <input
          v-model="searchQuery"
          @keydown.enter="searchUsers"
          @click="isDropdownVisible = true"
          type="text"
          placeholder="유저 이름을 검색하세요"
          class="form-control dropbtn"
          style="background-color: #F9F9F9; width: 50%; padding-right: 40px; border: none;"
        />

        <!-- 검색 아이콘 -->
        <span
          class="menu-icon svg-icon svg-icon-2hx"
          style="position: absolute; right: 51%; top: 50%; transform: translateY(-50%); color: grey;">
          <svg @click="searchUsers" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"/>
            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"/>
          </svg>
        </span>
      </div>
    </div>

    <!-- 검색 결과 -->
    <div class="search-container dropdown-content" v-show="isDropdownVisible">
      <div v-if="filteredUsers.length" class="ms-2 me-2">
        <ul class="list-group" style="max-height: 200px; overflow-y: auto;">
          <!-- 여러 개의 검색 결과를 출력 -->
          <li v-for="user in filteredUsers" :key="user.id" class="list-group-item">
            <div class="symbol symbol-40px">
              <img :src="`${user.imgUrl}`" />
            </div>
            <a :href="`profile/${user.userNo}/spending`" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-1">{{ user.userName }}</a>
            <button class="btn btn-sm" :class="user.isFollowing ? 'btn-primary' : 'btn-light'" @click="toggleFollow(user)">
              <span>{{ user.isFollowing ? '팔로잉' : '팔로우' }}</span>
            </button>
          </li>
        </ul>
      </div>
      <div v-else class="mt-5 ms-2 me-2">
        <h5 class="mb-7">검색 결과가 없습니다.</h5>
        <h3 style="color: #7B7777;">최근 검색된 유저</h3>
        <ul class="list-group mt-4">
          <li v-for="user in recentUsers" :key="user.id" class="list-group-item">
            <div class="symbol symbol-35px symbol-circle">
              <span class="symbol-label bg-light-danger text-danger fw-semibold">{{ user.initial }}</span>
            </div>
            <div class="ms-5">
              <a href="profile/spending" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">{{ user.userName }}</a>
              <div class="fw-semibold text-muted">{{ user.email }}</div>
            </div>
            <button class="btn btn-sm" :class="user.isFollowing ? 'btn-primary' : 'btn-light'" @click="toggleFollow(user)">
              <span>{{ user.isFollowing ? '팔로잉' : '팔로우' }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>  
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';

const users = ref([]);
const getUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/users`);
        users.value = response.data;
    } catch (error) {
        console.error('Error fetching users value:', error);
    }
};

const recentUsers = ref([
  { id: 1, userName: 'Melody Macy', initial: 'M', isFollowing: true },
  { id: 2, userName: 'John Doe', initial: 'J', isFollowing: true },
  { id: 3, userName: 'Alice Smith', initial: 'A', isFollowing: true },
  { id: 4, userName: 'Bob Johnson', initial: 'B', isFollowing: true },
]);

const searchQuery = ref('');
const filteredUsers = ref([]);
const isDropdownVisible = ref(false);

// 검색 실행 함수
const searchUsers = () => {
  const query = searchQuery.value.toLowerCase();
  if (!searchQuery.value.trim()) {
    filteredUsers.value = [];
    return;
  }

  filteredUsers.value = users.value.filter(user => user.userName.toLowerCase().includes(query));
};

// 입력 창 외부 클릭 시 dropdown 숨기기
const handleClickOutside = (event) => {
  const input = document.querySelector('.dropbtn');
  const dropdown = document.querySelector('.dropdown-content');
  if (input && !input.contains(event.target) && dropdown && !dropdown.contains(event.target)) {
    isDropdownVisible.value = false;
  }
};

// 컴포넌트가 마운트된 후 이벤트 리스너 등록
onMounted(async () => {
  document.addEventListener('click', handleClickOutside);
  await getUsers();
});

// 컴포넌트가 언마운트될 때 이벤트 리스너 해제
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.search-container {
  margin-top: 100px;
  width: 1000px;
  margin: 0 auto;
  background-color: white;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  /* position: absolute; */
  margin-left: -1px;
  top: 100%;
  left: 0;
  width: 50%; /* input 박스와 너비 맞추기 */
  /* border: 1px solid rgb(168, 168, 168); */
  padding: 7px;
  /* padding-left: 2px; */
  z-index: 1;
  background-color: white; /* dropdown 배경 색상 */
  border-radius: 3%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
}

.dropdown-content a {
  display: block;
}

img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
</style>
