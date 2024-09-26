<template>
  <div class="join-container d-flex">
    <!-- Left Section: Image and Branding -->
    <div
      class="left-section d-flex flex-column justify-content-center align-items-center"
    >
      <img
        src="@/assets/media/avatars/loginpage.png"
        alt="Brand Image"
        class="brand-image"
      />
      <h1 class="brand-title">FInNS</h1>
    </div>

    <!-- Right Section: Join Form -->
    <div class="right-section d-flex flex-column justify-content-center">
      <div class="form-container">
        <h1 class="form-title">회원 가입</h1>
        <form @submit.prevent="join">
          <div class="mb-3 mt-3">
            <label for="username" class="form-label">
              사용자 ID *
              <button
                type="button"
                class="btn btn-success btn-sm py-0 me-2"
                @click="checkUsername"
              >
                중복 확인
              </button>
              <span
                :class="disableSubmit.value ? 'text-primary' : 'text-danger'"
              >
                {{ checkError }}
              </span>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="아이디를 입력하세요..."
              id="username"
              @input="changeUsername"
              v-model="member.username"
            />
            <small class="form-text text-muted"
              >* 아이디는 중복 확인을 해야 합니다.</small
            >
          </div>

          <div class="mb-3">
            <label for="password" class="form-label"> 비밀번호 * </label>
            <input
              type="password"
              class="form-control"
              placeholder="비밀번호를 입력하세요..."
              id="password"
              v-model="member.password"
            />
          </div>

          <div class="mb-3">
            <label for="password2" class="form-label"> 비밀번호 확인 * </label>
            <input
              type="password"
              class="form-control"
              placeholder="비밀번호를 다시 입력하세요..."
              id="password2"
              v-model="member.password2"
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label"> 이메일 * </label>
            <input
              type="email"
              class="form-control"
              placeholder="이메일을 입력하세요..."
              id="email"
              v-model="member.email"
            />
          </div>

          <div class="mb-3">
            <label for="mbti" class="form-label"> MBTI * </label>
            <input
              type="text"
              class="form-control"
              placeholder="MBTI를 입력하세요..."
              id="mbti"
              v-model="member.mbti"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary w-100"
            :disabled="disableSubmit"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import authApi from '@/api/authApi.js';

const router = useRouter();
const avatar = ref(null);
const checkError = ref('');
const member = reactive({
  username: '',
  email: '',
  password: '',
  password2: '',
  mbti: '',
  avatar: null,
});
const disableSubmit = ref(true);

const checkUsername = async () => {
  if (!member.username) {
    return alert('사용자 ID를 입력하세요.');
  }
  disableSubmit.value = await authApi.checkUsername(member.username);
  checkError.value = disableSubmit.value
    ? '이미 사용중인 ID입니다.'
    : '사용가능한 ID입니다.';
};

const changeUsername = () => {
  disableSubmit.value = true;
  checkError.value = member.username ? 'ID 중복 체크를 하셔야 합니다.' : '';
};

const join = async () => {
  if (member.password !== member.password2) {
    return alert('비밀번호가 일치하지 않습니다.');
  }
  if (avatar.value?.files.length > 0) {
    member.avatar = avatar.value.files[0];
  }
  try {
    await authApi.create(member);
    router.push({ name: 'home' });
  } catch (e) {
    console.error(e);
  }
};
</script>

<style scoped>
/* 전체 레이아웃 설정 */
.join-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

/* 왼쪽 섹션: 이미지와 로고 */
.left-section {
  flex: 1;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.brand-image {
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
}

.brand-title {
  font-size: 48px;
  font-weight: bold;
  color: #0a74da;
}

/* 오른쪽 섹션: 회원가입 폼 */
.right-section {
  flex: 1;
  background-color: #0a74da;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.form-container {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  color: #333;
}

.form-label {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 8px;
}

.form-control {
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 10px;
}

.form-text {
  font-size: 12px;
  color: #999;
}

.btn-primary {
  background-color: #0062cc;
  border-color: #0062cc;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-success {
  margin-left: 8px;
}

.text-primary {
  color: #0a74da !important;
}

.text-danger {
  color: #dc3545 !important;
}

.w-100 {
  width: 100%;
}
</style>
