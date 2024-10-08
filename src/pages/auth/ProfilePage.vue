<script setup>
import authApi from '@/api/authApi';
import followApi from '@/api/followApi';

import { useAuthStore } from '@/stores/auth';
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

// 인증 스토어
const auth = useAuthStore();
const router = useRouter();

// 아바타 처리를 위한 Ref
const avatar = ref(null); // 아바타 파일 입력 참조
const avatarPath = ref('/src/assets/media/avatars/black.png'); // 기본 아바타 이미지 경로

// 회원 정보를 담고 있는 reactive 상태
const member = reactive({
  username: auth.username,
  birth: auth.birth, // 추가: 생년월일
  oldPassword: '',
  newPassword: '',
  newPassword2: '',
  avatar: null,
  mbti_name: auth.mbti_name, // 추가: MBTI
});

// 비밀번호 변경 상태
const changePassword = reactive({
  oldPassword: '',
  newPassword: '',
  newPassword2: '',
});

// 에러 메시지 상태
const error = ref('');
const inputPassword = () => (error.value = '');
const resetError = () => (error.value = '');

// 전송 버튼 비활성화 여부 계산 속성
const disableSubmit = computed(
  () =>
    !changePassword.oldPassword ||
    !changePassword.newPassword ||
    !changePassword.newPassword2
);

const logout = (e) => {
  // 로그아웃 처리
  auth.logout();
  router.push('/auth/login'); // 로그아웃 후 메인 페이지로 이동
};

// 폼 전송 핸들러
const onSubmit = async () => {
  if (!confirm('수정하시겠습니까?')) return;

  // 새 비밀번호와 확인 비밀번호가 일치하는지 검사
  if (changePassword.newPassword !== changePassword.newPassword2) {
    error.value = '새 비밀번호가 일치하지 않습니다.';
    return;
  }

  // 새 아바타 파일이 선택되었을 경우 member 객체에 업데이트
  if (avatar.value && avatar.value.files.length > 0) {
    member.avatar = avatar.value.files[0];
  }

  // changePassword의 값을 member에 합침
  member.oldPassword = changePassword.oldPassword;
  member.newPassword = changePassword.newPassword;

  // FormData 객체 생성
  const formData = new FormData();
  formData.append('user_id', member.user_id);
  formData.append('birthdate', member.birthdate);
  formData.append('mbti_name', member.mbti_name);
  formData.append('oldPassword', member.oldPassword);
  formData.append('newPassword', member.newPassword);

  // 아바타가 있을 경우 FormData에 추가
  if (member.avatar) {
    formData.append('avatar', member.avatar);
  }

  // API 호출을 통한 프로필 업데이트 시도
  try {
    await authApi.update(formData);
    error.value = '';
    auth.changeProfile(member);
    alert('정보를 수정하였습니다.');
  } catch (e) {
    // 오류 메시지를 상세하게 출력
    console.error('업데이트 에러:', e.response);
    error.value = e.response?.data?.message || '오류가 발생했습니다.';
  }
};

// 아바타 편집 핸들러 (파일 입력 트리거)
const onEditAvatar = () => {
  avatar.value?.click(); // 파일 입력 클릭 트리거
};

// 파일 변경을 감시하고 아바타 미리보기 업데이트
const onAvatarChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // 새로운 이미지의 URL을 생성하고 avatarPath 업데이트
    avatarPath.value = URL.createObjectURL(file);
  }
};

// 아바타 삭제 핸들러 (기본 이미지로 재설정)
const onDeleteAvatar = () => {
  avatarPath.value = '/src/assets/media/avatars/black.png'; // 기본 아바타 이미지로 설정
  alert('프로필 사진이 삭제되었습니다.');
};

// const
</script>

