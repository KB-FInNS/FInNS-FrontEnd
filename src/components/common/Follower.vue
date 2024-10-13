<template>
  <div class="box">
    <div><h1>팔로워 목록</h1></div>
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
        <FollowButton 
          :to_user_no="user.user_no" 
          :initialIsFollowing="user.following"
          @follow-status-changed="updateFollowStatus" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import FollowButton from './FollowButton.vue';
import moment from 'moment';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const users = ref([]);
const userNo = computed(() => route.params.userNo);

const getFollowingList = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/follow/followers/${userNo.value}`);
    
    if (Array.isArray(response.data)) {
      users.value = response.data.map(user => ({
        ...user,
        following: user.following  // 서버에서 팔로우 상태 함께 전달
      }));
    } else {
      users.value = [];
    }
  } catch (error) {
    console.error('팔로워 목록을 가져오는 데 실패했습니다:', error);
  }
  console.log(users.value);
};


const formatBirthDate = (timestamp) => {
  return moment(timestamp).format('YYYY-MM-DD');
};

const updateFollowStatus = (to_user_no, isFollowing) => {
  const user = users.value.find(u => u.user_no === to_user_no);
  if (user) {
    user.following = isFollowing;
  }
};

onMounted(getFollowingList);
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
