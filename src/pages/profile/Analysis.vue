<template>
  <div class="mt-10">
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

  <div class="d-flex align-items-center" style="margin-top: -20px;">
    <!-- Left side (Pie Chart) -->
    <div class="w-50 d-flex justify-content-center">
      <div id="kt_docs_google_chart_pie"></div>
    </div>
  
    <!-- Right side (Table) -->
    <div class="w-50">
      <div v-if="categorys.length === 0">
        <h4 class="text-center">소비 내역이 없습니다!</h4>
      </div>
      <div v-else v-if="isTableVisible">
        <div class="table-responsive" style="height: 380px; overflow-y: auto;">
          <table
            id="kt_datatable_vertical_scroll"
            class="table table-row-bordered"
            style="border-collapse: separate; border-spacing: 0 15px;">
            <tbody>
              <tr
                v-for="(item, index) in sortedCategorys"
                :key="index"
                :style="{ backgroundColor: bgColors[index] }"
                @click="showCategoryList(item.category)"
                style="cursor: pointer; line-height: 2.5;">
                <td class="src" style="border-radius: 30px 0px 0px 30px; padding: 10px 20px;">
                  <img :src="item.src" style="width: 40px; height: 40px; margin-left: 40px; margin-top: -5px" />
                  <span class="ms-8 fs-2 fw-bold" style="color: #4A4A4A">{{ item.category }}</span>
                </td>
                <td class="percentage fs-2 fw-bold text-center" style="color: #4A4A4A; border-radius: 0px 30px 30px 0px; padding: 10px 20px;">
                  {{ item.percentage }}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  <DataTables style="margin-top: -20px;" :data="totalList"/>
</template>

<script setup>
import DataTables from '@/components/common/DataTables.vue'
import { getCurrentInstance, ref, onMounted, computed } from 'vue';

const loadGoogleCharts = () => {
  // Google Charts API를 동적으로 로드
  const script = document.createElement('script');
  script.src = 'https://www.gstatic.com/charts/loader.js';
  script.onload = drawChart; // 로드 후 차트를 그림
  document.head.appendChild(script);
};

let categorys = ref();
let isTableVisible = ref(false); // 테이블 표시 여부
const bgColors = ['#8DC3FF', '#FF949D', '#E1BEE7', '#FFE57F', '#88E793', '#FFB74D', '#80CBC4', '#90CAF9', '#FFAB91', '#DCE775'];

const props = defineProps({
  categorys: {
    type: Array,
    required: true,
  },
});

categorys.value = [
  {
    category: '식비 & 카페',
    src: '/assets/media/category/meal.png',
    amount: 50000,
    percentage: null
  },
  {
    category: '술 & 유흥',
    src: '/assets/media/category/alcohol.png',
    amount: 30000,
    percentage: null
  },
  {
    category: '쇼핑',
    src: '/assets/media/category/shopping.png',
    amount: 120000,
    percentage: null
  },
  {
    category: '식비 & 카페',
    src: '/assets/media/category/meal.png',
    amount: 50000,
    percentage: null
  },
  {
    category: '술 & 유흥',
    src: '/assets/media/category/alcohol.png',
    amount: 30000,
    percentage: null
  },
  {
    category: '쇼핑',
    src: '/assets/media/category/shopping.png',
    amount: 120000,
    percentage: null
  },
  {
    category: '쇼핑',
    src: '/assets/media/category/shopping.png',
    amount: 120000,
    percentage: null
  },
  {
    category: '식비 & 카페',
    src: '/assets/media/category/meal.png',
    amount: 50000,
    percentage: null
  },
  {
    category: '술 & 유흥',
    src: '/assets/media/category/alcohol.png',
    amount: 30000,
    percentage: null
  },
  {
    category: '쇼핑',
    src: '/assets/media/category/shopping.png',
    amount: 120000,
    percentage: null
  },
];

// percentage를 기준으로 내림차순 정렬한 배열을 computed로 생성
const sortedCategorys = computed(() => {
  const totalAmount = categorys.value.reduce((sum, item) => sum + item.amount, 0);

  // percentage 계산 (소수점 아래 한 자리까지, 반올림)
  categorys.value.forEach(item => {
    item.percentage = ((item.amount / totalAmount) * 100).toFixed(1);
  });

  // 내림차순 정렬
  return [...categorys.value].sort((a, b) => b.percentage - a.percentage);
});


const drawChart = () => {
  // Google Charts 패키지 로드
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(() => {
    // 데이터 준비
    const data = google.visualization.arrayToDataTable([
      ['Category', 'Amount'],
      ...sortedCategorys.value.map(item => [item.category, item.amount])
    ]);

    // 차트 옵션 설정
    const options = {
      title: '이번 달 카테고리별 소비 분석',
      legend: { position: 'none' },  // 범례를 숨김
      tooltip: { trigger: 'none' }, // hover나 click시 tooltip을 표시하지 않음
      width: 600,
      height: 700,
      titleTextStyle: {
          fontSize: 24, // 타이틀 글씨 크기 설정
          color: '#005E92', // 글씨 색상 설정
      },
      slices: bgColors.reduce((acc, color, idx) => {
        acc[idx] = { offset: 0.02, color: color };
        return acc;
      }, {}),
      pieSliceTextStyle: {
        color: 'black', // 글씨 색상 설정
      },
    };

    // 차트 그리기
    const chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));
    chart.draw(data, options);

    isTableVisible.value = true; // 테이블 표시
    categoryClick();
  });
};

const internalInstance = getCurrentInstance(); 
const emitter = internalInstance.appContext.config.globalProperties.emitter;
const totalList = ref([]);
const categoryClick = async (category) => {
  // category를 기준으로 서버에서 데이터 가져와서 totalList.value 바꿔야함
  try {
    totalList.value = [
        {
            categoryImg: '/assets/media/category/meal.png',
            place: '미친피자',
            amount: 46000,
            date: '2024-09-24 13:01',
            checked: true,
        },
        {
            categoryImg: '/assets/media/category/meal.png',
            place: '한사바리',
            amount: 60000,
            date: '2024-09-23 20:43',
            checked: true,
        },
        {
            categoryImg: '/assets/media/category/meal.png',
            place: 'Apple',
            amount: 1600000,
            date: '2024-09-22 23:11',
            checked: true,
        },
        {
            categoryImg: '/assets/media/category/meal.png',
            place: '매머드커피',
            amount: 3000,
            date: '2024-09-25 09:54',
            checked: true,
        },
        {
            categoryImg: '/assets/media/category/meal.png',
            place: 'GS25',
            amount: 2400,
            date: '2024-09-21 11:02',
            checked: true,
        },
    ];
  }
   catch (error) {
    totalList.value = [];
  }
};
emitter.on('category_click', categoryClick);

const showCategoryList = (category) => {
  emitter.emit('category_click', category);
  
  window.scrollTo({
    top: 1000, // 스크롤할 y축 위치
    behavior: 'smooth' // 부드러운 스크롤 효과
  });
}

onMounted(() => {
  loadGoogleCharts();
});

</script>

<style scoped>
td {
  vertical-align: middle;
}

</style>