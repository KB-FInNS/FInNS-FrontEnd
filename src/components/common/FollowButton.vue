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
import { ref, onMounted } from 'vue';
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
    const user_no = ref(authStore.userNo); // Pinia에서 가져온 user_no 사용 (context 상 userNo으로 수정)
    const isFollowing = ref(false); // 팔로우 상태

    // 컴포넌트가 마운트될 때 팔로우 상태를 초기화
    onMounted(async () => {
      try {
        // followApi에서 현재 팔로우 상태를 가져오기
        const response = await followApi.getFollowStatus(
          user_no.value,
          props.to_user_no
        );
        isFollowing.value = response.data.isFollowing; // 서버에서 받은 팔로우 상태로 초기화
      } catch (error) {
        console.error('Failed to fetch follow status:', error);
      }
    });

    // 클릭 시 팔로우 상태를 토글하는 함수
    const handleFollowClick = async () => {
      try {
        // 팔로우/언팔로우 요청에 따라 followApi 호출
        if (isFollowing.value) {
          await followApi.unfollow(props.to_user_no); // 언팔로우 요청
        } else {
          await followApi.follow(props.to_user_no); // 팔로우 요청
        }
        isFollowing.value = !isFollowing.value; // 팔로우 상태 토글
      } catch (error) {
        console.error('Failed to follow/unfollow:', error);
      }
    };

    return {
      isFollowing,
      handleFollowClick,
      user_no, // user_no 사용 가능
    };
  },
};
</script>

<style scoped>
.ms-10 {
  margin-left: 10px;
}
</style>
