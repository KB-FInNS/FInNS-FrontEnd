<template>
    <div class="mb-8">
        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold justify-content-center">
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/profile/creditHistory" exact-active-class="active">소비 내역</router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item" style="margin-left: 300px">
            <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/profile/analysis" exact-active-class="active">분석</router-link>
          </li>
          <!--end::Nav item-->
        </ul>
    </div>

    <Calendar />
    <DataTables class="mt-4" :data="totallist"/>
</template>

<script setup>
import Calendar from '@/components/common/Calendar.vue'
import DataTables from '@/components/common/DataTables.vue'
import { getCurrentInstance, ref } from 'vue';

const internalInstance = getCurrentInstance(); 
const emitter = internalInstance.appContext.config.globalProperties.emitter;
const totallist = ref([]);

const dayClick = async (date) => {
  try {
    totallist.value = [
        {
            category: './../../src/assets/media/category/meal.png',
            place: 'Restaurant',
            amount: 30,
            date: '2024-09-24',
            checked: true,
        },
        {
            category: './../../src/assets/media/category/alcohol.png',
            place: 'Bus Station',
            amount: 5,
            date: '2024-09-23',
            checked: true,
        },
        {
            category: './../../src/assets/media/category/shopping.png',
            place: 'Mall',
            amount: 100,
            date: '2024-09-22',
            checked: true,
        },
        {
            category: './../../src/assets/media/category/convenienceStore.png',
            place: 'Supermarket',
            amount: 50,
            date: '2024-09-21',
            checked: true,
        },
        {
            category: './../../src/assets/media/category/cafe.png',
            place: 'cafe',
            amount: 30,
            date: '2024-09-25',
            checked: true,
        }
    ];
  } catch (error) {
    totallist.value = [];
  }
}

emitter.on('day_click', dayClick);

</script>