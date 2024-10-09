import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const initState = {
  token: '', // 접근 토큰(JWT)
  user: {
    userNo: '', // 사용자 no
    userName: '', // 사용자 ID
    mbtiName: '', // 추가된 필드
    birth: '', // 추가된 필드
  },
};

export const useAuthStore = defineStore('auth', () => {
  const state = ref({ ...initState });
  const isLogin = computed(() => !!state.value.user.userName); // 로그인 여부
  const userName = computed(() => state.value.user.userName); // 로그인 사용자 ID
  const email = computed(() => state.value.user.email); // 로그인 사용자 email
  const mbtiName = computed(() => state.value.user.mbtiName); // mbti
  const birth = computed(() => state.value.user.birth); // 생년월일

  const login = async (member) => {
    const { data } = await axios.post('/api/auth/login', member);
    console.log('로그인 응답 데이터:', data); // 로그인 응답 확인
    state.value = { ...data };
    localStorage.setItem('auth', JSON.stringify(state.value));
  };

  const logout = () => {
    localStorage.clear();
    state.value = { ...initState };
  };

  const getToken = () => state.value.token;


  const load = () => {
    const auth = localStorage.getItem('auth');
    if (auth != null) {
      state.value = JSON.parse(auth);
      console.log('스토어 로드된 state:', state.value); // 확인 로그
    }
  };
  const changeProfile = (member) => {
    state.value.user.userName = member.userName; // userName 업데이트
    state.value.user.email = member.email; // email 업데이트
    state.value.user.birth = member.birth; // birth 업데이트
    state.value.user.mbtiName = member.mbtiName; // mbti 업데이트
    localStorage.setItem('auth', JSON.stringify(state.value));
  };

  load();

  return {
    state,
    userName,
    email,
    birth,
    mbtiName,
    isLogin,
    changeProfile,
    login,
    logout,
    getToken,
  };
});