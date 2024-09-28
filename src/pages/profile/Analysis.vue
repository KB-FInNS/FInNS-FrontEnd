<template>
  <div>
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

  <div class="d-flex align-items-center">
      <div id="kt_docs_google_chart_pie"></div>

      <div v-if="categorys.length === 0">
        <h4 id="nolist">소비 내역이 없습니다!</h4>
      </div>
      <div v-else v-if="isTableVisible">
        <div class="table-responsive" style="height: 450px; width: 700px; overflow-y: auto;">
          <table
            id="kt_datatable_vertical_scroll"
            class="table table-row-bordered gy-7 gs-10">
            <tbody>
              <tr
                v-for="(item, index) in sortedCategorys"
                :key="index"
              >
                <td class="src">
                  <img :src="item.src" style="width: 40px; height: 40px" />
                  <span class="ms-8 fs-3 fw-semibold">{{ item.category }}</span>
                </td>
                <td class="percentage fs-3 fw-semibold">{{ item.percentage }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const loadGoogleCharts = () => {
  // Google Charts API를 동적으로 로드
  const script = document.createElement('script');
  script.src = 'https://www.gstatic.com/charts/loader.js';
  script.onload = drawChart; // 로드 후 차트를 그림
  document.head.appendChild(script);
};

let categorys = ref();
let isTableVisible = ref(false); // 테이블 표시 여부

const props = defineProps({
  categorys: {
    type: Array,
    required: true,
  },
});

categorys.value = [
  {
    category: '식비 & 카페',
    src: '/src/assets/media/category/meal.png',
    amount: 50000,
    percentage: null
  },
  {
    category: '술 & 유흥',
    src: '/src/assets/media/category/alcohol.png',
    amount: 30000,
    percentage: null
  },
  {
    category: '쇼핑',
    src: '/src/assets/media/category/shopping.png',
    amount: 120000,
    percentage: null
  },
  {
    category: '식비 & 카페',
    src: '/src/assets/media/category/meal.png',
    amount: 50000,
    percentage: null
  },
  {
    category: '술 & 유흥',
    src: '/src/assets/media/category/alcohol.png',
    amount: 30000,
    percentage: null
  },
  {
    category: '쇼핑',
    src: '/src/assets/media/category/shopping.png',
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
      title: '카테고리별 소비 분석',
      legend: { position: 'none' },  // 범례를 숨김
      tooltip: { trigger: 'none' }, // hover나 click시 tooltip을 표시하지 않음
      width: 600,
      height: 700,
      titleTextStyle: {
          fontSize: 24, // 타이틀 글씨 크기 설정
          color: '#005E92', // 글씨 색상 설정
      },
      slices: {
        0: { offset: 0.02 }, // 첫 번째 슬라이스 간격 추가
        1: { offset: 0.02 }, // 두 번째 슬라이스 간격 추가
        2: { offset: 0.02 }, // 세 번째 슬라이스 간격 추가
        3: { offset: 0.02 }, // 네 번째 슬라이스 간격 추가
        4: { offset: 0.02 },
        5: { offset: 0.02 },
        6: { offset: 0.02 },
        7: { offset: 0.02 },
        8: { offset: 0.02 },
        9: { offset: 0.02 },
      }
    };

    // 차트 그리기
    const chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));
    chart.draw(data, options);

    isTableVisible.value = true; // 테이블 표시
  });
};

onMounted(() => {
  loadGoogleCharts();
});

</script>

<style scoped>
td {
  vertical-align: middle;
}

</style>