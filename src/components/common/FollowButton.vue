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

const isFollowing = ref(props.initialIsFollowing);

const handleFollowClick = async () => {
  try {
    const authData = JSON.parse(localStorage.getItem('auth'));
    const user_no = authData.user.user_no;
    
    let response;

    if (isFollowing.value) {
      // 언팔로우 요청
      response = await axios.delete(`http://localhost:8080/follow/${props.to_user_no}`, {
        headers: { 'Authorization': `Bearer ${authData.token}` },
        data: { user_no }  // 서버에 요청할 때 유저 번호 함께 보냄
      });

    } else {
      // 팔로우 요청
      response = await axios.post(`http://localhost:8080/follow/${props.to_user_no}`, { user_no }, {
        headers: { 'Authorization': `Bearer ${authData.token}` }
      });
    }

    isFollowing.value = !isFollowing.value;  // 팔로우 상태 변경
    emit('follow-status-changed', props.to_user_no, isFollowing.value);

  } catch (error) {
    console.error('팔로우/언팔로우 요청 실패:', error);
  }
};

</script>
