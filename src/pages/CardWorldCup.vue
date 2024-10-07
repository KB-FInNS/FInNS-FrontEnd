<template>
  <div class="justify-content-center align-items-center text-center bg-title">
    <h1 class="text-gray-900 fw-bold pt-8 mt-9 my-1" style="font-size: xx-large;">카드 월드컵</h1>
    <h2 class="text-gray-700 fw-bold p-4 fs-2">
      더 마음에 드는 카드를 골라주세요.
    </h2>
  </div>

  <div class="card-container">
    <CardComponent v-for="(card, index) in cards" :key="index" :title="card.title" :image="card.image" :description="card.description" :url="card.url" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CardComponent from '@/components/common/CardComponent.vue';

// 카드 데이터 설정
const cards = ref([
  {
    title: '[KB] K-패스 경기교통카드',
    image: '/assets/media/avatars/American Express Blue Card.png', // 첫 번째 카드 이미지 경로 설정
    description: ['대중교통 10% 할인', '생활서비스 5% 할인', 'KB Pay 이용 시 생활서비스 5% 추가 할인'],
    url: 'https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=09321&solicitorcode=7030023014&utm_source=google_sa&utm_medium=cpc&utm_campaign=kpass_card&utm_content=life&utm_term=%EB%8C%80%EC%A4%91%EA%B5%90%ED%86%B5%ED%95%A0%EC%9D%B8%EC%B9%B4%EB%93%9C&gad_source=1&gclid=CjwKCAjw6c63BhAiEiwAF0EH1PQeokuZx6aw-T-q1rY3OmnnWDt0JRwBYSq3D8s6VoEwwKxNVBuBjhoCUiQQAvD_BwE',
  },
  {
    title: '[KB] Our WE:SH 카드',
    image: '/assets/media/avatars/American Express Blue Card.png', // 두 번째 카드 이미지 경로 설정
    description: ['우리를 위한 5% 할인(선택형)', '두리(소중한 당신)를 위한 10% 할인(선택형)', '통신료 10% 할인은 기본'],
    url: 'https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=09124&solicitorcode=7030023014&utm_source=google_sa&utm_medium=cpc&utm_campaign=ourwesh_card&utm_content=ourwesh_card&utm_term=KB%EA%B5%AD%EB%AF%BC%EC%B9%B4%EB%93%9C%EC%95%84%EC%9B%8C%EC%9C%84%EC%8B%9C&gad_source=1&gclid=CjwKCAjw6c63BhAiEiwAF0EH1Jn5aB0KPloyUl1tHzcaQI_t1Zuf0IL756H8STAJAGUrnV_BL4HUxhoClZsQAvD_BwE',
  },
]);
</script>

<style scoped>

.bg-title {
  background-color: #f0f6f9; /* Powder Blue 색상 */
  height: 180px;
  margin-bottom: 65px;
}


.title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 10px;
  color: black;
}

.subtitle {
  font-size: 19px;
  color: black;
  margin-bottom: 30px;
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 180px;
}
</style>
