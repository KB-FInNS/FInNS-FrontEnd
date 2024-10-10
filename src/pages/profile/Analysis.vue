<template>
  <div class="mt-10">
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

  <div class="d-flex align-items-center" style="margin-top: -20px;">
    <!-- Left side (Pie Chart) -->
    <div class="w-50 d-flex justify-content-center">
      <div id="kt_docs_google_chart_pie"></div>
    </div>
  
    <!-- Right side (Table) -->
    <div class="w-50">
      <div v-if="sortedCategories.length === 0">
        <h1 class="text-center">소비 내역이 없습니다!</h1>
      </div>
      <div v-else v-if="isTableVisible">
        <div class="table-responsive" style="height: 380px; overflow-y: auto;">
          <table
            id="kt_datatable_vertical_scroll"
            class="table table-row-bordered"
            style="border-collapse: separate; border-spacing: 0 15px;">
            <tbody>
              <tr
                v-for="(item, index) in percentageCategories"
                :key="index"
                :style="{ backgroundColor: categoryMap.get(item.category).bgColor }"
                @click="categoryClick(item.category)"
                style="cursor: pointer; line-height: 2.5;">
                <td class="src" style="border-radius: 30px 0px 0px 30px; padding: 10px 20px;">
                  <img :src="categoryMap.get(item.category).img_url" style="width: 40px; height: 40px; margin-left: 40px; margin-top: -5px" />
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
  
  <DataTables v-if="isListVisible" style="margin-top: -20px;" :posts="totalList"/>

  <div style="background-color: #D6EDFA; text-align: center; padding: 36px; background-color: #eff6f9; margin-bottom: 40px;">
    <div style="font-size: 30px; font-weight: 900;">추천카드</div>
    <div style="font-size: 20px; font-weight: 650; color: #005E92;">소비 내역을 분석해서 골라봤어요</div>
  </div>
  <div class="card-container">
    <CardComponent v-for="(card, index) in cards" :key="index" :title="card.title" :image="card.image" :description="card.description" :url="card.url" />
  </div>
</template>

<script setup>
import DataTables from '@/components/common/DataTables.vue'
import CardComponent from '@/components/common/CardComponent.vue';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userNo = route.params.userNo;

const categoryMap = new Map([
  ['식비 · 카페', { img_url: '/assets/media/category/meal.png', bgColor: '#8DC3FF' }],
  ['쇼핑', { img_url: '/assets/media/category/shopping.png', bgColor: '#FF8690' }],
  ['의료', { img_url: '/assets/media/category/health.png', bgColor: '#88E793' }],
  ['통신', { img_url: '/assets/media/category/communication.png', bgColor: '#EEA4FB' }],
  ['술 · 유흥', { img_url: '/assets/media/category/play.png', bgColor: '#FFBE5F' }],
  ['미용', { img_url: '/assets/media/category/beauty.png', bgColor: '#D46B7E' }],
  ['교통', { img_url: '/assets/media/category/car.png', bgColor: '#7ED7E9' }],
  ['문화 · 여행', { img_url: '/assets/media/category/travel.png', bgColor: '#5ECBCB' }],
  ['교육', { img_url: '/assets/media/category/study.png', bgColor: '#B5BDC4' }],
  ['기타', { img_url: '/assets/media/category/else.png', bgColor: '#DCE775' }]
]);

let sortedCategories = ref([]);
let isTableVisible = ref(false); // 테이블 표시 여부
let isListVisible = ref(false); // 테이블 표시 여부

const fetchSortedCategories = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/users/${userNo}/amountByCategory`);
    sortedCategories.value = response.data;
    
  } catch (error) {
    console.error('Error fetching sorted categories:', error);
  }
};

// percentage를 기준으로 내림차순 정렬한 배열을 computed로 생성
const percentageCategories = computed(() => {
  const totalAmount = sortedCategories.value.reduce((sum, item) => sum + item.amount, 0);

  // percentage 계산 (소수점 아래 한 자리까지, 반올림)
  sortedCategories.value.forEach(item => {
    item.percentage = ((item.amount / totalAmount) * 100).toFixed(1);
  });

  return sortedCategories.value;
});

const loadGoogleCharts = () => {
  // Google Charts API를 동적으로 로드
  const script = document.createElement('script');
  script.src = 'https://www.gstatic.com/charts/loader.js';
  script.onload = drawChart; // 로드 후 차트를 그림
  document.head.appendChild(script);
};

const drawChart = () => {
  // Google Charts 패키지 로드
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(() => {
    // 데이터 준비
    const data = google.visualization.arrayToDataTable([
      ['Category', 'Amount'],
      ...percentageCategories.value.map(item => [item.category, item.amount])
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
      slices: sortedCategories.value.reduce((acc, item, idx) => {
        const color = categoryMap.get(item.category).bgColor;

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
  });
};

const totalList = ref([]);
const getPostsByCategory = async (category) => {
  try {
    const postRequestByCategoryDTO = {
      userNo: userNo,
      category: category,
      isOnlyPublic: false
    }

    const response = await axios.post(`http://localhost:8080/posts/byCategory`, postRequestByCategoryDTO);
    totalList.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    totalList.value = [];
  }
};

