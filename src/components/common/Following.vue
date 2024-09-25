<template>
  <div>
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
  { id: 1, name: 'Melody Macy', email: 'melody@altbox.com', initial: 'M', isFollowing: false },
  { id: 2, name: 'John Doe', email: 'john.doe@example.com', initial: 'J', isFollowing: false },
  { id: 3, name: 'Alice Smith', email: 'alice.smith@example.com', initial: 'A', isFollowing: false },
  { id: 4, name: 'Bob Johnson', email: 'bob.johnson@example.com', initial: 'B', isFollowing: false },
  { id: 5, name: 'Carol White', email: 'carol.white@example.com', initial: 'C', isFollowing: false },
  { id: 6, name: 'David Brown', email: 'david.brown@example.com', initial: 'D', isFollowing: false },
  { id: 7, name: 'Eve Davis', email: 'eve.davis@example.com', initial: 'E', isFollowing: false },
  { id: 8, name: 'Frank Miller', email: 'frank.miller@example.com', initial: 'F', isFollowing: false },
  { id: 9, name: 'Grace Wilson', email: 'grace.wilson@example.com', initial: 'G', isFollowing: false },
  { id: 10, name: 'Henry Moore', email: 'henry.moore@example.com', initial: 'H', isFollowing: false },
]);

const toggleFollow = (user) => {
  user.isFollowing = !user.isFollowing; // 선택한 사용자의 팔로우 상태 전환
};
</script>

<style scoped>
/* 스타일 추가 가능 */
</style>
