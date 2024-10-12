<template>
    <div class="m-10">
        <div class="ms-20 mb-10">
            <!-- 금융상품 정보 -->
            <div class="card-body">
                <div class="d-flex align-items-center mb-4">
                    <img :src="productData.imgUrl" alt="bank logo" class="bank-logo" width="50px" height="50px" />
                    <p style="margin-left: 10px; font-size: 22px; font-weight: 800 ; margin-top: 10px; color: #717272;">{{ productData.korCoNm }}</p>
                </div>
                <h1 style="font-size: 30px; font-weight: bold; margin-left: 10px;">{{ productData.finPrdtNm }}</h1>
            </div>
        </div>
        <div style="display: flex; padding-left: 65px;">
            <hr style="border-top: 8px solid #C1C1C1; width: 90%;">
        </div>
        <div class="ms-20 mt-10 mb-10">
            <div class="card-body ms-5" style=" line-height: 1.5; /* 글자의 높이를 1.5배로 설정 */">
                <!-- 자세한 정보 -->
                <div class="product-details">
                    <div class="d-flex" style="gap: 50px;">
                        <p><strong>최고 금리:</strong> <strong style="color: #216DBE;">{{ productData.intrRate2 }}</strong>
                        </p>
                        <p><strong>기본 금리:</strong> {{ productData.intrRate }}</p>
                    </div>
                    <p><strong>가입 대상:</strong> {{ productData.joinMember }}</p>
                    <p><strong>가입 방법:</strong> {{ productData.intrRate }}</p>
                    <p><strong>가입 기간:</strong> {{ productData.saveTrm }}개월</p>
                    <p><strong>저축 금리유형:</strong> {{ productData.intrRateTypeNm }}</p>
                </div>

                <!-- 혜택 -->
                <div class="advantages mt-4">
                    <p><strong>우대 조건:</strong></p>
                    <p><strong style="color: #216DBE;">다음 중 하나 충족한 입금건에 대해 최고 연0.2%</strong></p>
                    <ul>
                        <li>1. 신규 고객</li>
                        <li>2. 가계 대출 이용 고객</li>
                        <li>3. 입금일 전월 주거래 우대 조건 2가지 이상</li>
                        <li>4. 건별 3천만 원 이상</li>
                        <li>5. 건별 만기 자동 재예치</li>
                    </ul>
                </div>
                <br>

                <div class="post-interest">
                    <p><strong>만기후 이자율</strong></p>
                    <p>- 1개월이내 : 만기시점 약점이율 x 50%</p>
                    <p>- 1개월초과 6개월이내 : 만기시점 약점이율 x 30%</p>
                    <p>- 6개월초과 : 만기시점 약점이율 x 20%</p>
                </div>

                <!-- 해당 카드 더 자세한 정보 사이트 -->
                <div class="product-footer mt-4 text-center">
                    <button class="btn btn-sm btn-primary me-3" @click="viewProductDetails">상품 자세히 보기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { reactive, onMounted } from 'vue';
import axios from 'axios';

const route = useRoute();
const productData = reactive({});

// 특정 금융 상품 조회 함수
const getProductByNo = async (financeProductNo) => {
  try {
    const response = await axios.get(`http://localhost:8080/product/no/${financeProductNo}`);
    console.log(response.data);
    Object.assign(productData, response.data); 
  } catch (error) {
    console.error('Error fetching product data:', error); 
  }
};

// 컴포넌트가 마운트될 때 데이터를 가져오기
onMounted(() => {
  const financeProductNo = route.params.financeProductNo; 
  if (financeProductNo) {
    getProductByNo(financeProductNo);
  } else {
    console.error('No financeProductNo passed to this route.');
  }
});

// 버튼 클릭 시 호출될 함수
const viewProductDetails = () => {
    window.location.href = productData.companyUrl;
};
</script>

<style>
.advantages ul {
    list-style-type: none;
    padding: 0;
}

.advantages ul li {
    margin-bottom: 10px;
    font-size: 16px;
}

.product-details p,
.advantages p,
.post-interest p {
    font-size: 16px;
}

.product-footer button {
    padding: 10px 20px;
}
</style>
