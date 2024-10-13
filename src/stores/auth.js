import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import moment from 'moment'; // moment.js import

const initState = {
  token: '', // 접근 토큰(JWT)
  user: {
    userNo: '', // 사용자 no
    userName: '', // 사용자 ID
    mbtiName: '', // 추가된 필드
    birth: '', // DB에서 받아올 값
    renew_time: '', // 변경된 필드
    isSignedUp: false, // 회원가입 여부 플래그 추가
  },
};

export const useAuthStore = defineStore('auth', () => {
  const state = ref({ ...initState });

  const isLogin = computed(() => {
    // console.log('isLogin 계산:', !!state.value.token);
    return !!state.value.token;
  });
  const isSignedUp = computed(() => state.value.user.isSignedUp); // 회원가입 여부

  const userNo = computed(() => state.value.user.userNo);
  const userName = computed(() => state.value.user.userName); // 로그인 사용자 ID
  const email = computed(() => state.value.user.email); // 로그인 사용자 email
  const mbtiName = computed(() => state.value.user.mbtiName); // mbti
  const birth = computed(() => state.value.user.birth); // 생년월일
  const renew_time = computed(() => state.value.user.renew_time); // 시, 분, 초 포함한 시간

  const login = async (member) => {
    try {
      const { data } = await axios.post('/api/auth/login', member);
  
      // state 업데이트
      state.value = {
        token: data.token,
        user: {
          ...data.user,
          user_no: data.user.user_no,
          birth: moment(data.user.birth).format('YYYY-MM-DD'),
          renew_time: moment(data.user.renew_time).format('YYYY-MM-DD HH:mm:ss'),
        },
      };
  
      localStorage.setItem('auth', JSON.stringify(state.value));
      // console.log('로그인 후 state:', state.value);
      // console.log('로그인 직후 isLogin:', isLogin.value);
      return true;
    } catch (error) {
      console.error('로그인 실패:', error.response ? error.response.data : error);
      return false;
    }
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
    state.value.user.birth = moment(member.birth).format('YYYY-MM-DD'); // birth 업데이트
    state.value.user.mbtiName = member.mbtiName; // mbti 업데이트
    localStorage.setItem('auth', JSON.stringify(state.value));
  };

  load();

  return {
    state,
    userName,
    userNo,
    email,
    birth,
    mbtiName,
    isLogin,
    isSignedUp, // 추가된 회원가입 여부
    renew_time, // 업데이트된 필드
    changeProfile,
    login,
    logout,
    getToken,
  };
});
