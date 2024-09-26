<!-- Header.vue -->
<template>
  <div class="title-container">
    <h1 class="title">{{ titleText }}</h1>
    <p class="description">{{ descriptionText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      default: '알아서쓰세요',
    },
    descriptionText: {
      type: String,
      default: '알아서쓰세요',
    },
  },
};
</script>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column; /* 수직 방향으로 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
  text-align: center;
  margin-bottom: 20px;
  background-color: #f0f6f9;
  height: 150px;
  width: 100%;
}

.title {
  font-size: 30px;
  font-weight: 700;
}

.description {
  font-size: 19px;
  color: #666;
}
</style>
