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

    <div class="d-flex align-items-center">
        <div id="kt_docs_google_chart_pie"></div>
        <div>hello</div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

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
      ['Task', 'Hours per Day'],
      ['Work', 8],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 3],
      ['Sleep', 7]
    ]);

    // 차트 옵션 설정
    const options = {
      title: '카테고리별 소비 분석',
      legend: { position: 'none' },  // 범례를 숨김
      width: 1000,
      height: 500
    };

    // 차트 그리기
    const chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));
    chart.draw(data, options);
  });
};

// 컴포넌트가 마운트되면 Google Charts API 로드를 시작
onMounted(() => {
  loadGoogleCharts();
});

</script>