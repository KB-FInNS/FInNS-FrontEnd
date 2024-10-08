<template>
  <button
    class="btn btn-sm ms-10"
    :class="isFollowing ? 'btn-light' : 'btn-primary'"
    @click="handleFollowClick"
  >
    <span>{{ isFollowing ? '팔로잉' : '팔로우' }}</span>
  </button>
</template>

<script>
import { ref } from 'vue';
import followApi from '@/api/followApi';
import { useAuthStore } from '@/stores/auth';

export default {
  props: {
    to_user_no: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const authStore = useAuthStore(); // Pinia 스토어에서 인증 정보 가져오기
    const user_no = ref(authStore.user_no); // Pinia에서 가져온 user_no 사용
    // 반응형 상태 정의
    const isFollowing = ref(false);

    // 클릭 시 팔로우 상태를 토글하는 함수
    const handleFollowClick = async () => {
      try {
        // followApi로 팔로우/언팔로우 요청
        await followApi.follow(props.to_user_no, isFollowing.value);
        isFollowing.value = !isFollowing.value; // 상태 토글
      } catch (error) {
        console.error('Failed to follow/unfollow:', error);
      }
    };

    // 컴포넌트에서 사용하는 값과 메서드 반환
    return {
      isFollowing,
      handleFollowClick,
      user_no, // user_no 사용 가능
    };
  },
};
</script>
