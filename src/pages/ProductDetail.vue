<template>
    <div v-if="productData" class="tab-content" id="myTabContent">
        <div class="card mb-10">
            <div class="card-body">
                <img :src="productData.img_url" alt="bank logo" class="bank-logo" width="50px" height="50px" />
                <p>{{ productData.kor_co_nm }}</p>
                <h1>{{ productData.fin_prdt_nm }}</h1>
            </div>
        </div>
        <div class="card mb-10">
            <div class="card-body">
                <div class="product-details">
                    <p><strong>최고 금리:</strong> {{ productData.intr_rate2 }}</p>
                    <p><strong>기본 금리:</strong> {{ productData.intr_rate }}</p>
                    <p><strong>저축 기간:</strong> {{ productData.save_trm }}개월</p>
                    <p><strong>금리 타입:</strong> {{ productData.intr_rate_type_nm }}</p>
                    <p><strong>가입 회원:</strong> {{ productData.join_member }}</p>
                    <p><strong>가입 방법:</strong> {{ productData.join_way }}</p>
                </div>
                <div class="advantages">
                    <p><strong>우대 조건:</strong></p>
                    <ul>
                        <li>1. 신규 고객</li>
                        <li>2. 가계 대출 이용 고객</li>
                        <li>3. 입금일 전월 주거래 우대 조건 2가지 이상</li>
                        <li>4. 건별 3천만 원 이상</li>
                        <li>5. 건별 만기 자동 재예치</li>
                    </ul>
                </div>
                <div class="product-footer">
                    <button class="btn btn-sm btn-primary me-3" @click="viewProductDetails">상품 자세히 보기</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>데이터가 없습니다.</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { reactive, onMounted } from 'vue';
  
  const route = useRoute();
  const productData = reactive({});
  
  onMounted(() => {
    if (route.query && route.query.item) {
        Object.assign(productData, JSON.parse(route.query.item)); // query에서 받은 데이터를 productData에 저장
    } else {
        console.error('No data passed to this route.');
    }
  });
  
  // 버튼 클릭 시 호출될 함수
  const viewProductDetails = () => {
    alert('상품 자세히 보기 클릭됨');
  };
  </script>