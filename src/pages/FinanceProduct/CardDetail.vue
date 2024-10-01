<template>
    <div>
        <div class="card m-10 pb-10">
            <!-- 카드 정보 -->
            <div class="card-header">
                <h4 class="corp-name">{{ productData.corp_name }}</h4>
                <h2 class="card_name">{{ productData.card_name }}</h2>
            </div>
            <div class="img-wrapper">
                <img :src="productData.card_img_url" alt="카드 이미지" class="card-img">
            </div>
        </div>
        <div class="card m-10 p-10">
            <!-- 전월실적 & 연회비 -->
            <div class="card-details">
                <div class="info-block">
                    <h3>전월실적</h3>
                    <p>최소 50만원</p>
                </div>
                <div class="info-block">
                    <h3>연회비</h3>
                    <p>국내전용 20,000원</p>
                    <p>MASTER 20,000원</p>
                    <p>연회비 100% 캐시백</p>
                </div>
            </div>

            <!-- 혜택 -->
            <div class="card-benefits">
                <h3>혜택</h3>
                <ul>
                    <li>
                        <div class="benefit-text">
                            <strong>전기, 수소차 충전</strong>
                            <p>20%청구할인</p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 해당 카드 더 자세한 정보 사이트 -->
            <div class="product-footer">
                <button class="btn btn-sm btn-primary me-3" @click="viewProductDetails">상품 자세히 보기</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { reactive, onMounted } from 'vue';
const productData = reactive({});

const route = useRoute();

onMounted(() => {
    if (route.query && route.query.item) {
        Object.assign(productData, JSON.parse(route.query.item)); // 
    } else {
        console.error('No data passed to this route.');
    }
});

// 버튼 클릭 시 호출될 함수
const viewProductDetails = () => {
    alert('상품 자세히 보기 클릭됨');
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
    font-size: 18px;
    color: #216DBE;
    text-align: center;
    margin-bottom: 5px;
}

/* 카드명 */
.card_name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
}

/* 이미지 중앙 정렬 */
.img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-img {
    width: 300px;
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
