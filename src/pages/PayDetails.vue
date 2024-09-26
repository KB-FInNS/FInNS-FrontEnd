<template>
  <div>
    <div class="Head">
      <Header
        titleText="소비 상세"
        descriptionText="소비 내역을 상세하게 확인 및 수정할 수 있습니다"
      />
    </div>

    <div class="container consumption-detail mt-5 p-4 rounded">
      <!-- 수정된 타이틀 컴포넌트 사용 -->

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

      <!-- 카테고리 선택 -->
      <div class="form-group mb-4 category">
        <label for="category" class="form-label font-weight-bold"
          >카테고리</label
        >
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

      <!-- 메모 입력 -->
      <div class="form-group mb-4 memo">
        <label for="memo" class="form-label font-weight-bold">메모</label>
        <textarea
          id="memo"
          class="form-control gray-input"
          v-model="memo"
          rows="3"
          placeholder="메모를 입력하세요"
        ></textarea>

        <br />
      </div>

      <!-- 소비 내역 정보 표시 -->
      <div class="info">
        <div class="info-row">
          <span class="label font-weight-bold">사용 금액</span>
          <span class="value text-muted">{{ amount.toLocaleString() }} 원</span>
        </div>
        <div class="info-row">
          <span class="label font-weight-bold">사용처</span>
          <span class="value text-muted">{{ place }}</span>
        </div>
        <div class="info-row">
          <span class="label font-weight-bold">결제 일시</span>
          <span class="value text-muted">{{ paymentDate }}</span>
        </div>
        <div class="info-row">
          <span class="label font-weight-bold">결제 수단</span>
          <span class="value text-muted">{{ paymentMethod }}</span>
        </div>
      </div>

      <div class="d-flex justify-content-between mt-4">
        <button class="btn btn-secondary" @click="cancel">취소</button>
        <button class="btn btn-primary" @click="confirm">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Banner.vue';

export default {
  components: {
    Header,
  },

  data() {
    return {
      publicScope: '전체공개',
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
      this.$router.push('/profile/spending');
    },
  },
};
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
  width: 48%;
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
