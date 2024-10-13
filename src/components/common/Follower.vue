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
// API를 통해 팔로잉 목록을 불러옴
const response = await axios.get(`/follow/follower/${user_no}`);

// 응답 데이터 확인
console.log(response.data);

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
