<template>
  <div class="d-flex flex-column flex-root">
    <div class="d-flex flex-row flex-column-fluid">
      <!-- 사이드바는 로그인 및 회원가입 페이지에서는 숨기고, 다른 페이지에서만 보이도록 설정 -->

      <div class="d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// 현재 경로를 가져오기 위해 useRoute 사용
const route = useRoute();

// 로그인 또는 회원가입 페이지일 경우 true를 반환
const isLoginPage = computed(() => {
  return ['/auth/login', '/auth/join'].includes(route.path);
});
</script>

<style scoped>
/* 스타일링 필요 시 추가 */
</style>
