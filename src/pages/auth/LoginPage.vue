<template>
  <div class="login-container">
    <!-- Left Section: Image/Brand*ing -->
    <div class="login-left">
      <div class="branding mt-4">
        <div>
          <img src="@/assets/media/avatars/login_logo.png" class="logo" />
          <span class="logo">FInNS</span>
        </div>
        <img
          src="@/assets/media/avatars/loginpage.png"
          alt="Illustration"
          class="login-image"
        />
      </div>
    </div>

    <!-- Right Section: Login Form -->
    <div class="login-right">
      <div class="login-box">
        <h2 style="color: white; font-size: 35px">환영합니다!</h2>
        <p>FInNS 를 계속 이용하시려면 로그인을 해주세요</p>
        <form @submit.prevent="login">
          <div class="mb-3 mt-3" style="text-align: left">
            <label for="user_id" class="form-label"> 아이디 </label>
            <input
              type="text"
              class="form-control"
              placeholder="아이디를 입력하세요."
              v-model="member.user_id"
            />
          </div>

          <div class="mb-3" style="text-align: left; margin-top: 30px">
            <div class="form-inline">
              <label style="display: block; position: relative">
                <span class="form-label">비밀번호</span>
                <input
                  :type="passwordHidden ? 'password' : 'text'"
                  class="password-field form-control d-inline"
                  v-model="member.password"
                  placeholder="비밀번호를 입력하세요."
                  style="
                    width: 100%;
                    padding-right: 35px;
                    box-sizing: border-box;
                  "
                />
                <span
                  class="display-eye fa"
                  :class="passwordHidden ? 'fa-eye-slash' : 'fa-eye'"
                  @click="togglePasswordVisibility"
                  style="
                    position: absolute;
                    top: 70%;
                    right: 20px;
                    font-size: 1.5em;
                    transform: translateY(-50%);
                    cursor: pointer;
                    color: #757575;
                  "
                ></span>
              </label>
            </div>
          </div>

          <div v-if="error" class="text-danger">{{ error }}</div>
          <button
            type="submit"
            class="btn btn-primary mt-4"
            :disabled="disableSubmit"
            style="border-radius: 13px; height: 50px"
          >
          <div style="font-weight: 550; font-size: 17px">로그인</div>
          </button>
          <!-- <div class="text-center">또는</div>
          <button class="btn btn-success mt-2 w-100 naver-login-btn">
            <img
              src="../../assets/media/avatars/login_naver.png"
              class="naver-logo"
            />
            네이버 아이디로 로그인
          </button> -->

          <div class="text-center pt-6">
            <router-link
              to="/auth/join"
              class="link-text"
              style="color: white; font-size: 15px"
              >회원이 아니신가요? 가입하기</router-link
            >
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
  user_id: 'asd',
  password: '1234',
});
const error = ref('');
const disableSubmit = computed(() => !(member.user_id && member.password));

const login = async () => {
  try {
    await auth.login(member);
    router.push('/');
  } catch (e) {
    // 로그인 에러가 발생하는 경우 처리
    error.value =
      e.response?.data || '로그인에 실패하였습니다. 다시 시도해주세요.';
  }
};

const passwordText = ref('');
const passwordHidden = ref(true);
const togglePasswordVisibility = () => {
  passwordHidden.value = !passwordHidden.value;
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
  position: relative;
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
/* .naver-login-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; */
/* 이미지와 텍스트 사이 간격 */
/* adding: 10px; p */
/* 버튼의 패딩 */
/* } */

/* 네이버 로고의 크기 조정 */
/* .naver-logo {
  height: 34px;
} */

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
  border-bottom: 1px solid #fff;
  /* 선의 색상 (하얀색) */
  margin: 0 10px;
}

.divider span {
  font-size: 18px;
  font-weight: normal;
  color: white;
  /* 텍스트 색상 */
}

.link-text:hover {
  font-weight: bold;
  /**호버시 글자 두껍게**/
}

.display-eye {
  cursor: pointer;
  margin-left: 5px;
  right: 10px;
  /* 입력 필드의 오른쪽에 위치 */
  /* transform: translateY(-50%); 수직 중앙 정렬 */
  cursor: pointer;
  color: #000000;
}

.input-container {
  position: relative;
  display: inline-block;
  /* 인라인 블록으로 설정 */
}

.password-field {
  padding-right: 30px;
  /* 아이콘을 위한 오른쪽 패딩 추가 */
}

div.pwform {
  position: relative;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ffffff;
  background-color: white;
  border-radius: 13px;
  margin-top: 5px;
  height: 50px;
}

.form-control input {
  width: 400px;
  height: 30px;
  background-color: rgb(255, 255, 255);
  border: 0;
  color: white;
  text-indent: 10px;
}

.form-control span {
  position: absolute;
  left: 75%;
  top: 27px;
  color: rgb(255, 255, 255);
}
</style>
