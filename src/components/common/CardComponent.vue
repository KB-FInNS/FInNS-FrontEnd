<template>
  <div class="card">
    <h3 class="card-title">{{ cardName }}</h3>
    <img :src="imgUrl" class="card-image" alt="Card Image" />
    <div class="card-description">
      {{ formattedBenefit }}
    </div>
    <a @click.prevent="goToCard" href="#" class="more-info">자세한 정보 알아보기</a>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps(['cardNo', 'cardName', 'imgUrl', 'benefit']);
console.log(props.cardName);
const formattedBenefit = props.benefit.replace(/#/g, ' : ').replace(/\|/g, '\n');

const goToCard = () => {
  router.push(`/card/${props.cardNo}`);
};
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
  width: 260px;
  height: 150px;
  border-radius: 5px;
  margin-bottom: 30px;
}

.card-description {
  text-align: center;
  margin-bottom: 30px;
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
  position: absolute; /* 절대 위치 설정 */
  right: 15px; /* 부모의 오른쪽에 고정 */
  bottom: 15px; /* 부모의 아래에 고정 */
}
</style>
