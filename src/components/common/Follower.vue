<template>
  <div class="box">
    <div><h1>팔로워 목록</h1></div>
    <div v-for="user in users" :key="user.id" class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
      <!--begin::Details-->
      <div class="d-flex align-items-center">
        <!--begin::Avatar-->
        <div class="symbol symbol-35px symbol-circle">
          <span class="symbol-label bg-light-danger text-danger fw-semibold">{{ user.initial }}</span>
        </div>
        <!--end::Avatar-->
        <!--begin::Details-->
        <div class="ms-5">
          <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">{{ user.name }}</a>
          <div class="fw-semibold text-muted">{{ user.email }}</div>
        </div>
        <!--end::Details-->
      </div>
      <!--end::Details-->
      <!--begin::Follow/Following button-->
      <div class="ms-2">
        <button class="btn btn-sm" :class="user.isFollowing ? 'btn-primary' : 'btn-light'" @click="toggleFollow(user)">
          <span>{{ user.isFollowing ? '팔로잉' : '팔로우' }}</span>
        </button>
      </div>
      <!--end::Follow/Following button-->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const users = ref([
  { id: 1, name: 'Melody Macy', initial: 'M', isFollowing: true },
  { id: 2, name: 'John Doe', initial: 'J', isFollowing: true },
  { id: 3, name: 'Alice Smith', initial: 'A', isFollowing: true },
  { id: 4, name: 'Bob Johnson', initial: 'B', isFollowing: true },
  { id: 5, name: 'Carol White', initial: 'C', isFollowing: true },
  { id: 6, name: 'David Brown', initial: 'D', isFollowing: true },
  { id: 7, name: 'Eve Davis', initial: 'E', isFollowing: true },
  { id: 8, name: 'Frank Miller', initial: 'F', isFollowing: true },
  { id: 9, name: 'Grace Wilson', initial: 'G', isFollowing: true },
  { id: 10, name: 'Henry Moore', initial: 'H', isFollowing: true },
]);

const toggleFollow = (user) => {
  user.isFollowing = !user.isFollowing; // 선택한 사용자의 팔로우 상태 전환
};
</script>

<style scoped>
.box {
  width: 700px;
  margin: 0 auto;
}
.container-xxl {
  text-align: center;
}
</style>
