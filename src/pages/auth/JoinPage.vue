<template>
  <div class="join-container d-flex">
    <!-- Left Section: Image/Branding -->
    <div class="login-left">
      <div class="branding mt-4">
        <div>
          <img src="/assets/media/avatars/login_logo.png" class="logo" />
          <span class="logo">FInNS</span>
        </div>
        <img
          src="/assets/media/avatars/loginpage.png"
          alt="Illustration"
          class="login-image"
        />
      </div>
    </div>

    <!-- Right Section: Join Form -->
    <div class="right-section d-flex flex-column justify-content-center">
      <div class="form-container">
        <h1 class="form-title" style="color: white; margin-bottom: 10px">
          회원 가입
        </h1>
        <p
          style="
            font-size: 18px;
            margin-bottom: 30px;
            color: #ffffff;
            text-align: center;
          "
        >
          계정 생성을 위해 회원가입을 해주세요.
        </p>
        <form @submit.prevent="join">
          <div class="mb-3 mt-3">
            <label for="username" class="form-label">
              아이디 *
              <button
                type="button"
                class="btn btn-success btn-sm py-0 me-2"
                @click="checkUsername"
              >
                중복 확인
              </button>

              <!-- <span :class="disableSubmit ? 'text-danger' : 'text-danger'" style=" font-size: 12px;">
                {{ checkError }}
              </span> -->

              <span style="font-size: 12px; color: red">
                {{ checkError }}
              </span>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="아이디를 입력하세요."
              id="username"
              @input="changeUsername"
              v-model="member.username"
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label"> 비밀번호 * </label>
            <input
              type="password"
              class="form-control"
              placeholder="비밀번호를 입력하세요."
              id="password"
              v-model="member.password"
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label"> 비밀번호 확인 * </label>
            <input
              type="password"
              class="form-control"
              placeholder="비밀번호를 다시 입력하세요."
              id="password2"
              v-model="member.password2"
            />
          </div>
          <div class="mb-3">
            <label for="birthdate" class="form-label"> 생년월일 * </label>
            <input
              type="text"
              class="form-control"
              placeholder="생년월일을 입력하세요..."
              id="birthdate"
              v-model="member.birth"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary w-100 mt-4"
            :disabled="disableSubmit"
            style="border-radius: 13px; height: 50px"
          >
            <div style="font-weight: 550; font-size: 17px">회원가입</div>
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
  password: '',
  password2: '',
  birth: '',
  renew_time: '',
});

const email = ref({ email: '' });

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
  try {
    await authApi.create(member);
    router.push({ name: 'Main' });
  } catch (e) {
    console.error(e);
  }
};

// const user_email_rule = (v) => {
//   const emailRegex =
//     /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
//   return emailRegex.test(v) ? '' : '이메일 주소를 정확히 입력해주세요.';
// };

// const validateEmail = () => {
//   emailError.value = user_email_rule(email.value.email);
// };
</script>

<style scoped>
/* 전체 레이아웃 */
.join-container {
  display: flex;
  height: 100vh;
}

/* 왼쪽 섹션: 이미지와 로고 */
.left-section,
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

/* 오른쪽 섹션: 회원가입 폼 */
.right-section {
  background-color: #5dc0f6;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.form-container {
  background-color: #5dc0f6;
  padding: 40px;
  border-radius: 8px;
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */
  width: 100%;
  max-width: 500px;
}

.form-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 35px;
  color: #333;
}

.form-label {
  font-weight: bold;
  font-size: 18px;
  /* margin-bottom: 8px; */
  text-align: right;
  color: white;
}

.form-control {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ffffff;
  border-radius: 13px;
  margin-top: 5px;
  margin-bottom: 16px;
  height: 50px;
}

.form-text {
  font-size: 12px;
  color: #ffffff;
}

.btn-primary {
  background-color: #22adfc;
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

@media (max-width: 768px) {
  .join-container {
    flex-direction: column;
  }

  .left-section,
  .login-left {
    display: none;
  }

  .right-section {
    flex: none;
    width: 100%;
    padding: 20px;
  }
}
</style>
