<template>
  <!--begin::Content-->
  <!-- <div
    class="content fs-6 d-flex flex-column flex-column-fluid"
    id="kt_content"
    style="background-color: white"
  > -->
  <!--begin::Toolbar-->
  <div class="toolbar mt-8" id="kt_toolbar">
    <div
      class="container-fluid d-flex flex-stack flex-wrap flex-sm-nowrap justify-content-center align-items-center"
    >
      <!--begin::Info-->
      <div
        class="d-flex flex-column align-items-center justify-content-center flex-wrap"
      >
        <!--begin::Title-->
        <h1 class="text-gray-900 fw-bold my-1 fs-1">금융 MBTI</h1>
        <h2 class="text-gray-700 fw-bold p-4 fs-2">
          소비내역 분석을 바탕으로 한 나의 MBTI 를 확인해보세요
        </h2>
        <!--end::Title-->
      </div>
      <!--end::Info-->
    </div>
  </div>
  <!--end::Toolbar-->
  <div class="parent-container pt-5 pb-3 fs-1">
    <div class="custom-style">
      <i class="">나의 MBTI</i>
    </div>
  </div>

  <!--begin::Container-->
  <div class="container-xxl">
    <!--begin::Navbar-->
    <div class="card mb-6">
      <div class="card-body pt-9 pb-0">
        <!--begin::Details-->
        <div class="d-flex flex-wrap flex-sm-nowrap">
          <!--begin: Pic-->
          <div class="me-7 mb-4">
            <div
              class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
            >
              <img :src="avatarUrl" alt="image" />
            </div>
          </div>
          <!--end::Pic-->

          <!--begin::Info-->
          <div class="flex-grow-1">
            <!--begin::Title-->
            <div
              class="d-flex justify-content-between align-items-start flex-wrap mb-2"
            >
              <!--begin::User-->
              <div class="d-flex flex-column">
                <!--begin::Name-->
                <div class="d-flex align-items-center mb-2">
                  <p class="text-gray-900 fs-1 fw-bold me-1">나의 MBTI</p>
                </div>
                <!--end::Name-->
                <!--begin::Info-->
                <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                  <p class="d-flex align-items-center text-gray-800 me-5 mb-2">
                    <i class="ki-duotone ki-profile-circle fs-4 me-1"></i
                    >Developer
                  </p>
                </div>
                <!--end::Info-->
              </div>
              <!--end::User-->
            </div>
            <!--end::Title-->
            <!--begin::Stats-->
            <div class="d-flex flex-wrap flex-stack">
              <!--begin::Wrapper-->
              <div class="d-flex flex-column flex-grow-1 pe-8"></div>
              <!--end::Wrapper-->
            </div>
            <!--end::Stats-->
          </div>
          <!--end::Info-->
        </div>
        <!--end::Details-->
      </div>
    </div>
    <!--end::Navbar-->

    <!--begin::Row-->
    <div class="row g-6 g-xl-9">
      <!--begin::Col-->
      <div class="col-md-6 col-xl-4">
        <!--begin::Card-->
        <div class="card-container rounded-top">
          <div class="card border-hover-primary">
            <!-- Card Front -->
            <div class="card-front text-center bg-One">
              <!--begin::Card header-->
              <div class="fs-1 fw-bold border-0 pt-9 text-center">
                먹는게제일좋아형
              </div>
              <!--end:: Card header-->
              <!--begin::Card body-->
              <div class="card-body">
                <!-- 이미지 추가 -->
                <div class="image-container">
                  <img src="../assets/media/avatars/kb_eat.png" />
                </div>
              </div>
            </div>
            <!--end::Card body-->

            <!-- Card Back -->
            <div class="card-back bg-One">
              <div class="card-body p-9">
                <!--begin::Info-->
                <div class="fs-1 fw-bold text-gray-900 text-center">
                  먹는게제일좋아형
                </div>
                <p
                  class="text-gray-800 fw-semibold fs-2 mt-1 pt-10 mb-7 text-center"
                >
                  음식에 대한 사랑은 곧 소비로 이어지는 타입!<br />
                  맛집 탐방, 고급 요리, 신상 메뉴라면 지출도 아깝지 않다!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--end::Card-->
      </div>
      <!--end::Col-->
      <!--begin::Col-->
      <div class="col-md-6 col-xl-4">
        <!--begin::Card-->
        <div class="card-container">
          <div class="card border-hover-primary">
            <!-- Card Front -->
            <div class="card-front text-center bg-Two">
              <!--begin::Card header-->
              <div class="fs-1 fw-bold border-0 pt-9 text-center">
                이것도저것도내꺼형
              </div>
              <!--end:: Card header-->
              <!--begin::Card body-->
              <div class="card-body">
                <!-- 이미지 추가 -->
                <div class="image-container mt-4 text-center">
                  <img src="../assets/media/avatars/kb_2my.png" />
                </div>
              </div>
            </div>
            <!--end::Card body-->

            <!-- Card Back -->
            <div class="card-back bg-Two">
              <div class="card-body p-9">
                <!--begin::Info-->
                <div class="fs-1 fw-bold text-gray-900 text-center">
                  이것도저것도내꺼형
                </div>
                <p
                  class="text-gray-800 fw-semibold fs-2 mt-1 pt-10 mb-7 text-center"
                >
                  쇼핑몰에 가면 눈에 보이는 건 전부 내 꺼! 최신 유행 아이템부터
                  희귀템까지<br />
                  쇼핑 카트는 언제나 가득 차 있다!
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--end::Card-->
      </div>
      <!--end::Col-->
      <!--begin::Col-->
      <div class="col-md-6 col-xl-4">
        <!--begin::Card-->
        <div class="card-container">
          <div class="card border-hover-primary">
            <!-- Card Front -->
            <div class="card-front text-center bg-Three">
              <!--begin::Card header-->
              <div class="fs-1 fw-bold border-0 pt-9 text-center">
                자기관리마니아형
              </div>
              <!--end:: Card header-->
              <!--begin::Card body-->
              <div class="card-body">
                <!-- 이미지 추가 -->
                <div class="image-container mt-4">
                  <img src="../assets/media/avatars/kb_rabbit.png" />
                </div>
              </div>
            </div>
            <!--end::Card body-->

            <!-- Card Back -->
            <div class="card-back bg-Three">
              <div class="card-body p-9">
                <!--begin::Info-->
                <div class="fs-1 fw-bold text-gray-900 text-center">
                  자기관리마니아형
                </div>
                <p
                  class="text-gray-800 fw-semibold fs-2 mt-1 pt-10 mb-7 text-center"
                >
                  외모와 건강 관리를 최우선으로 생각하는 사람!<br />
                  최신 뷰티 제품과 고급 서비스를 위해선 아낌없이 투자하는
                  유형이다!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--end::Card-->
      </div>
      <!--end::Col-->
      <!--begin::Col-->
      <div class="col-md-6 col-xl-4">
        <!--begin::Card-->
        <div class="card-container">
          <div class="card border-hover-primary">
            <!-- Card Front -->
            <div class="card-front text-center bg-four">
              <!--begin::Card header-->
              <div class="fs-1 fw-bold border-0 pt-9 text-center">
                마이아파형
              </div>
              <!--end:: Card header-->
              <!--begin::Card body-->
              <div class="card-body">
                <!-- 이미지 추가 -->
                <div class="image-container mt-4">
                  <img src="../assets/media/avatars/kb_sick.png" />
                </div>
              </div>
            </div>
            <!--end::Card body-->

            <!-- Card Back -->
            <div class="card-back bg-four">
              <div class="card-body p-9">
                <!--begin::Info-->
                <div class="fs-1 fw-bold text-gray-900 text-center">
                  마이아파형
                </div>
                <p
                  class="text-gray-800 fw-semibold fs-2 mt-1 pt-10 mb-7 text-center"
                >
                  건강이 최우선! 병원비와 의료비 지출이 큰 비중을 차지하는
                  유형이다!!<br />
                  정기적인 건강 관리와 치료를 위해 병원과 늘 가까운 사이.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--end::Card-->
      </div>
      <!--end::Col-->
      <!--begin::Col-->
      <div class="col-md-6 col-xl-4">
        <!--begin::Card-->
        <div class="card-container">
          <div class="card border-hover-primary">
            <!-- Card Front -->
            <div class="card-front text-center bg-five">
              <!--begin::Card header-->
              <div class="fs-1 fw-bold border-0 pt-9 text-center">
                통신보안형
              </div>
              <!--end:: Card header-->
              <!--begin::Card body-->
              <div class="card-body">
                <!-- 이미지 추가 -->
                <div class="image-container mt-4">
                  <img src="../assets/media/avatars/kb_phone.png" />
                </div>
              </div>
            </div>
            <!--end::Card body-->

            <!-- Card Back -->
            <div class="card-back bg-five">
              <div class="card-body p-9">
                <!--begin::Info-->
                <div class="fs-1 fw-bold text-gray-900 text-center">
                  통신보안형
                </div>
                <p
                  class="text-gray-800 fw-semibold fs-2 mt-1 pt-10 mb-7 text-center"
                >
                  최신 휴대폰과 초고속 인터넷 없인 못 사는 유형<br />
                  데이터와 통신비를 아껴보자!
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--end::Card-->
      </div>
      <!--end::Col-->
      <!--begin::Col-->
      <div class="col-md-6 col-xl-4">
        <!--begin::Card-->
        <div class="card-container">
          <div class="card border-hover-primary">
            <!-- Card Front -->
            <div class="card-front text-center bg-six">
              <!--begin::Card header-->
              <div class="fs-1 fw-bold border-0 pt-9 text-center">뚜벅초형</div>
              <!--end:: Card header-->
              <!--begin::Card body-->
              <div class="card-body">
                <!-- 이미지 추가 -->
                <div class="image-container mt-4">
                  <img src="../assets/media/avatars/kb_ddubeok.png" />
                </div>
              </div>
            </div>
            <!--end::Card body-->

            <!-- Card Back -->
            <div class="card-back bg-six">
              <div class="card-body p-9">
                <!--begin::Info-->
                <div class="fs-1 fw-bold text-gray-900 text-center">
                  뚜벅초형
                </div>
                <p
                  class="text-gray-800 fw-semibold fs-2 mt-1 pt-10 mb-7 text-center"
                >
                  대중교통을 애용하는 뚜벅초형<br />
                  지하철, 버스, 택시 등 교통비가 주된 지출이며, 경제적이고 빠른
                  이동을 추구하는 실속파.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--end::Card-->
      </div>
      <!--end::Col-->
      <!--begin::Col-->
      <div class="col-md-6 col-xl-4">
        <!--begin::Card-->
        <div class="card-container">
          <div class="card border-hover-primary">
            <!-- Card Front -->
            <div class="card-front text-center bg-seven">
              <!--begin::Card header-->
              <div class="fs-1 fw-bold border-0 pt-9 text-center">
                배낭을매고형
              </div>
              <!--end:: Card header-->
              <!--begin::Card body-->
              <div class="card-body">
                <!-- 이미지 추가 -->
                <div class="image-container mt-4">
                  <img src="../assets/media/avatars/kb_back.png" />
                </div>
              </div>
            </div>
            <!--end::Card body-->

            <!-- Card Back -->
            <div class="card-back bg-seven">
              <div class="card-body p-9">
                <!--begin::Info-->
                <div class="fs-1 fw-bold text-gray-900 text-center">
                  배낭을매고형
                </div>
                <p
                  class="text-gray-800 fw-semibold fs-2 mt-1 pt-10 mb-7 text-center"
                >
                  여행을 위해 사는 당신!!<br />
                  비행기 표, 숙소, 맛집 탐방까지 여행에 아낌없이 투자하며,
                  새로운 모험을 즐기는 여행 마니아.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--end::Card-->
      </div>
      <!--end::Col-->
      <!--begin::Col-->
      <div class="col-md-6 col-xl-4">
        <!--begin::Card-->
        <div class="card-container">
          <div class="card border-hover-primary">
            <!-- Card Front -->
            <div class="card-front text-center bg-eight">
              <!--begin::Card header-->
              <div class="fs-1 fw-bold border-0 pt-9 text-center">
                아인슈타인형
              </div>
              <!--end:: Card header-->
              <!--begin::Card body-->
              <div class="card-body">
                <!-- 이미지 추가 -->
                <div class="image-container mt-4">
                  <img src="../assets/media/avatars/kb_insyu.png" />
                </div>
              </div>
            </div>
            <!--end::Card body-->

            <!-- Card Back -->
            <div class="card-back bg-Three eight">
              <div class="card-body p-9">
                <!--begin::Info-->
                <div class="fs-1 fw-bold text-gray-900 text-center">
                  아인슈타인형
                </div>
                <p
                  class="text-gray-800 fw-semibold fs-2 mt-1 pt-10 mb-7 text-center"
                >
                  교육과 학습에 아낌없이 투자하는 당신!!<br />
                  강의, 학원, 도서, 온라인 강좌 등 지식 습득을 위한 교육비가
                  가장 큰 지출 항목.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--end::Card-->
      </div>
      <!--end::Col-->
      <!--begin::Col-->
      <div class="col-md-6 col-xl-4">
        <!--begin::Card-->
        <div class="card-container">
          <div class="card border-hover-primary">
            <!-- Card Front -->
            <div class="card-front text-center bg-nine">
              <!--begin::Card header-->
              <div class="fs-1 fw-bold border-0 pt-9 text-center">
                술술들어간다형
              </div>
              <!--end:: Card header-->
              <!--begin::Card body-->
              <div class="card-body">
                <!-- 이미지 추가 -->
                <div class="image-container mt-4">
                  <img src="../assets/media/avatars/kb_sul.png" />
                </div>
              </div>
            </div>
            <!--end::Card body-->

            <!-- Card Back -->
            <div class="card-back bg-nine">
              <div class="card-body p-9">
                <!--begin::Info-->
                <div class="fs-1 fw-bold text-gray-900 text-center">
                  술술들어간다형
                </div>
                <p
                  class="text-gray-800 fw-semibold fs-2 mt-1 pt-10 mb-7 text-center"
                >
                  술과 유흥을 즐기는 당신!!<br />
                  술자리와 유흥비가 가장 큰 지출이며, 언제나 즐거운 시간을
                  추구하는 캐릭터.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--end::Card-->
      </div>
      <!--end::Col-->
    </div>
    <!--end::Row-->
  </div>
  <!--end::Container-->
  <!-- </div> -->
  <!--end::Content-->
