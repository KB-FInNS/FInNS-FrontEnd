<template>
  <Banner titleText="카드 월드컵" descriptionText="더 마음에 드는 카드를 골라주세요." />

  <!-- 라운드 및 진행 상황 표시 -->
  <div>
    <h1 class="match">
      {{ roundLabel }}
      <span v-if="roundLabel !== '결승전!'"> {{ currentSelection }}/{{ totalSelectionsInRound }} </span>
    </h1>
  </div>
  <div class="card-container" v-if="matchcard.length === 2" style="margin-bottom: 100px;">
    <!-- <CardComponent v-for="(card, index) in cards" :key="index" :cardNo="card.cardNo" :cardName="card.cardName" :imgUrl="card.imgUrl" :benefit="card.benefit"/> -->

    <div class="card" v-for="(card, index) in matchcard" :key="index">
      <h3 class="card-title">{{ card.cardName }}</h3>
      <img :src="card.imgUrl" class="card-image" />
      <div class="card-description">
        {{ card.benefit }}
      </div>
      <button class="select-button" @click="select(card.cardNo)">선택</button>
      <a @click.prevent="goToCard(card.cardNo)" class="more-info">자세한 정보 알아보기</a>
    </div>
  </div>
</template>
<script setup>
import Banner from '@/components/common/Banner.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const auth = JSON.parse(localStorage.getItem('auth'));

const cards = ref([]);
const selectcard = ref([]);
const cardscopy = ref([...cards.value]);
const matchcard = ref(cardscopy.value.splice(0, 2));

// 현재 선택 횟수 및 라운드 상태 관리
const currentSelection = ref(1); // 1부터 시작
const currentRoundSize = ref(8); // 처음은 8강

// 총 선택 횟수 계산
const totalSelectionsInRound = computed(() => currentRoundSize.value / 2);

// 라운드 이름 계산
const roundLabel = computed(() => {
  if (currentRoundSize.value === 8) return '8강';
  if (currentRoundSize.value === 4) return '4강';
  if (currentRoundSize.value === 2) return '결승전!';
  return `${currentRoundSize.value}강`;
});

const getRecommend8Cards = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/users/${auth.user.user_no}/recommendCards/8`);
    cards.value = response.data;

    cards.value.forEach(card => {
        if (card.benefit) {
          card.benefit = card.benefit.replace(/#/g, ' : ').replace(/\|/g, '\n');
        }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// 선택 함수
const select = (cardNo) => {
  const selectedCard = cards.value.find((card) => card.cardNo === cardNo);
  if (selectedCard) {
    selectcard.value.push(selectedCard); // 선택된 카드 저장
  }
  if (currentSelection.value < totalSelectionsInRound.value) {
    // 라운드 내 선택 횟수가 남았을 경우
    matchcard.value = cardscopy.value.splice(0, 2); // 다음 두 장의 카드 설정
    currentSelection.value++; // 선택 횟수 증가
  } else {
    // 라운드가 끝나면 선택 횟수 초기화
    currentSelection.value = 1;
    cardscopy.value = [...selectcard.value]; // 선택된 카드로 다시 시작
    selectcard.value = []; // 배열 초기화
    matchcard.value = cardscopy.value.splice(0, 2); // 새로운 카드 두 장 설정
    // 결승전 이후에는 승자 페이지로 라우팅
    if (matchcard.value.length !== 2) {
      router.push('/cardworldcup/WinnerCard'); // 승자 페이지로 이동
    }
    // 다음 라운드로 이동 (8강 → 4강 → 결승전)
    currentRoundSize.value /= 2;
  }
};

// 이 아래부터는 나중에 카드 선택할 때, 카드상세정보 누르면 우리 페이지 finns에서의 카드상세정보 페이지로 가도록 하는 로직 들어갈 예정
const goToCard = (cardNo) => {
  router.push(`/card/${cardNo}`);
};

onMounted(async () => {
  await getRecommend8Cards();
  cardscopy.value = [...cards.value];
  matchcard.value = cardscopy.value.splice(0, 2);
});
</script>

<style scoped>
.card {
  background-color: #f1f7ff;
  border-radius: 10px;
  padding: 20px 30px 15px 30px;
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
  text-align: center;
  margin-bottom: 20px;
  font-weight: normal;
  font-size: 18px;
  line-height: 2;
  white-space: pre-line; /* 줄바꿈을 실제 줄바꿈으로 표시 */
}

.select-button {
  background-color: #00a3ff;
  color: white;
  border: none;
  padding: 8px 10px;
  border-radius: 7px;
  margin: 0 auto 10px auto; /* 버튼을 중앙 정렬 */
  font-weight: bold;
  font-size: 16px;
  width: 80px;
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

.match {
  text-align: center; /* 텍스트를 중앙 정렬 */
  font-size: 32px; /* 텍스트 크기 설정 */
  font-weight: bold; /* 텍스트 굵게 설정 */
  margin-top: 30px; /* 상단 여백 설정 */
  margin-bottom: 50px;
}
</style>
