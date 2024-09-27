<template>
  <div class="login-container">
    <!-- Left Section: Image/Branding -->
    <div class="login-left">
      <div class="branding mt-4">
        <div style="font-size:xx-large; font-weight: bolder;">
          <img src="@/assets/media/avatars/login_logo.png" style="height: 100px;"/>
          FInNS
        </div>
        <img src="@/assets/media/avatars/loginpage.png" alt="Illustration" class="login-image" />
      </div>
    </div>

    <!-- Right Section: Login Form -->
    <div class="login-right">
      <div class="login-box">
        <h2 style="color: white; font-size: 35px">환영합니다!</h2>
        <p>FInNS 를 계속 이용하시려면 로그인을 해주세요</p>
        <form @submit.prevent="login">
          <div class="mb-3 mt-3" style="text-align: left;">
            <label for="username" class="form-label">
              아이디
            </label>
            <input type="text" class="form-control" placeholder="아이디를 입력하세요..." v-model="member.username" />
          </div>
          <div class="mb-3" style="text-align: left; margin-top: 30px;">
            <label for="password" class="form-label">
              비밀번호
            </label>
            <input type="password" class="form-control" placeholder="비밀번호를 입력하세요..." v-model="member.password" />
          </div>
          <div v-if="error" class="text-danger">{{ error }}</div>
          <button type="submit" class="btn btn-primary mt-9" style="border-radius: 13px; height: 50px;"
            :disabled="disableSubmit">
            <div style=" font-weight:550; font-size: 17px;">로그인</div>
          </button>
          <div class="divider">
            <span>OR</span>
          </div>
          <button class="btn mt-2 w-100 naver-login-btn" style="border-radius: 13px; height: 50px; border: 1px solid #fff; /* 버튼의 테두리 추가 */">
            <img src="../../assets/media/avatars/login_naver.png" class="naver-logo"/>
            <div style=" font-weight: 550; font-size: 16px; color: white;">네이버 아이디로 로그인</div>
          </button>

          <div class="text-center pt-6">
            <router-link to="/auth/join" class="link-text"
            style="color: white; font-size: 15px;">계정이 없으신가요? 가입하기</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRoute, useRouter } from 'vue-router';

const cr = useRoute();
const router = useRouter();
const auth = useAuthStore();
const member = reactive({
  username: '',
  password: '',
});
const error = ref('');
const disableSubmit = computed(() => !(member.username && member.password));

const login = async () => {
  try {
    await auth.login(member);
    router.push('/');
  } catch (e) {
    // 로그인 에러
    error.value = e.response.data;
  }
};
</script>

<style scoped>
/* 전체 레이아웃 */
.login-container {
  display: flex;
  height: 100vh;
}

/* 왼쪽 섹션 (이미지, 로고) */
.login-left {
  background-color: #fefefe;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
}

.branding {
  text-align: center;
}

.logo {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.login-image {
  /* max-width: 100%;
  height: auto; */
  width: 600px;
  height: auto;
}

/* 오른쪽 섹션 (로그인 폼) */
.login-right {
  background-color: #5dc0f6;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.login-box {
  background-color: #5dc0f6;
  padding: 40px;
  border-radius: 8px;
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */
  max-width: 500px;
  width: 100%;
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 30px;
  color: #ffffff;
}

.form-label {
  font-weight: bold;
  font-size: 18px;
  color: white;
  text-align: right;
}

.form-control {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ffffff;
  border-radius: 13px;
  margin-top: 5px;
  height: 50px;
}

.btn-primary {
  background-color: #22adfc;
  border-color: #12549b;
  width: 100%;
}

.btn-success {
  background-color: #2ecc71;
  border-color: #2ecc71;
  color: rgb(255, 255, 255);
  width: 100%;
  height: 43px;
}

.text-center {
  text-align: center;
  color: white;
}

.mt-3 {
  margin-top: 1rem;
}

.mt-4 {
  margin-top: 1.5rem;
}

.w-100 {
  width: 100%;
}

.text-danger {
  color: red;
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }

  .login-left {
    display: none;
  }

  .login-right {
    flex: none;
    width: 100%;
    padding: 20px;
  }
}

/* 네이버 로그인 버튼 정렬 */
.naver-login-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  /* 이미지와 텍스트 사이 간격 */
  padding: 10px;
  /* 버튼의 패딩 */
}

/* 네이버 로고의 크기 조정 */
.naver-logo {
  height: 34px;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #fff; /* 선의 색상 (하얀색) */
  margin: 0 10px;
}

.divider span {
  font-size: 18px;
  font-weight: normal;
  color: white; /* 텍스트 색상 */
}
.link-text:hover {
  font-weight:900; /**호버시 글자 두껍게**/
}
</style>
