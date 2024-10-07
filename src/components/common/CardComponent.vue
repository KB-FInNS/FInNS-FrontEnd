<template>
  <div class="card">
    <h3 class="card-title">{{ title }}</h3>
    <img :src="image" class="card-image" alt="Card Image" />
    <ul class="card-description">
      <li v-for="(item, index) in description" :key="index">{{ item }}</li>
    </ul>
    <button class="select-button">선택{{ item }}</button>
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
</style>
