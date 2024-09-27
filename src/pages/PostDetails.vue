<template>
  <div class="Head">
    <Banner
      titleText="소비 상세"
      descriptionText="소비 내역을 상세하게 확인 및 수정할 수 있습니다"
    />
  </div>

  <div class="container post-edit mt-5 p-4 rounded">
    <!-- 게시물 수정 제목 -->
    <h1>게시물 수정</h1>

    <!-- 공개 범위 선택 -->
    <div class="form-group mb-4 public-scope">
      <label for="public-range" class="form-label font-weight-bold"
        >공개 범위</label
      >
      <div class="d-flex align-items-center">
        <div class="form-check me-3">
          <input
            type="radio"
            id="all"
            class="form-check-input"
            value="전체공개"
            v-model="publicScope"
          />
          <label
            for="all"
            class="form-check-label"
            :class="{
              'selected-color': publicScope === '전체공개',
              'default-color': publicScope !== '전체공개',
            }"
          >
            전체공개
          </label>
        </div>
        <div class="form-check">
          <input
            type="radio"
            id="private"
            class="form-check-input"
            value="비공개"
            v-model="publicScope"
          />
          <label
            for="private"
            class="form-check-label"
            :class="{
              'selected-color': publicScope === '비공개',
              'default-color': publicScope !== '비공개',
            }"
          >
            비공개
          </label>
        </div>
      </div>
    </div>

    <!-- 사용 금액 표시 -->
    <div class="form-group mb-4 amount">
      <label class="form-label font-weight-bold">사용 금액</label>
      <p class="amount-text">{{ amount.toLocaleString() }} 원</p>
    </div>

    <!-- 카테고리 선택 -->
    <div class="form-group mb-4 category">
      <label for="category" class="form-label font-weight-bold">카테고리</label>
      <select id="category" class="form-select gray-input" v-model="category">
        <option value="">카테고리를 선택하세요.</option>
        <option value="식비">식비</option>
        <option value="여가">여가</option>
        <option value="생활">생활</option>
        <option value="교통">교통</option>
        <option value="문화">문화</option>
        <option value="의료">의료</option>
      </select>
    </div>

    <!-- 저장 버튼 -->
    <div class="d-flex justify-content-between mt-4">
      <button class="btn btn-secondary" @click="cancel">취소</button>
      <button class="btn btn-primary" @click="confirm">확인</button>
    </div>

    <!--begin:: 게시물 사진-->
    <Carousel>
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Image Slide" class="carousel-image" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Banner from '@/components/common/Banner.vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

// 공개 범위, 카테고리, 금액의 상태 관리
const publicScope = ref('전체공개');
const category = ref('');
const amount = ref(5000); // 거래 내역에 따라 설정된 금액

// Vue Router
const router = useRouter();

// 취소 버튼 동작
function cancel() {
  router.go(-1); // 이전 페이지로 돌아가기
}

// 저장 버튼 동작
function confirm() {
  alert('게시물 수정이 완료되었습니다.');
}

// 이미지 목록
const images = ref([
  'src/assets/media/food/samgeob1.jpg',
  'src/assets/media/food/samgeob2.jpg',
  'src/assets/media/food/samgeob3.jpg',
]);
</script>

<style scoped>
/* 스타일 적용 */
.post-edit {
  max-width: 80%;
  margin: auto;
  background-color: #ffffff; /* 배경 색 흰색 */
}

/* 폼 요소 스타일 */
.form-label {
  font-size: 21px;
  color: #444;
  margin-top: 20px;
}

.amount-text {
  font-size: 17px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 4px;
}

.gray-input {
  background-color: #f7f7f7;
  font-size: 17px;
  padding: 10px;
}

.selected-color {
  color: #216dbe;
  font-weight: bold;
  font-size: 17px;
}

.default-color {
  color: #000;
  font-size: 17px;
}

button {
  width: 46%;
}

.carousel-image {
  width: 100%;
  /* 이미지가 Carousel의 너비에 맞춰짐 */
  height: 500px;
  /* contain : 사진 크기에 맞게, cover : carousel 에 맞게(이미지 잘림) */
  object-fit: contain;
}
</style>
