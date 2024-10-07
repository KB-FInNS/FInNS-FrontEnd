<template>
  <div>
    <h1>카드 월드컵</h1>
    <p>더 마음에 드는 카드를 골라주세요</p>
  </div>

  <div class="card-container" v-if="MatchCard.length === 2">
    <div class="card" v-for="(card, index) in MatchCard" :key="index">
      <h3 class="card-title">{{ card.title }}</h3>
      <img :src="card.image" class="card-image" alt="Card Image" />
      <ul class="card-description">
        <li v-for="(item, idx) in card.description" :key="idx">{{ item }}</li>
      </ul>
      <button class="select-button" @click="select">선택</button>
      <a @click.prevent="goToCard(card.url)" href="#" class="more-info">자세한 정보 알아보기</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const cards = ref([
  {
    id: '1',
    title: '신한카드 Point Plan',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2666/card_img/32452/2666card.png',
    description: ['국내 가맹점 최대 3% 적립', '주말 외식비 1천 포인트 적립', '도시가스/전기요금 1천 포인트 적립'],
    url: 'https://www.card-gorilla.com/card/detail/2666',
  },
  {
    id: '2',
    title: 'BC 바로 클리어 플러스',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2346/card_img/32523/2346card.png',
    description: ['점심식사/배달앱 7%할인', '온라인쇼핑 10%할인', '휴대폰요금/스트리밍 10%할인'],
    url: 'https://www.card-gorilla.com/card/detail/2346',
  },
  {
    title: 'KB국민 My WE:SH 카드',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2441/card_img/37123/2441card_3.png',
    description: ['KB Pay 10% 할인', '음식점 10% 할인', '서비스팩 3개 중 1개 선택할인'],
    url: 'https://www.card-gorilla.com/card/detail/2441',
  },
  {
    title: '신한카드 처음',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2694/card_img/33709/2694card_1.png',
    description: ['음식점·카페·편의점·온라인쇼핑 5% 적립', '생활·여행·패션 5% 적립', '정기결제 최대 20% 적립'],
    url: 'https://www.card-gorilla.com/card/detail/2694',
  },
  {
    title: 'DA카드의정석Ⅱ',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2655/card_img/32217/2655card.png',
    description: ['모든가맹점 0.8% 할인', '생활업종 1.3% 할인', '국내 공항라운지 무료 이용'],
    url: 'https://www.card-gorilla.com/card/detail/2655',
  },
  {
    title: '카드의정석 TEN',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2699/card_img/34252/2699card.png',
    description: ['커피 10% 할인', '편의점 10% 할인', '음식점/주점 1% 할인'],
    url: 'https://www.card-gorilla.com/card/detail/2699',
  },
  {
    title: '카드의정석 TE',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2699/card_img/34252/2699card.png',
    description: ['커피 10% 할인', '편의점 10% 할인', '음식점/주점 1% 할인'],
    url: 'https://www.card-gorilla.com/card/detail/2699',
  },
  {
    title: '카드의정석 T',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2699/card_img/34252/2699card.png',
    description: ['커피 10% 할인', '편의점 10% 할인', '음식점/주점 1% 할인'],
    url: 'https://www.card-gorilla.com/card/detail/2699',
  },
]);

const MatchCard = ref([]);
MatchCard.value = cards.value.slice(0, 2);
const select = () => {};
// 카드 정보 페이지로 이동
const goToCard = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
.card {
  background-color: #f1f7ff;
  border-radius: 10px;
  padding: 30px;
  width: 320px;
  text-align: center;
}

.card-title {
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 30px;
}

.card-image {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 30px;
}

.card-description {
  text-align: left;
  margin-bottom: 20px;
  font-weight: normal;
  font-size: 16px;
  line-height: 2;
}

.select-button {
  background-color: #00a3ff;
  color: white;
  border: none;
  padding: 8px 10px;
  border-radius: 7px;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
  width: 70px;
}

.more-info {
  font-size: 12px;
  color: #6c757d;
  text-decoration: none;
  display: block;
  text-align: right;
  margin-top: 20px;
}

.card-worldcup {
  text-align: center;
  padding: 36px;
  background-color: #eff6f9;
  margin-bottom: 40px;
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
