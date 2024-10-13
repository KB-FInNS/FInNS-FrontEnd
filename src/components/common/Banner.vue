<!-- Header.vue -->
<template>
  <div class="justify-content-center align-items-center text-center bg-title">
    <h1
      class="text-gray-900 fw-bold pt-8 mt-9 my-1"
      style="font-size: xx-large"
    >
    {{ titleText }}
    </h1>
    <h2 class="text-gray-700 fw-bold p-4 fs-2">
      {{ descriptionText }}
    </h2>
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
.bg-title {
  background-color: #f0f6f9; /* Powder Blue 색상 */
  height: 180px;
}
</style>