<template>
  <!-- 팔로우/언팔로우 버튼 -->
  <div class="d-flex justify-content-end mt-3">
    <!-- <button @click="handleFollow" class="btn btn-info btn-lg me-2">
      {{ followStatus ? '언팔로우' : '팔로우' }}
    </button> -->
  </div>
  <div class="justify-content-center align-items-center text-center bg-title">
    <h1 class="text-gray-900 fw-bold pt-8 mt-14 my-1 fs-1">마이페이지</h1>
    <h2 class="text-gray-700 fw-bold p-4 fs-2">개인정보를 수정해주세요.</h2>
  </div>
  <div class="container mt-10 mx-auto">
    <form @submit.prevent="onSubmit">
      <!-- Profile image and description -->
      <div class="col-md-8">
        <div class="md-3 row">
          <label
            for="avatar"
            class="col-sm-4 col-form-label fw-bold d-flex align-items-center"
          >
            프로필 사진
          </label>
          <div class="avatar-container mb-10 position-relative">
            <img :src="avatarPath" class="avatar img-thumbnail" />
            <!-- Edit button for avatar -->
            <button
              type="button"
              class="btn-icon edit-avatar-btn position-absolute"
              @click="onEditAvatar"
            >
              ✏️
            </button>
            <!-- Delete button for avatar -->
            <button
              type="button"
              class="btn-icon delete-avatar-btn position-absolute"
              @click="onDeleteAvatar"
            >
              🗑️
            </button>
            <!-- Hidden file input for avatar change -->
            <input
              type="file"
              ref="avatar"
              @change="onAvatarChange"
              accept="image/*"
              style="display: none"
            />
          </div>
          <!-- Form fields for user details -->
          <div class="mb-6 row">
            <label for="user_id" class="col-sm-4 col-form-label fw-bold"
              >아이디</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="user_id"
                v-model="member.username"
                readonly
              />
            </div>
          </div>

          <div class="mb-6 row">
            <label for="birthdate" class="col-sm-4 col-form-label fw-bold"
              >생년월일</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="birth"
                v-model="member.birth"
              />
            </div>
          </div>
          <div class="mb-6 row">
            <label for="oldPassword" class="col-sm-4 col-form-label fw-bold"
              >이전 비밀번호</label
            >
            <div class="col-sm-8">
              <input
                type="password"
                class="form-control"
                placeholder="이전 비밀번호"
                v-model="changePassword.oldPassword"
                @input="inputPassword"
              />
            </div>
          </div>
          <div class="mb-6 row">
            <label for="newPassword" class="col-sm-4 col-form-label fw-bold"
              >새 비밀번호</label
            >
            <div class="col-sm-8">
              <input
                type="password"
                class="form-control"
                placeholder="새 비밀번호"
                v-model="changePassword.newPassword"
                @input="resetError"
              />
            </div>
          </div>
          <div class="mb-6 row">
            <label for="newPassword2" class="col-sm-4 col-form-label fw-bold"
              >새 비밀번호 확인</label
            >
            <div class="col-sm-8">
              <input
                type="password"
                class="form-control"
                placeholder="새 비밀번호 확인"
                v-model="changePassword.newPassword2"
                @input="resetError"
              />
            </div>
          </div>
          <div class="mb-6 row">
            <label for="mbti_name" class="col-sm-4 col-form-label fw-bold"
              >MBTI</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="mbti_name"
                v-model="member.mbti_name"
                readonly
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="error" class="text-danger text-center">{{ error }}</div>
      <div class="d-flex justify-content-end mt-3">
        <button type="button" class="btn btn-light btn-lg me-2">취소</button>
        <button
          type="submit"
          class="btn btn-primary btn-lg"
          :disabled="disableSubmit"
        >
          저장
        </button>
      </div>
      <!-- 로그아웃 버튼 -->
      <div class="d-flex justify-content-end mt-3">
        <button @click.prevent="logout" class="btn btn-danger btn-lg">
          <i class="fa-solid fa-right-from-bracket"></i> 로그아웃
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.bg-title {
  background-color: #f0f6f9; /* Powder Blue 색상 */
  height: 200px;
}
.container {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.avatar-container {
  width: 150px;
  height: 150px;
  position: relative;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 50%;
}

.btn-icon {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
}

.edit-avatar-btn {
  top: 5px;
  right: 45px;
}

.delete-avatar-btn {
  bottom: 5px;
  right: 5px;
}

.form-label {
  font-weight: 600;
  margin-bottom: 8px;
}

.form-control {
  border-radius: 6px;
}

.btn-lg {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
}

.edit-avatar-btn {
  top: 5px;
  right: 5px; /* Adjusted to align with the delete button */
}
</style>
