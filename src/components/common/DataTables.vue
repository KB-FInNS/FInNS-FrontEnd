<template>
  <!-- <link rel="stylesheet" href="/assets/plugins/custom/datatables/datatables.bundle.css"> -->

  <div v-if="data.length === 0">
    <h1 class="text-center" style="margin-top: 20px;">소비 내역이 없습니다!</h1>
  </div>
  <div v-else>
    <div class="table-responsive" style="height: 610px; overflow-y: auto;">
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
            v-for="(item, index) in data"
            :key="index"
            :class="{ 'bg-gray-200': !item.checked }"
            class="fs-5 text-gray-600 fw-bold"
            @click="goToPostView(item.id)"
            style="cursor: pointer;"
          >
            <td class="form-check form-check-solid form-check-custom form-switch justify-content-center mt-2" style="border: none;">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="googleswitch"
                  v-model="item.checked"
                  @change="updatePublic(item)"
                  @click.stop
                />
            </td>
            <td></td>
            <td class="category">
              <img :src="item.categoryImg" style="width: 40px; height: 40px" />
            </td>
            <td></td>

            <td class="place" style="color:black">{{ item.place }}</td>
            <td></td>
            <td class="amount">
              {{ item.amount.toLocaleString() }}원
            </td>
            <td class="date">{{ item.date }}</td>
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

const updatePublic = (item) => {
  // 공개 범위 바꾸는 코드 작성!
};

const goToPostView = (id) => {
  router.push('/postView'); // 해당 id에 맞는 PayDetails 페이지로 이동
  window.scrollTo(0, 0); 
};

const goToPayDetail = (id) => {
  router.push(`/payDetails/${id}`); // 해당 id에 맞는 PayDetails 페이지로 이동
  window.scrollTo(0, 0); 
};

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
td {
  vertical-align: middle;
}

</style>
