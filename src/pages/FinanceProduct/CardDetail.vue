<template>
    <div>
        <div class=" m-10 pb-10">
            <!-- 카드 정보 -->
            <div class="card-header">
                <h4 class="corp-name">{{ productData.corpName }}</h4>
                <h2 class="card_name">{{ productData.cardName }}</h2>
            </div>
            <div class="img-wrapper">
                <img :src="productData.imgUrl" alt="카드 이미지" class="card-img">
            </div>
            <div style="display: flex; justify-content: center; padding-left: 20px; padding-top: 20px;">
                <hr style="border-top: 8px solid #C1C1C1; width: 70%;">
            </div>
        </div>

        <div class="ms-10 ps-10 ">
            <!-- 전월실적 & 연회비 -->
            <div class="card-details" style="margin-left: 280px;">
                <div class="info-block">
                    <h3>전월실적</h3>
                    <p>{{ productData.exLMth }}</p>
                </div>
                <div class="info-block">
                    <h3>연회비</h3>
                    <div v-if="productData.exInFor">
                        <p v-for="(fee, index) in feeArray" :key="index">{{ fee }}</p>
                    </div>
                </div>
            </div>

            <!-- 혜택 -->
            <div class="card-benefits" style="margin-left: 280px;">
                <h3>혜택</h3>
                <ul>
                    <div v-for="(benefit, index) in benefitArray" :key="index">
                        <li>
                            <strong>{{ benefit[0] }}</strong>
                            <p>{{ benefit[1] }}</p>

                        </li>
                    </div>
                </ul>
            </div>
            <!-- 해당 카드 더 자세한 정보 사이트 -->
            <div class="product-footer">
                <button class="btn btn-sm btn-primary mt-13" style="margin-left: -50px; margin-bottom: 150px" @click="viewProductDetails">상품
                    자세히 보기</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

const route = useRoute();
const productData = reactive({});
const feeArray = ref([]);
const benefitArray = ref([]);

// 연회비 데이터를 처리하는 함수
const parseExInFor = (exInFor) => {
    if (!exInFor) return [];
    return exInFor.split(' / ');
};

// 혜택 데이터를 처리하는 함수
const parseBenefitDetail = (benefitDetail) => {
    if (!benefitDetail) return [];
    return benefitDetail.split(' | ').map(item => item.split('#'));
};

// 특정 카드 상품 조회 함수
const getProductByNo = async (cardNo) => {
    try {
        const response = await axios.get(`http://localhost:8080/product/card/${cardNo}`);
        console.log(response.data);
        Object.assign(productData, response.data);
        feeArray.value = parseExInFor(productData.exInFor);
        benefitArray.value = parseBenefitDetail(productData.benefitDetail);
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
};



// 컴포넌트가 마운트될 때 데이터를 가져오기
onMounted(() => {
    const cardNo = route.params.cardNo;
    if (cardNo) {
        getProductByNo(cardNo);
    } else {
        console.error('No cardNo passed to this route.');
    }
});

// 버튼 클릭 시 호출될 함수
const viewProductDetails = () => {
    window.location.href = productData.detailLink;
};
</script>

<style>
/* 카드 헤더 스타일 */
.card-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/* 은행명 */
.corp-name {
    font-size: 22px;
    color: #216DBE;
    text-align: center;
    margin-bottom: 5px;
}

/* 카드명 */
.card_name {
    font-size: 26px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 28px;
    text-align: center;
}

/* 이미지 중앙 정렬 */
.img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-img {
    width: 280px;
    height: auto;
}

/* 전월실적 및 연회비 스타일 */
.card-details {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.info-block {
    text-align: left;
    width: 45%;
}

/* 혜택 스타일 */
.card-benefits {
    margin-top: 20px;
}

/* 상품 버튼 스타일 */
.product-footer {
    margin-top: 20px;
    text-align: center;
}
</style>
