<template>
  <button
    class="btn btn-sm ms-10"
    :class="isFollowing ? 'btn-light' : 'btn-primary'"
    @click="followClick"
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

const isFollowing = ref(props.initialIsFollowing);
const auth = JSON.parse(localStorage.getItem('auth'));

// `props.initialIsFollowing`의 변화를 감지해서 `isFollowing`을 업데이트
watch(() => props.initialIsFollowing, (newVal) => {
  isFollowing.value = newVal;
});

const followClick = async () => {
  try {
    let response;
    if (isFollowing.value) {
      // 언팔로우 요청
      response = await axios.delete(`http://localhost:8080/unfollow/${auth.user.user_no}/${props.to_user_no}`);
    } else {
      // 팔로우 요청
      response = await axios.post(`http://localhost:8080/follow/${auth.user.user_no}/${props.to_user_no}`);
    }

    // 팔로우 상태 변경
    isFollowing.value = !isFollowing.value;

  } catch (error) {
    console.error('팔로우/언팔로우 요청 실패:', error);
  }
};
</script>
