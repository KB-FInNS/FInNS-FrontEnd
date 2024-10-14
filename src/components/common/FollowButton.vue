<template>
  <button
    class="btn btn-sm ms-10"
    :class="isFollowing ? 'btn-primary' : 'btn-light'"
    @click="handleFollowClick"
  >
    <span>{{ isFollowing ? '팔로잉' : '팔로우' }}</span>
  </button>
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';

const props = defineProps({
  to_user_no: {
    type: Number,
    required: true,
  },
  initialIsFollowing: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['follow-status-changed']);

// `initialIsFollowing`을 기준으로 반응형 변수 생성
const isFollowing = ref(props.initialIsFollowing);

// `initialIsFollowing`이 변경될 경우 `isFollowing` 동기화
watch(
  () => props.initialIsFollowing,
  (newValue) => {
    isFollowing.value = newValue;
  }
);

const handleFollowClick = async () => {
  try {
    const authData = JSON.parse(localStorage.getItem('auth'));
    const user_no = authData.user.user_no;

    if (!authData || !authData.token) {
      throw new Error('인증 정보가 유효하지 않습니다.');
    }

    let response;

    if (isFollowing.value) {
      // 언팔로우 요청
      response = await axios.delete(
        `http://localhost:8080/follow/${props.to_user_no}`,
        {
          headers: { Authorization: `Bearer ${authData.token}` },
          data: { user_no }, // 서버에 요청할 때 유저 번호 함께 보냄
        }
      );
    } else {
      // 팔로우 요청
      response = await axios.post(
        `http://localhost:8080/follow/${props.to_user_no}`,
        { user_no },
        {
          headers: { Authorization: `Bearer ${authData.token}` },
        }
      );
    }

    // 팔로우 상태 변경
    isFollowing.value = !isFollowing.value;

    // 상태가 변경되면 부모 컴포넌트에 알림
    emit('follow-status-changed', props.to_user_no, isFollowing.value);
  } catch (error) {
    console.error('팔로우/언팔로우 요청 실패:', error);
  }
};
</script>
