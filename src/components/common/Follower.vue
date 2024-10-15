<template>
  <div class="box">
    <div class="text-center mt-10 mb-5"><h1>팔로워 목록</h1></div>
    <div
      v-for="user in users"
      :key="user.user_no"
      class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed"
    >
      <div class="d-flex align-items-center">
        <div class="symbol symbol-35px symbol-circle">
          <img :src="user.img_url" alt="User Image" v-if="user.img_url">
          <span class="symbol-label bg-light-danger text-danger fw-semibold" v-else>
            {{ user.username[0].toUpperCase() }}
          </span>
        </div>
        <div class="ms-5">
          <router-link 
            :to="{ name: 'Profile', params: { userNo: user.user_no } }" 
            class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
          >
            {{ user.username }}
          </router-link>
          <div class="fw-semibold text-muted">{{ formatBirthDate(user.birth) }}</div>
        </div>
      </div>
      <div class="ms-2">
        <!-- 팔로우 상태에 따라 팔로우/언팔로우 버튼 렌더링 -->
        <FollowButton v-if="auth.user.user_no != user.user_no"
          :to_user_no="user.user_no" 
          :initialIsFollowing="user.following"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import FollowButton from './FollowButton.vue';
import moment from 'moment';
import { useRoute } from 'vue-router';

const route = useRoute();
const users = ref([]);
const userNo = route.params.userNo;
const auth = JSON.parse(localStorage.getItem('auth'));

const getFollowerList = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/users/${userNo}/follower/${auth.user.user_no}`);
    users.value = response.data;

  } catch (error) {
    console.error('팔로워 목록을 가져오는 데 실패했습니다:', error);
  }
  console.log(users.value);
};

const formatBirthDate = (timestamp) => {
  return moment(timestamp).format('YYYY-MM-DD');
};

onMounted(() => {
  getFollowerList();
});
</script>

<style scoped>
.box {
  width: 700px;
  margin: 0 auto;
}

.symbol {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  height: 35px;
  width: 35px;
}

.symbol-circle {
  border-radius: 50%;
  background-color: #f5f5f5;
}

.ms-5 {
  margin-left: 1rem;
}

.d-flex {
  display: flex;
}

.flex-stack {
  justify-content: space-between;
}

.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
