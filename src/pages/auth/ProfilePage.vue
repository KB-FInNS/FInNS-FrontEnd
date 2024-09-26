<script setup>
import authApi from '@/api/authApi';
import { useAuthStore } from '@/stores/auth';
import { computed, reactive, ref } from 'vue';
// Auth store
const auth = useAuthStore();

// Refs for avatar handling
const avatar = ref(null); // Avatar file input reference
const avatarPath = ref('/src/assets/media/avatars/default_avatar.png'); // Default avatar image path

// Member reactive state
const member = reactive({
  username: auth.username,
  email: auth.email,
  birth: auth.birth,
  password: '',
  password1: '',
  avatar: null,
  mbti: '', // Assuming this needs to be initialized
});

// Error message state
const error = ref('');

// Computed property for disabling the submit button
const disableSubmit = computed(() => !member.email || !member.password);

// Submit handler for the form
const onSubmit = async () => {
  if (!confirm('수정하시겠습니까?')) return;

  // If a new avatar file is selected, update the member object
  if (avatar.value && avatar.value.files.length > 0) {
    member.avatar = avatar.value.files[0];
  }

  // Try updating the profile through an API call
  try {
    await authApi.update(member);
    error.value = '';
    auth.changeProfile(member);
    alert('정보를 수정하였습니다.');
  } catch (e) {
    error.value = e.response?.data || 'An error occurred';
  }
};

// Handler for editing avatar (trigger file input)
const onEditAvatar = () => {
  avatar.value?.click(); // Trigger file input click
};

// Watch for file changes and update avatar preview
const onAvatarChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Create a URL for the new image and update avatarPath
    avatarPath.value = URL.createObjectURL(file);
  }
};

// Handler for deleting avatar (reset to default image)
const onDeleteAvatar = () => {
  avatarPath.value = '/src/assets/media/avatars/default_avatar.png'; // Set to default avatar image
  alert('프로필 사진이 삭제되었습니다.');
};
</script>

<template>
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
            <label for="username" class="col-sm-4 col-form-label fw-bold"
              >아이디</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="member.username"
                readonly
              />
            </div>
          </div>
          <div class="mb-6 row">
            <label for="email" class="col-sm-4 col-form-label fw-bold"
              >E-mail</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="member.email"
              />
            </div>
          </div>
          <div class="mb-6 row">
            <label for="birth" class="col-sm-4 col-form-label fw-bold"
              >생년월일</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="birth"
                v-model="member.birth"
                readonly
              />
            </div>
          </div>
          <div class="mb-6 row">
            <label for="password" class="col-sm-4 col-form-label fw-bold"
              >비밀번호</label
            >
            <div class="col-sm-8">
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="member.password"
              />
            </div>
          </div>
          <div class="mb-6 row">
            <label for="password" class="col-sm-4 col-form-label fw-bold"
              >비밀번호 확인</label
            >
            <div class="col-sm-8">
              <input
                type="password"
                class="form-control"
                id="password2"
                v-model="member.password2"
              />
            </div>
          </div>
          <div class="mb-6 row">
            <label for="mbti" class="col-sm-4 col-form-label fw-bold"
              >MBTI</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="mbti"
                v-model="member.mbti"
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
