<template>
  <div class="container consumption-detail mt-5 p-4 bg-light rounded">
    <h1 class="mb-3 text-center">소비 상세</h1>
    <p class="text-center text-muted">
      소비 내역을 상세하게 확인 및 수정할 수 있습니다
    </p>

    <!-- 공개 범위 선택 -->
    <div class="form-group mb-4">
      <label for="public-range" class="form-label">공개 범위</label>
      <div class="d-flex align-items-center">
        <div class="form-check me-3">
          <input
            type="radio"
            id="all"
            class="form-check-input"
            value="전체공개"
            v-model="publicScope"
          />
          <label for="all" class="form-check-label">전체공개</label>
        </div>
        <div class="form-check">
          <input
            type="radio"
            id="private"
            class="form-check-input"
            value="비공개"
            v-model="publicScope"
          />
          <label for="private" class="form-check-label">비공개</label>
        </div>
      </div>
    </div>

    <!-- 카테고리 선택 -->
    <div class="form-group mb-4">
      <label for="category" class="form-label">카테고리</label>
      <select id="category" class="form-select" v-model="category">
        <option value="">카테고리를 선택하세요.</option>
        <option value="식비">식비</option>
        <option value="여가">여가</option>
        <option value="생활">생활</option>
        <option value="교통">교통</option>
        <option value="문화">문화</option>
        <option value="의료">의료</option>
      </select>
    </div>

    <!-- 메모 입력 -->
    <div class="form-group mb-4">
      <label for="memo" class="form-label">메모</label>
      <textarea
        id="memo"
        class="form-control"
        v-model="memo"
        rows="3"
        placeholder="메모를 입력하세요"
      ></textarea>
    </div>

    <!-- 소비 내역 정보 표시 -->
    <div class="info">
      <div class="info-row">
        <span class="label">사용 금액</span>
        <span class="value">{{ amount.toLocaleString() }} 원</span>
      </div>
      <div class="info-row">
        <span class="label">사용처</span>
        <span class="value">{{ place }}</span>
      </div>
      <div class="info-row">
        <span class="label">결제 일시</span>
        <span class="value">{{ paymentDate }}</span>
      </div>
      <div class="info-row">
        <span class="label">결제 수단</span>
        <span class="value">{{ paymentMethod }}</span>
      </div>
    </div>

    <div class="d-flex justify-content-between mt-4">
      <button class="btn btn-secondary" @click="cancel">취소</button>
      <button class="btn btn-primary" @click="confirm">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicScope: 'aaaa',
      category: '',
      memo: '',
      amount: 120000,
      place: '다이소 군자점',
      paymentDate: '2024년 9월 10일 14:38',
      paymentMethod: '국민 K-패스 CHECK',
      id: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.loadDetails(this.id);
  },
  methods: {
    loadDetails(id) {
      // API 또는 데이터베이스에서 데이터를 불러오는 로직을 여기에 추가
      // 현재는 예시 데이터를 표시 중
      if (id == 1) {
        this.amount = 12000;
        this.place = '스타벅스';
        this.paymentDate = '2024년 9월 10일 14:38';
        this.paymentMethod = '신한 카드';
      } else if (id == 2) {
        this.amount = 15000;
        this.place = 'CGV';
        this.paymentDate = '2024년 9월 11일 16:00';
        this.paymentMethod = '현대 카드';
      } else {
        this.amount = 5000;
        this.place = '이디야 커피';
        this.paymentDate = '2024년 9월 12일 12:00';
        this.paymentMethod = '카카오페이';
      }
    },
    cancel() {
      this.$router.go(-1); // 이전 페이지로 돌아가기
    },
    confirm() {
      alert('변경 사항이 저장되었습니다.');
    },
  },
};
</script>

<style scoped>
.consumption-detail {
  max-width: 75%;
  margin: auto;
  background-color: #ffffff;
}

h1 {
  font-size: 28px;
  font-weight: 700;
}

p {
  font-size: 14px;
}

.info {
  font-size: 16px;
  margin-top: 20px;
}

.info-row {
  display: block;
  margin-bottom: 15px; /* 각 항목 사이 간격 */
}

.label {
  display: block;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px; /* 라벨과 값 사이 간격 */
}

.value {
  display: block;
  color: #666;
  padding-left: 10px; /* 값에 약간의 패딩 추가 */
}

button {
  width: 48%;
}
</style>
