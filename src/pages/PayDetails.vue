<template>
  <Banner
    titleText="소비 상세"
    descriptionText="소비 내역을 상세하게 확인 및 수정할 수 있습니다."
  />

  <div class="container consumption-detail mt-5 p-4 rounded">
    <!-- 공개 범위 선택 -->
    <div class="form-group mb-4 public-scope">
      <label for="public-range" class="form-label font-weight-bold">공개 범위</label>
      <div class="d-flex align-items-center">
        <div class="form-check me-3">
          <input
            type="radio"
            id="all"
            class="form-check-input"
            :value="true"
            v-model="post.publicStatus"
          />
          <label
            for="all"
            class="form-check-label"
            :class="{
              'selected-color': post.publicStatus === true,
              'default-color': post.publicStatus !== true,
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
            :value="false"
            v-model="post.publicStatus"
          />
          <label
            for="private"
            class="form-check-label"
            :class="{
              'selected-color': post.publicStatus === false,
              'default-color': post.publicStatus !== false,
            }"
          >
            비공개
          </label>
        </div>
      </div>
      
    </div>

    <!-- 카테고리 선택 -->
    <div class="form-group mb-4 category">
      <label for="category" class="form-label font-weight-bold">카테고리</label>
      <select id="category" class="form-select gray-input" v-model="post.category">
        <option value="">카테고리를 선택하세요.</option>
        <option value="식비 · 카페">식비 · 카페</option>
        <option value="쇼핑">쇼핑</option>
        <option value="미용">미용</option>
        <option value="의료">의료</option>
        <option value="통신">통신</option>
        <option value="교통">교통</option>
        <option value="문화 · 여행">문화 · 여행</option>
        <option value="교육">교육</option>
        <option value="술 · 유흥">술 · 유흥</option>
        <option value="기타">기타</option>
      </select>
    </div>

    <!-- 메모 입력 -->
    <div class="form-group mb-4 memo">
      <label for="memo" class="form-label font-weight-bold">메모</label>
      <textarea
        id="memo"
        class="form-control gray-input"
        v-model="post.memo"
        rows="3"
        placeholder="메모를 입력하세요"
        value=""
      ></textarea>
    </div>

    <!-- 소비 내역 정보 표시 -->
    <div class="info">
      <div class="info-row">
        <span class="label font-weight-bold">사용 금액</span>
        <span class="value text-muted">{{ post.amount.toLocaleString() }}원</span>
      </div>
      <div class="info-row">
        <span class="label font-weight-bold">사용처</span>
        <span class="value text-muted">{{ post.place }}</span>
      </div>
      <div class="info-row">
        <span class="label font-weight-bold">결제 일시</span>
        <span class="value text-muted">{{ post.transactionDate }}</span>
      </div>
      <div class="info-row">
        <span class="label font-weight-bold">결제 수단</span>
        <span class="value text-muted">{{ post.cardName }}</span>
      </div>
    </div>

    <div class="d-flex justify-content-between" style="margin-top: 100px;">
      <button class="btn btn-secondary" @click="cancel">취소</button>
      <button class="btn btn-primary" @click="confirm">확인</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Banner from '@/components/common/Banner.vue';

const route = useRoute();
const router = useRouter();
const postNo = route.params.postNo;

// 기본값을 설정하여 post가 undefined일 때 오류 방지
let post = ref({
  publicStatus: '', // 공개 범위
  category: '', // 카테고리
  memo: '', // 메모
  amount: 0, // 금액
  place: '', // 사용처
  transactionDate: '', // 결제 일시
  cardName: '', // 결제 수단
});

const getPost = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/posts/${postNo}`);
    post.value = response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

onMounted(() => {
  getPost();
});

function cancel() {
  router.go(-1); // 이전 페이지로 돌아가기
}

function confirm() {
  console.log(post.value);
  // 백으로 update 날리기!
  
}
</script>

<style scoped>
.consumption-detail {
  max-width: 80%;
  margin: auto;
  background-color: #ffffff; /* 배경 색 흰색 */
}

/* 금액 사용처 등등 value */
.info {
  font-size: 16px; /* 적절한 폰트 크기로 수정 */
  margin-top: 20px;
}

.info-row {
  display: block;
  margin-bottom: 15px;
}

.label {
  display: block;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

button {
  width: 40%;
  height: 50px;
}

/* 사용금액 , 사용처 , 결제일시 결제수단  */
.font-weight-bold {
  font-weight: bold;
  font-size: 21px;
}

/* 연한 회색 배경 적용 */
.gray-input {
  background-color: #f7f7f7;
  font-size: 17px; /* 메모 입력창의 글자 크기 */
  padding: 10px; /* 추가 여백 */
}

/* 선택된 항목의 색상 */
.selected-color {
  color: #216dbe; /* 선택 시 적용할 색상 */
  font-weight: bold;
  font-size: 17px;
}

/* 선택되지 않은 항목의 기본 색상 */
.default-color {
  color: #000; /* 선택되지 않은 경우의 기본 색상 */
  font-size: 17px;
}

/* 공개 범위, 카테고리, 메모 라벨 크기 및 스타일 */
.form-label {
  font-size: 21px;
  color: #444;
  margin-top: 20px;
}
</style>
