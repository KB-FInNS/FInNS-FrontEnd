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

<template>
  <div class="login-container">
    <!-- Left Section: Image/Branding -->
    <div class="login-left">
      <div class="branding">
        <h1 class="logo">FInNS</h1>
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
        <h2>환영합니다!</h2>
        <p>FInNS 계정으로 로그인하세요.</p>
        <form @submit.prevent="login">
          <div class="mb-3 mt-3">
            <label for="username" class="form-label">
              <i class="fa-solid fa-user"></i> 아이디:
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="아이디를 입력하세요..."
              v-model="member.username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              <i class="fa-solid fa-lock"></i> 비밀번호:
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="비밀번호를 입력하세요..."
              v-model="member.password"
            />
          </div>
          <div v-if="error" class="text-danger">{{ error }}</div>
          <button
            type="submit"
            class="btn btn-primary mt-4"
            :disabled="disableSubmit"
          >
            로그인
          </button>
          <div class="mt-3 text-center">또는</div>
          <button class="btn btn-success mt-2 w-100">
            네이버 아이디로 로그인
          </button>
          <div class="text-center mt-4">
            <router-link to="/auth/join"
              >계정이 없으신가요? 가입하기</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

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
  padding: 20px;
  color: white;
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
  max-width: 100%;
  height: auto;
}

/* 오른쪽 섹션 (로그인 폼) */
.login-right {
  background-color: #00a3ff;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  margin-bottom: 30px;
  color: #6c757d;
}

.form-label {
  font-weight: bold;
  font-size: 14px;
}

.form-control {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
}

.btn-primary {
  background-color: #0a74da;
  border-color: #0a74da;
  width: 100%;
}

.btn-success {
  background-color: #2ecc71;
  border-color: #2ecc71;
  color: white;
  width: 100%;
}

.text-center {
  text-align: center;
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
</style>