const categoryClick = (category) => {
  getPostsByCategory(category);

  window.scrollTo({
    top: 1120, // 페이지의 전체 높이로 스크롤
    behavior: 'smooth' // 부드러운 스크롤 효과
  });
};

onMounted(async () => {
  await fetchSortedCategories();
  loadGoogleCharts(); // Google Charts 로드
  
  // sortedCategories가 업데이트된 후에 첫 번째 요소를 사용합니다.
  if (percentageCategories.value.length > 0) {
    getPostsByCategory(percentageCategories.value[0].category);
  }

  isTableVisible.value = true;
  isListVisible.value = true;
});


// 카드 데이터 설정
const cards = ref([
  {
    title: '[KB] K-패스 경기교통카드',
    image: '/assets/media/avatars/American Express Blue Card.png', // 첫 번째 카드 이미지 경로 설정
    description: ['대중교통 10% 할인', '생활서비스 5% 할인', 'KB Pay 이용 시 생활서비스 5% 추가 할인'],
    url: 'https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=09321&solicitorcode=7030023014&utm_source=google_sa&utm_medium=cpc&utm_campaign=kpass_card&utm_content=life&utm_term=%EB%8C%80%EC%A4%91%EA%B5%90%ED%86%B5%ED%95%A0%EC%9D%B8%EC%B9%B4%EB%93%9C&gad_source=1&gclid=CjwKCAjw6c63BhAiEiwAF0EH1PQeokuZx6aw-T-q1rY3OmnnWDt0JRwBYSq3D8s6VoEwwKxNVBuBjhoCUiQQAvD_BwE',
  },
  {
    title: '[KB] Our WE:SH 카드',
    image: '/assets/media/avatars/American Express Blue Card.png', // 두 번째 카드 이미지 경로 설정
    description: ['우리를 위한 5% 할인(선택형)', '두리(소중한 당신)를 위한 10% 할인(선택형)', '통신료 10% 할인은 기본'],
    url: 'https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=09124&solicitorcode=7030023014&utm_source=google_sa&utm_medium=cpc&utm_campaign=ourwesh_card&utm_content=ourwesh_card&utm_term=KB%EA%B5%AD%EB%AF%BC%EC%B9%B4%EB%93%9C%EC%95%84%EC%9B%8C%EC%9C%84%EC%8B%9C&gad_source=1&gclid=CjwKCAjw6c63BhAiEiwAF0EH1Jn5aB0KPloyUl1tHzcaQI_t1Zuf0IL756H8STAJAGUrnV_BL4HUxhoClZsQAvD_BwE',
  },
  {
    title: '[KB] Our WE:SH 카드',
    image: '/assets/media/avatars/American Express Blue Card.png', // 두 번째 카드 이미지 경로 설정
    description: ['우리를 위한 5% 할인(선택형)', '두리(소중한 당신)를 위한 10% 할인(선택형)', '통신료 10% 할인은 기본'],
    url: 'https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=09124&solicitorcode=7030023014&utm_source=google_sa&utm_medium=cpc&utm_campaign=ourwesh_card&utm_content=ourwesh_card&utm_term=KB%EA%B5%AD%EB%AF%BC%EC%B9%B4%EB%93%9C%EC%95%84%EC%9B%8C%EC%9C%84%EC%8B%9C&gad_source=1&gclid=CjwKCAjw6c63BhAiEiwAF0EH1Jn5aB0KPloyUl1tHzcaQI_t1Zuf0IL756H8STAJAGUrnV_BL4HUxhoClZsQAvD_BwE',
  },

]);
</script>

<style scoped>
td {
  vertical-align: middle;
}
.card-container {
  display: flex;
  justify-content: center;
  gap: 180px;
  margin-bottom: 30px;
}

</style>