</template>

<script setup></script>

<style scoped>
.card-container {
  perspective: 1000px;
}

.card {
  width: 100%;
  height: 300px;

  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-front,
.card-back {
  position: absolute;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #fff;
}

.card-back {
  background-color: #f8f9fa;
  transform: rotateY(180deg);
}

.card-container:hover .card {
  transform: rotateY(180deg);
}
/* 아래부터 카드들의 background 색상 */
.bg-One {
  background-color: #9ed0f0; /* card 첫번째 색상 */
}
.bg-Two {
  background-color: #acea92; /* Powder Blue 색상 */
}
.bg-Three {
  background-color: #e6a7ea; /* Powder Blue 색상 */
}
.bg-four {
  background-color: #f19ed7; /* Powder Blue 색상 */
}
.bg-five {
  background-color: #ebc7a5; /* Powder Blue 색상 */
}
.bg-six {
  background-color: #ebebb3; /* Powder Blue 색상 */
}
.bg-seven {
  background-color: #e6a0f2; /* Powder Blue 색상 */
}
.bg-eight {
  background-color: #abf4f0; /* Powder Blue 색상 */
}
.bg-nine {
  background-color: #acc3ff; /* Powder Blue 색상 */
}

.parent-container {
  display: flex;
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
}

.custom-style {
  background-color: #000000; /* 파란색 배경 */
  border: 2px solid black; /* 검정색 테두리 */
  border-radius: 20px; /* 양끝을 둥글게 */
  padding: 14px; /* 내부 여백 */
  color: white; /* 텍스트 색상 */
  width: 200px; /* 고정 너비 */
  text-align: center; /* 텍스트 가운데 정렬 */
}
</style>
