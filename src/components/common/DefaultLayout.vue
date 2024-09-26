<template>
  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <!-- 사이드바 -->
      <Aside />

      <div
        class="wrapper d-flex flex-column flex-row-fluid"
        style="padding-right: 0%"
        id="kt_wrapper"
      >
        <router-view />
        <!-- 자식 라우트를 렌더링 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Aside from '@/components/common/Aside.vue'; // 사이드바 컴포넌트 가져오기
</script>

<style scoped></style>
