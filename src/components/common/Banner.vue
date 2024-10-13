<template>
  <div class="justify-content-center align-items-center text-center" style="background-color: #f0f6f9; height: 180px">
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
      default: 'titleText',
    },
    descriptionText: {
      type: String,
      default: 'descriptionText',
    },
  },
};
</script>