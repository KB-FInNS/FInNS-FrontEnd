<template>
  <div class="title-box">
    <h1 class="title">카드 월드컵</h1>
    <p class="sub-title">더 마음에 드는 카드를 골라주세요</p>
  </div>
  <div>
    <h1 class="match">카드 월드컵 N강 1/N</h1>
  </div>
  <div class="card-container" v-if="matchcard.length === 2">
    <div class="card" v-for="(card, index) in matchcard" :key="index">
      <h3 class="card-title">{{ card.title }}</h3>
      <img :src="card.image" class="card-image" alt="Card Image" />
      <ul class="card-description">
        <li v-for="(item, idx) in card.description" :key="idx">{{ item }}</li>
      </ul>
      <button class="select-button" @click="select(card.id)">선택</button>
      <a @click.prevent="goToCard(card.url)" href="#" class="more-info">자세한 정보 알아보기</a>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

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
    id: '3',
    title: 'KB국민 My WE:SH 카드',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2441/card_img/37123/2441card_3.png',
    description: ['KB Pay 10% 할인', '음식점 10% 할인', '서비스팩 3개 중 1개 선택할인'],
    url: 'https://www.card-gorilla.com/card/detail/2441',
  },
  {
    id: '4',
    title: '신한카드 처음',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2694/card_img/33709/2694card_1.png',
    description: ['음식점·카페·편의점·온라인쇼핑 5% 적립', '생활·여행·패션 5% 적립', '정기결제 최대 20% 적립'],
    url: 'https://www.card-gorilla.com/card/detail/2694',
  },
  {
    id: '5',
    title: 'DA카드의정석Ⅱ',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2655/card_img/32217/2655card.png',
    description: ['모든가맹점 0.8% 할인', '생활업종 1.3% 할인', '국내 공항라운지 무료 이용'],
    url: 'https://www.card-gorilla.com/card/detail/2655',
  },
  {
    id: '6',
    title: '카드의정석 TEN',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2699/card_img/34252/2699card.png',
    description: ['커피 10% 할인', '편의점 10% 할인', '음식점/주점 1% 할인'],
    url: 'https://www.card-gorilla.com/card/detail/2699',
  },
  {
    id: '7',
    title: '카드의정석 TE',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2699/card_img/34252/2699card.png',
    description: ['커피 10% 할인', '편의점 10% 할인', '음식점/주점 1% 할인'],
    url: 'https://www.card-gorilla.com/card/detail/2699',
  },
  {
    id: '8',
    title: '카드의정석 T',
    image: 'https://d1c5n4ri2guedi.cloudfront.net/card/2699/card_img/34252/2699card.png',
    description: ['커피 10% 할인', '편의점 10% 할인', '음식점/주점 1% 할인'],
    url: 'https://www.card-gorilla.com/card/detail/2699',
  },
]);

const selectcard = ref([]);
const cardscopy = ref([...cards.value]);
const matchcard = ref(cardscopy.value.splice(0, 2));

const select = (id) => {
  console.log(id);
  const selectedCard = cards.value.find((card) => card.id === id);
  if (selectedCard) {
    selectcard.value.push(selectedCard);
  }

  if (cardscopy.value.length > 0) {
    matchcard.value = cardscopy.value.splice(0, 2);
  } else {
    cardscopy.value = [...selectcard.value];
    selectcard.value = [];
    matchcard.value = cardscopy.value.splice(0, 2);
    console.log(selectcard.value);
  }
  console.log('남은 카드:', cardscopy.value);
  console.log('선택 카드:', selectcard.value.length);
  console.log('비교 카드:', matchcard.value.length);
  if (matchcard.value.length !== 2) {
    router.push('/cardworldcup/WinnerCard');
  }
};

// 이 아래부터는 나중에 카드 선택할 때, 카드상세정보 누르면 우리 페이지 finns에서의 카드상세정보 페이지로 가도록 하는 로직 들어갈 예정
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
.card-container {
  display: flex;
  justify-content: center;
  gap: 180px;
}
.title {
  font-size: 48px; /* 큰 타이틀 크기 */
  font-weight: bold; /* 굵은 글꼴 */
  text-align: center; /* 가운데 정렬 */
  margin-top: 40px; /* 상단 여백 */
  margin-bottom: 10px; /* 하단 여백 */
  color: #2c3e50; /* 진한 색상 */
}

.sub-title {
  font-size: 20px; /* 서브 타이틀 크기 */
  text-align: center; /* 가운데 정렬 */
  color: #7f8c8d; /* 연한 색상 */
  margin-bottom: 40px; /* 하단 여백 */
}
.title-box {
  background-color: #eff6f9;
}
.macth {
  flex: auto;
}
</style>
