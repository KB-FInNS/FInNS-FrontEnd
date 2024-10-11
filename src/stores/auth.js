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
  },
};

export const useAuthStore = defineStore('auth', () => {
  const state = ref({ ...initState });

  const isLogin = computed(() => !!state.value.user.userName); // 로그인 여부
  const userNo = computed(() => state.value.user.userNo);
  const userName = computed(() => state.value.user.userName); // 로그인 사용자 ID
  const email = computed(() => state.value.user.email); // 로그인 사용자 email
  const mbtiName = computed(() => state.value.user.mbtiName); // mbti
  const birth = computed(() => state.value.user.birth); // 생년월일
  const renew_time = computed(() => state.value.user.renew_time); // 시, 분, 초 포함한 시간

  // 로그인 요청 (DB에서 birth 및 renew_time 값 포함)
  const login = async (member) => {
    const { data } = await axios.post('/api/auth/login', member);

    // DB에서 받아온 birth와 renew_time 값을 moment로 포맷
    const formattedBirth = moment(data.user.birth).format('YYYY-MM-DD');
    const formattedRenewTime = moment(data.user.renew_time).format(
      'YYYY-MM-DD HH:mm:ss'
    ); // 시, 분, 초까지 포맷
    console.log('로그인 응답 데이터:', data); // 로그인 응답 확인
    // state 업데이트
    state.value = {
      ...data,
      user: {
        ...data.user,
        birth: formattedBirth, // 포맷된 birth 값 설정
        renew_time: formattedRenewTime, // 포맷된 renew_time 설정
      },
    };

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
    renew_time, // 업데이트된 필드
    changeProfile,
    login,
    logout,
    getToken,
  };
});
