<template>
    <div class="mb-8 mt-10">
        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold justify-content-center">
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link class="nav-link text-active-primary ms-0 me-10 py-5" :to="`/profile/${userNo}/spending`" exact-active-class="active">소비 내역</router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item" style="margin-left: 300px">
            <router-link class="nav-link text-active-primary ms-0 me-10 py-5" :to="`/profile/${userNo}/analysis`" exact-active-class="active">분석</router-link>
          </li>
          <!--end::Nav item-->
        </ul>
    </div>

    <Calendar />
    <DataTables style="margin-top: 50px;" :posts="totalList"/>
</template>

<script setup>
import Calendar from '@/components/common/Calendar.vue'
import DataTables from '@/components/common/DataTables.vue'
import { getCurrentInstance, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const userNo = route.params.userNo;

const internalInstance = getCurrentInstance(); 
const emitter = internalInstance.appContext.config.globalProperties.emitter;
const totalList = ref([]);

const dayClick = async (date) => {
  try {
    // 요청 전에 totalList를 빈 배열로 초기화
    totalList.value = [];

    // 서버로 요청 보낼 데이터 구조
    const postRequestByDateDTO = {
      userNo: userNo, // 사용자 번호 등 추가 필요한 정보
      date: date, // 필요한 형식으로 날짜를 전달
      isPublic: true // 공개 여부 등 추가 필요한 정보
    };

    // 서버에 요청 보내기
    const response = await axios.post('http://localhost:8080/posts/byDate', postRequestByDateDTO);

    // 요청에 성공하면 totalList를 서버에서 받은 데이터로 업데이트
    totalList.value = response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    // 에러 발생 시 totalList를 빈 배열로 설정
    totalList.value = [];
  }
};
emitter.on('day_click', dayClick);

</script>