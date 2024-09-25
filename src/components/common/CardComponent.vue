<template>
  <div class="card">
    <h3 class="card-title">{{ title }}</h3>
    <img :src="image" class="card-image" alt="Card Image" />
    <ul class="card-description">
      <li v-for="(item, index) in description" :key="index">{{ item }}</li>
    </ul>
    <button class="select-button">선택</button>
    <a @click.prevent="goToCard" href="#" class="more-info">자세한 정보 알아보기</a>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'image', 'description', 'url']);

const goToCard = () => {
  const url = props.url;
  window.location.href = url; // URL로 이동
};
</script>

<style scoped>
.card {
  background-color: #f1f7ff;
  border-radius: 10px;
  padding-top: 30px;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 20px;
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
  /* 원하는 줄 간격으로 조정하세요 */
}

.select-button {
  background-color: #00A3FF;
  color: white;
  border: none;
  padding: 8px 10px;
  border-radius: 7px;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
  width: 70px;
  margin: 0 auto;
  /* 버튼을 가운데 정렬 */
}

.more-info {
  font-size: 12px;
  color: #6c757d;
  text-decoration: none;
  display: block;
  /* 블록 요소로 설정 */
  text-align: right;
  /* 왼쪽 정렬 */
  margin-top: 20px;
}
</style>