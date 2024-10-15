<template>
    <Banner titleText="카드 월드컵 우승" descriptionText="대망의 1위 카드와, 2위 ~ 4위 카드를 소개합니다." />

    <div class="mt-10" v-if="dataLoaded">
      <!-- 큰 카드 영역 (우승 카드) -->
      <div class="big-card-container" v-if="bigCard">
        <div class="card-item">
          <h3 class="card-title mt-5 mb-10" style="font-size: 36px; margin-left: 50px">{{ bigCard.cardName }}</h3>
          <div class="card-content">
            <img :src="bigCard.imgUrl" alt="카드 이미지" class="big-card-image" style="margin-left: 50px;"/>
            <ul class="card-benefits" style="font-size: 20px; margin-left: 100px; margin-right: 50px">
              <li style="margin-bottom: 30px" v-for="(benefit, idx) in bigCard.benefitList" :key="idx">{{ benefit }}</li>
            </ul>
          </div>
          <a :href="`/card/${winnerCard.cardNo}`" class="more-info">카드 보러가기 &gt;</a>
        </div>
      </div>

      <div class="card-container" style="margin-bottom: 100px;">
        <CardComponent v-for="(card, index) in smallCards" :key="index" :cardNo="card.cardNo" :cardName="card.cardName" :imgUrl="card.imgUrl" :benefit="card.benefit"/>
      </div>
    </div>
    <div v-else>
      <p>데이터를 불러오는 중입니다...</p>
    </div>
</template>

<script setup>
import Banner from '@/components/common/Banner.vue';
import CardComponent from '@/components/common/CardComponent.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 데이터 초기화
const { winnerCard, copyCards } = history.state;
const bigCard = ref(null);
const smallCards = ref([]);
const dataLoaded = ref(false); // 데이터 로딩 상태 초기화

// 필요한 데이터만 사용하도록 필터링하는 함수
const filterCardData = (card) => ({
  cardNo: card.cardNo,
  cardName: card.cardName,
  imgUrl: card.imgUrl,
  benefitList: card.benefit.split('\n'), // 혜택 정보를 줄바꿈 기준으로 배열로 변환
  benefit: card.benefit,
  url: card.url, // 카드 상세정보 URL
});

onMounted(() => {
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
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-item {
  position: relative;
  background-color: #f1f7ff;
  border-radius: 40px;
  padding: 20px;
}

.big-card-image {
  width: 400px;
  height: 250px;
  border-radius: 5px;
  margin-bottom: 50px;
}

.small-card-image {
  border-radius: 5px;
}

.card-benefits {
  list-style-type: disc;
  padding-left: 20px;
}

.more-info {
  position: absolute;        /* 부모의 위치를 기준으로 고정 */
  bottom: 25px;              /* 부모 요소의 하단에서 20px 위에 위치 */
  right: 25px;               /* 부모 요소의 오른쪽에서 20px 안쪽에 위치 */
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

.card-content {
  display: flex;          /* Flexbox 레이아웃 활성화 */
  justify-content: space-between; /* 자식 요소들 사이에 공간을 균등하게 배치 */
  align-items: center;    /* 수직으로 중앙 정렬 */
  justify-content: flex-start;
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 180px;
  margin-bottom: 30px;
}
</style>
