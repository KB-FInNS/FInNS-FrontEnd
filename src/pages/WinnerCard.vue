<template>
  <div class="bg-title">
    <h1 class="title">카드 월드컵 우승</h1>
    <h2 class="subtitle">최종 선택된 우승 카드 입니다.</h2>
  </div>

  <!-- 큰 카드 영역 -->
  <div class="card-container">
    <div v-for="(card, index) in cards" :key="index" class="card-item">
      <div class="card-details">
        <h3 class="card-title">{{ card.title }}</h3>
        <div class="card-content">
          <img :src="card.image" alt="카드 이미지" class="card-image" />
          <ul class="card-benefits">
            <li v-for="(benefit, idx) in card.description" :key="idx">{{ benefit }}</li>
          </ul>
        </div>
        <a :href="card.url" class="more-info">카드 보러가기 &gt;</a>
      </div>
    </div>
  </div>

  <div><h1 class="recommendation-heading">하단 카드 추천 문구</h1></div>

  <!-- 작은 카드 영역 -->
  <div class="small-card-container">
    <div v-for="(card, index) in smallCards" :key="index" class="small-card">
      <h3 class="small-card-title">{{ card.title }}</h3>
      <img :src="card.image" alt="카드 이미지" class="small-card-image" />
      <ul class="small-card-benefits">
        <li v-for="(benefit, idx) in card.description" :key="idx">{{ benefit }}</li>
      </ul>
      <a :href="card.url" class="more-info">카드 보러가기 &gt;</a>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// 큰 카드 데이터
const cards = ref([
  {
    title: '[KB] K-패스 경기교통카드',
    image: '/assets/media/avatars/American Express Blue Card.png',
    description: ['대중교통 10% 할인', '생활서비스 5% 할인', 'KB Pay 이용 시 생활서비스 5% 추가 할인'],
    url: '#',
  },
]);

// 작은 카드 데이터
const smallCards = ref([
  {
    title: '[KB] 골드 올림 카드',
    image: '/assets/media/avatars/American Express Blue Card.png',
    description: ['병원 or 마트 5% 청구할인', '6대 영역 1~2% 포인트리 적립', '3대 영역 5~10% 청구할인'],
    url: '#',
  },
  // 다른 카드 데이터 추가
  {
    title: '[KB] EV 카드',
    image: '/assets/media/avatars/American Express Blue Card.png',
    description: ['전기/수소차 충전', '주차, 세차', '20% 청구할인'],
    url: '#',
  },
  {
    title: '[KB] 사장님 카드',
    image: '/assets/media/avatars/American Express Blue Card.png',
    description: ['보안, 운영, 세무기기, 점수 적립', '온라인 쇼핑 5% 적립', '외식, 커피 등 5% 적립'],
    url: '#',
  },
  {
    title: '[KB] 갤러리아 카드',
    image: '/assets/media/avatars/American Express Blue Card.png',
    description: ['갤러리아 백화점 5% 청구할인', '멤버십 혜택', '1천원당 1점'],
    url: '#',
  },
]);
</script>
<style scoped>
/* 큰 카드 스타일 */

.bg-title {
  background-color: #f0f6f9; /* Powder Blue 색상 */
  height: 200px;
  margin-bottom: 40px;
}

.title {
  font-size: 36px;
  font-weight: bold;
  color: #000;
  margin: 0;
}

.card-container {
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #eff6f9;
}

.card-item {
  display: flex;
  align-items: center;
  width: 100%;
}

.card-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.card-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
  margin-right: auto; /* 제목 왼쪽 정렬 */
}

.card-content {
  display: flex;
  align-items: center;
}

.card-image {
  width: 240px;
  height: auto;
  margin-right: 16px;
  border-radius: 5px;
}

.card-benefits {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0 0 16px;
  font-size: 16px;
  color: #333;
  font-weight: 600;
  line-height: 1.5;
}

.card-benefits li {
  margin-bottom: 10px;
  font-size: 15px;
  color: #555;
  font-weight: 600;
}

.more-info {
  display: block;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  color: #717c83;
  text-align: right;
  font-weight: 600;
  margin-left: auto; /* 우측 하단 정렬 */
}

.more-info:hover {
  color: #007bff;
  text-decoration: underline;
}

/* 작은 카드 스타일 */
.small-card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.small-card {
  width: 250px;
  padding: 16px;
  border-radius: 10px;
  background-color: #f1f7ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.small-card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}

.small-card-image {
  width: 180px;
  height: auto;
  margin-bottom: 16px;
  border-radius: 5px;
}

.small-card-benefits {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0 0 16px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
}

.small-card-benefits li {
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
  font-weight: 600;
}

.more-info {
  font-size: 14px;
  color: inherit;
  text-decoration: none;
}

.more-info:hover {
  color: #007bff;
  text-decoration: underline;
}
</style>
