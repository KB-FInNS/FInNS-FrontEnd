<template>
  <div>
    <div class="bg-title">
      <h1 class="title">카드 월드컵 우승</h1>
    </div>

    <div v-if="dataLoaded">
      <!-- 큰 카드 영역 (우승 카드) -->
      <div class="big-card-container" v-if="bigCard">
        <div class="card-item">
          <h3 class="card-title">{{ bigCard.cardName }}</h3>
          <div class="card-content">
            <img :src="bigCard.imgUrl" alt="카드 이미지" class="big-card-image" />
            <ul class="card-benefits">
              <li v-for="(benefit, idx) in bigCard.benefitList" :key="idx">{{ benefit }}</li>
            </ul>
          </div>
          <a :href="bigCard.url" class="more-info">카드 보러가기 &gt;</a>
        </div>
      </div>

      <!-- 작은 카드 영역 (4강에서 우승 카드를 제외한 카드들) -->
      <div class="small-card-container" v-if="smallCards.length">
        <div v-for="(card, index) in smallCards" :key="index" class="small-card">
          <h3 class="small-card-title">{{ card.cardName }}</h3>
          <img :src="card.imgUrl" alt="카드 이미지" class="small-card-image" />
          <ul class="small-card-benefits">
            <li v-for="(benefit, idx) in card.benefitList" :key="idx">{{ benefit }}</li>
          </ul>
          <a :href="card.url" class="more-info">카드 보러가기 &gt;</a>
        </div>
      </div>
    </div>
    <div v-else>
      <p>데이터를 불러오는 중입니다...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 데이터 초기화
const bigCard = ref(null);
const smallCards = ref([]);
const dataLoaded = ref(false); // 데이터 로딩 상태 초기화

// 필요한 데이터만 사용하도록 필터링하는 함수
const filterCardData = (card) => ({
  cardName: card.cardName,
  imgUrl: card.imgUrl,
  benefitList: card.benefit.split('\n'), // 혜택 정보를 줄바꿈 기준으로 배열로 변환
  url: card.url, // 카드 상세정보 URL
});

onMounted(() => {
  // history.state에서 데이터 받기
  const { winnerCard, copyCards } = history.state;

  if (winnerCard && copyCards) {
    // 우승 카드에서 필요한 데이터만 사용
    bigCard.value = filterCardData(winnerCard);

    // 4강 카드 중 우승 카드를 제외한 나머지 카드들 처리
    smallCards.value = copyCards
      .filter((card) => card.cardNo !== winnerCard.cardNo) // 우승카드를 제외
      .map(filterCardData); // 필요한 데이터만 추출

    dataLoaded.value = true; // 데이터 로딩 완료
  } else {
    console.error('State data is missing.');
  }
});
</script>

<style scoped>
.big-card-container {
  margin-bottom: 20px;
}

.card-item {
  background-color: #f1f7ff;
  border-radius: 10px;
  padding: 20px;
}

.big-card-image,
.small-card-image {
  width: 100%;
  border-radius: 5px;
}

.card-benefits {
  list-style-type: disc;
  padding-left: 20px;
}

.more-info {
  color: #007bff;
  text-decoration: none;
}

.small-card-container {
  display: flex;
  justify-content: space-between;
}

.small-card {
  width: 30%;
  background-color: #f1f7ff;
  border-radius: 10px;
  padding: 20px;
}
</style>
