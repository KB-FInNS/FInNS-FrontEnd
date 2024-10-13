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
import { ref } from 'vue';
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

const isFollowing = ref(props.initialIsFollowing);

const handleFollowClick = async () => {
  try {
    const authData = JSON.parse(localStorage.getItem('auth'));
    const token = authData.token;
    const user_no = authData.user.user_no;
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };

    console.log('팔로우 상태:', isFollowing.value);
    console.log('요청 대상 사용자 번호 (to_user_no):', props.to_user_no);
    console.log('현재 로그인한 사용자 번호 (user_no):', user_no);

    let response;
    if (isFollowing.value) {
      console.log('언팔로우 요청 시작');
      response = await axios.delete(`http://localhost:8080/follow/${props.to_user_no}`, {
        ...config,
        data: { user_no }
      });
    } else {
      console.log('팔로우 요청 시작');
      response = await axios.post(`http://localhost:8080/follow/${props.to_user_no}`, { user_no }, config);
    }

    console.log('서버 응답:', response.data);

    isFollowing.value = !isFollowing.value;
    emit('follow-status-changed', props.to_user_no, isFollowing.value);
    
    console.log('팔로우 상태 변경 완료:', isFollowing.value);
  } catch (error) {
    console.error('팔로우/언팔로우에 실패했습니다:', error);
    if (error.response) {
      console.error('응답 데이터:', error.response.data);
      console.error('응답 상태:', error.response.status);
      console.error('요청 URL:', error.config.url);
      console.error('요청 메서드:', error.config.method);
    } else if (error.request) {
      console.error('요청은 보냈지만 응답을 받지 못했습니다.');
      console.error('요청 정보:', error.request);
    } else {
      console.error('요청 설정 중 오류가 발생했습니다:', error.message);
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.ms-10 {
  margin-left: 10px;
}
</style>