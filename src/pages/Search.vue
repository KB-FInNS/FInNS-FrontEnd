<template>
  <!--begin::Main wrapper-->
  <div id="kt_docs_search_handler_basic" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="true" data-kt-search-layout="inline">
    <!--begin::Input Form-->
    <form data-kt-search-element="form" class="w-100 position-relative mb-5" autocomplete="off">
      <input type="hidden" />
      <input
        type="text"
        class="form-control form-control-lg form-control-solid px-15"
        name="search"
        placeholder="Search by username, full name or email..."
        data-kt-search-element="input"
        @keydown.enter.prevent
      />
      <span class="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
        <span class="spinner-border h-15px w-15px align-middle text-gray-500"></span>
      </span>
      <span class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
        <!--begin::Svg Icon | path: cross-->
      </span>
    </form>
    <!--end::Form-->

    <!--begin::Wrapper-->
    <div class="py-5">
      <div data-kt-search-element="suggestions">...</div>
      <div data-kt-search-element="results" class="d-none">...</div>
      <div data-kt-search-element="empty" class="text-center d-none">...</div>
    </div>
    <!--end::Wrapper-->
  </div>
  <!--end::Main wrapper-->
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Define reactive variables
const suggestionsElement = ref(null);
const resultsElement = ref(null);
const emptyElement = ref(null);
const element = ref(null);
let searchObject = null;

const processs = (search) => {
  setTimeout(() => {
    const number = KTUtil.getRandomInt(1, 6);

    // Hide recently viewed
    suggestionsElement.value.classList.add('d-none');

    if (number === 3) {
      // Hide results
      resultsElement.value.classList.add('d-none');
      // Show empty message
      emptyElement.value.classList.remove('d-none');
    } else {
      // Show results
      resultsElement.value.classList.remove('d-none');
      // Hide empty message
      emptyElement.value.classList.add('d-none');
    }

    // Complete search
    search.complete();
  }, 1500);
};

const clear = (search) => {
  // Show recently viewed
  suggestionsElement.value.classList.remove('d-none');
  // Hide results
  resultsElement.value.classList.add('d-none');
  // Hide empty message
  emptyElement.value.classList.add('d-none');
};

// Input handler
const handleInput = () => {
  const inputField = element.value.querySelector("[data-kt-search-element='input']");
  inputField.addEventListener('keydown', (e) => {
    // Only apply action to Enter key press
    if (e.key === 'Enter') {
      e.preventDefault(); // Stop form from submitting
    }
  });
};

// Lifecycle hook
onMounted(() => {
  element.value = document.querySelector('#kt_docs_search_handler_basic');

  if (!element.value) {
    return;
  }

  suggestionsElement.value = element.value.querySelector("[data-kt-search-element='suggestions']");
  resultsElement.value = element.value.querySelector("[data-kt-search-element='results']");
  emptyElement.value = element.value.querySelector("[data-kt-search-element='empty']");

  // Initialize search handler
  searchObject = new KTSearch(element.value);

  // Search handler
  searchObject.on('kt.search.process', processs);

  // Clear handler
  searchObject.on('kt.search.clear', clear);

  // Handle select
  KTUtil.on(element.value, "[data-kt-search-element='customer']", () => {
    //modal.hide();
  });

  // Handle input enter keypress
  handleInput();
});
</script>
