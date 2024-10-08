<template>
  <div class="container mt-10 d-flex justify-content-center align-items-center">
    <PostView :postNo="postNo" />
  </div>
</template>

<script setup>
import PostView from '@/components/common/PostView.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const postNo = ref(null);
const route = useRoute();

onMounted(() => {
  postNo.value = route.params.postNo;
});
</script>

<style >
    
</style>