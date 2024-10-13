<template>
  <div class="box">
    <div><h1>팔로잉 목록</h1></div>
    <div
      v-for="user in users"
      :key="user.user_no"
      class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed"
    >
      <!--begin::Details-->
      <div class="d-flex align-items-center">
        <!--begin::Avatar-->
        <div class="symbol symbol-35px symbol-circle">
          <span class="symbol-label bg-light-danger text-danger fw-semibold">
            {{ user.username[0].toUpperCase() }}
            <!-- 이름 첫 글자 표시 -->
          </span>
        </div>
        <!--end::Avatar-->
        <!--begin::Details-->
        <div class="ms-5">
          <a
            href="#"
            class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
          >
            {{ user.username }}
          </a>
          <div class="fw-semibold text-muted">{{ user.email }}</div>
        </div>
        <!--end::Details-->
      </div>
      <!--end::Details-->
      <!--begin::Follow/Following button-->
      <div class="ms-2">
        <button
          class="btn btn-sm"
          :class="user.isFollowing ? 'btn-primary' : 'btn-light'"
          @click="toggleFollow(user)"
        >
          <span>{{ user.isFollowing ? '팔로잉' : '팔로우' }}</span>
        </button>
      </div>
      <!--end::Follow/Following button-->
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

// 사용자 리스트를 저장할 변수
const users = ref([]);

// 로컬스토리지에서 user_no를 가져오는 함수
const getUserNoFromStorage = () => {
  const authData = JSON.parse(localStorage.getItem('auth'));
  return authData ? authData.user_no : null; // user_no를 반환
};

// 서버에서 팔로잉 리스트를 가져오는 함수
const getFollowingList = async () => {
  const user_no = getUserNoFromStorage(); // 스토리지에서 user_no 가져오기
  if (!user_no) {
    console.error('user_no를 찾을 수 없습니다.');
    return;
  }

  try {
    // API를 통해 팔로잉 목록을 불러옴
    const response = await axios.get(`/follower/${user_no}`);

    // 응답 데이터 확인
    console.log(response.data);

    // 응답에서 데이터를 받아 users에 저장 (응답이 배열이어야 합니다)
    if (Array.isArray(response.data)) {
      users.value = response.data.map((user) => ({
        user_no: user.user_no,
        username: user.username,
        email: user.email,
        isFollowing: true, // 기본적으로 팔로우 중인 상태로 설정
      }));
    } else {
      console.error('응답이 배열이 아닙니다:', response.data);
    }
  } catch (error) {
    console.error('Error fetching followers:', error);
  }
};

// 페이지 로드 시 호출하여 사용자 정보를 가져옴
onMounted(() => {
  getFollowingList();
});

// 팔로우 상태 전환 함수
const toggleFollow = (user) => {
  user.isFollowing = !user.isFollowing; // 팔로우 상태 토글
};
</script>

<style scoped>
.box {
  width: 700px;
  margin: 0 auto;
}

.symbol {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  height: 35px;
  width: 35px;
}

.symbol-circle {
  border-radius: 50%;
  background-color: #f5f5f5;
}

.ms-5 {
  margin-left: 1rem;
}

.d-flex {
  display: flex;
}

.flex-stack {
  justify-content: space-between;
}

.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
