<template>
  <button
    class="btn btn-sm ms-10"
    :class="isFollowing ? 'btn-primary' : 'btn-light'"
    @click="handleFollowClick"
  >
    <span>{{ isFollowing ? '팔로잉' : '팔로우' }}</span>
  </button>
</template>

<script>
import { ref, onMounted } from 'vue';
import followApi from '@/api/followApi'; // 팔로우/언팔로우 API 함수 모듈 (axios 요청)

export default {
  props: {
    to_user_no: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const isFollowing = ref(false);

    // 팔로우 상태 확인
    const checkFollowStatus = async () => {
      try {
        const response = await followApi.getFollowStatus(props.to_user_no); // 실제 API 호출
        isFollowing.value = response.data.isFollowing;
      } catch (error) {
        console.error('Failed to fetch follow status:', error);
      }
    };

    // 팔로우/언팔로우 상태를 변경하는 함수
    const handleFollowClick = async () => {
      try {
        if (isFollowing.value) {
          await followApi.unfollow(props.to_user_no); // 언팔로우 요청
        } else {
          await followApi.follow(props.to_user_no); // 팔로우 요청
        }
        isFollowing.value = !isFollowing.value; // 팔로우 상태 반전
      } catch (error) {
        console.error('Failed to follow/unfollow:', error);
      }
    };

    // 컴포넌트가 마운트되면 팔로우 상태를 확인
    onMounted(() => {
      checkFollowStatus();
    });

    return {
      isFollowing,
      handleFollowClick,
    };
  },
};
</script>

<style scoped>
.ms-10 {
  margin-left: 10px;
}

.btn-primary {
  background-color: #0d6efd;
  color: white;
}

.btn-light {
  background-color: #f8f9fa;
  color: black;
}
</style>
