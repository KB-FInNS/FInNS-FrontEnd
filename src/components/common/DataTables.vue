<template>
  <!-- <link rel="stylesheet" href="/assets/plugins/custom/datatables/datatables.bundle.css"> -->

  <div v-if="posts.length === 0">
    <h1 class="text-center" style="margin-top: 20px; margin-bottom: 150px">소비 내역이 없습니다!</h1>
  </div>
  <div v-else>
    <div class="table-responsive" style="height: 610px; overflow-y: auto; margin-bottom: 150px">
      <table
        id="kt_datatable_vertical_scroll"
        class="table table-row-bordered gy-5 gs-7 text-center"
      >
        <thead>
          <tr class="fw-bold fs-3 text-gray-800">
            <th>공개유무</th>
            <th></th>
            <th>카테고리</th>
            <th></th>
            <th class="">사용처</th>
            <th></th>
            <th class="">금액</th>
            <th class="">결제일시</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(post, index) in posts"
            :key="index"
            :class="{ 'bg-gray-200': !post.publicStatus }"
            class="fs-5 text-gray-600 fw-bold"
            @click="goToPostView(post.postNo)"
            style="cursor: pointer;"
          >
            <td class="form-check form-check-solid form-check-custom form-switch justify-content-center mt-2" style="border: none;">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="googleswitch"
                  v-model="post.publicStatus"
                  @change="togglePublicStatus(post.postNo)"
                  @click.stop
                />
            </td>
            <td></td>
            <td class="category">
              <img :src="getCategoryIcon(post.category)" style="width: 40px; height: 40px" />
            </td>
            <td></td>

            <td class="place" style="color:black">{{ post.place }}</td>
            <td></td>
            <td class="amount">
              {{ post.amount.toLocaleString() }}원
            </td>
            <td class="date">{{ post.transactionDate }}</td>
            <td class="">
              <a @click.stop="goToPayDetail" class="btn btn-sm btn-primary hover-scale fw-bold">소비 상세</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const category = [
    { name: '식비 · 카페', icon: '/assets/media/category/meal.png' },
    { name: '쇼핑', icon: '/assets/media/category/shopping.png' },
    { name: '미용', icon: '/assets/media/category/beauty.png' },
    { name: '의료', icon: '/assets/media/category/health.png' },
    { name: '통신', icon: '/assets/media/category/communication.png' },
    { name: '교통', icon: '/assets/media/category/car.png' },
    { name: '문화 · 여행', icon: '/assets/media/category/travel.png' },
    { name: '교육', icon: '/assets/media/category/study.png' },
    { name: '술 · 유흥', icon: '/assets/media/category/play.png' },
    { name: '기타', icon: '/assets/media/category/else.png' }
];

const getCategoryIcon = (categoryName) => {
    const categoryItem = category.find(item => item.name === categoryName);
    return categoryItem ? categoryItem.icon : '/assets/media/category/default.png';
};

const togglePublicStatus = async (postNo) => {
  // 디비에 공개 범위 바꾸는 코드
  try {
    const response = await axios.put(`http://localhost:8080/posts/${postNo}/togglePublicStatus`);

  } catch (error) {
    console.error('Error toggling public status:', error);
  }
};

const goToPostView = (postNo) => {
  router.push({
    path: `/postView/${postNo}` // Use path parameter instead of query
  });
  window.scrollTo(0, 0); 
};

const goToPayDetail = (postNo) => {
  router.push(`/payDetails/${postNo}`); // 해당 id에 맞는 PayDetails 페이지로 이동
  window.scrollTo(0, 0); 
};

</script>

<style scoped>
td {
  vertical-align: middle;
}

</style>
