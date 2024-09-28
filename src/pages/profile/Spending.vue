<template>
    <div class="mb-8">
        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold justify-content-center">
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link class="nav-link text-active-primary ms-0 me-10 py-5" to="/profile/spending" exact-active-class="active">소비 내역</router-link>
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
            category: '/src/assets/media/category/meal.png',
            place: '미친피자',
            amount: 46000,
            date: '2024-09-24 13:01',
            checked: true,
        },
        {
            category: '/src/assets/media/category/alcohol.png',
            place: '한사바리',
            amount: 60000,
            date: '2024-09-23 20:43',
            checked: true,
        },
        {
            category: '/src/assets/media/category/shopping.png',
            place: 'Apple',
            amount: 1600000,
            date: '2024-09-22 23:11',
            checked: true,
        },
        {
            category: '/src/assets/media/category/meal.png',
            place: '매머드커피',
            amount: 3000,
            date: '2024-09-25 09:54',
            checked: true,
        },
        {
            category: '/src/assets/media/category/convenienceStore.png',
            place: 'GS25',
            amount: 2400,
            date: '2024-09-21 11:02',
            checked: true,
        },
    ];
  } catch (error) {
    totallist.value = [];
  }
}

emitter.on('day_click', dayClick);

</script>