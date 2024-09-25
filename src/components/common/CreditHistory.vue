<template>

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