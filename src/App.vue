<template>
  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <Aside />

      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script setup>
import Aside from '@/components/common/Aside.vue'

</script>

<style>
</style>