<template>
  <div v-if="data.length === 0">
    <h4 id="nolist">소비 내역이 없습니다!</h4>
  </div>
  <div v-else>
    <div class="table-responsive">
      <table
        id="kt_datatable_vertical_scroll"
        class="table table-row-bordered gy-5 gs-7"
      >
        <thead>
          <tr class="fw-bold fs-5 text-gray-800">
            <th><div class="ms-10">공개유무</div></th>
            <th>카테고리</th>
            <th>사용처</th>
            <th>금액</th>
            <th>결제일시</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in data"
            :key="index"
            :class="{ 'bg-gray-300': !item.checked }"
          >
            <td>
              <div
                class="form-check form-check-solid form-check-custom form-switch mt-4 ms-10"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="googleswitch"
                  v-model="item.checked"
                  @change="updatePublic(item)"
                />
              </div>
            </td>
            <td id="category" class="category">
              <img :src="item.category" style="width: 40px; height: 40px" />
            </td>
            <td id="place" class="place">{{ item.place }}</td>
            <td id="amount" class="amount">
              {{ item.amount.toLocaleString() }}
            </td>
            <td id="date" class="date">{{ item.date }}</td>
            <td>
              <a @click="goToDetail" class="btn btn-sm btn-primary hover-scale"
                >소비 상세</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import '@/assets/plugins/custom/datatables/datatables.bundle.css';
// import "@/assets/plugins/custom/datatables/datatables.bundle.js";
import { useRouter } from 'vue-router';

const router = useRouter();

const updatePublic = (item) => {
  // 공개 범위 바꾸는 코드 작성!
};

// const goToDetail = () => {
//   emitter.emit('item_edit_click', { item: item, index: item.index });
// };

const goToDetail = (id) => {
  router.push(`/profile/payDetails/${id}`); // 해당 id에 맞는 PayDetails 페이지로 이동
};

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.bg-gray {
  background-color: #d3d3d3; /* 회색 배경 */
}
</style>
