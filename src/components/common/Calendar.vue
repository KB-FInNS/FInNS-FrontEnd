<template>
    <div id="kt_calendar_app"></div>
    
    
</template>

<script setup>
import "@/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css";
import "@/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js"

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { getCurrentInstance, onMounted } from 'vue';


const internalInstance = getCurrentInstance(); 
const emitter = internalInstance.appContext.config.globalProperties.emitter;

let calendar;
let previousDate = null; // 이전에 클릭한 날짜를 저장할 변수

const initializeCalendar = () => {
  const calendarEl = document.getElementById('kt_calendar_app');
  
  calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    locale: "ko",
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'today prev,next'
    },
    eventDidMount: function(info) {
        // 경계선을 없애기
        info.el.style.border = 'none'; // 경계선 제거
    },
    selectable: true,
    select: (info) => {             // 캘린더에서 특정 날짜를 클릭했을 때
      emitter.emit('day_click', info.startStr);

      var events = calendar.getEvents();
      events.forEach(function(event) {
        if (event.startStr === info.startStr) {
          // 이벤트 배경색을 회색으로 변경
          event.setProp('backgroundColor', '#F9F9F9');
        }
      });

      // 이전 날짜의 배경색 초기화
      if (previousDate) {
        const previousDateElement = document.querySelector(`td[data-date="${previousDate}"]`);
        if (previousDateElement) {
            previousDateElement.style.backgroundColor = 'white'; // 흰색으로 초기화
        }
      }
      // 이전 날짜의 이벤트 배경색을 흰색으로 변경
      events.forEach(function(event) {
          if (event.startStr === previousDate) {
              event.setProp('backgroundColor', 'white'); // 흰색으로 초기화
          }
      });

      window.scrollTo({
        top: 800, // 스크롤할 y축 위치
        behavior: 'smooth' // 부드러운 스크롤 효과
      });

      previousDate = info.startStr;
    },
    eventClick: (info) => {         // 캘린더의 특정 이벤트를 클릭했을 때
      emitter.emit('day_click', info.event.startStr);

      const clickedEvent = info.event; // 클릭한 이벤트
      const eventStartDate = clickedEvent.startStr; // 이벤트의 시작 날짜 문자열

      // 이벤트의 시작 날짜 배경색 변경
      const dateElement = document.querySelector(`td[data-date="${eventStartDate}"]`);
      if (dateElement) {
          dateElement.style.backgroundColor = '#F9F9F9'; // 해당 날짜의 배경색
      }
      // 클릭한 이벤트의 배경색 변경
      clickedEvent.setProp('backgroundColor', '#F9F9F9'); // 클릭한 이벤트의 배경색
      
      // 이전 날짜의 배경색 초기화
      if (previousDate) {
        const previousDateElement = document.querySelector(`td[data-date="${previousDate}"]`);
        if (previousDateElement) {
            previousDateElement.style.backgroundColor = 'white'; // 흰색으로 초기화
        }
      }
      // 이전 날짜의 이벤트 배경색 초기화
      var events = calendar.getEvents();
      events.forEach(function(event) {
          if (event.startStr === previousDate) {
              event.setProp('backgroundColor', 'white'); // 흰색으로 초기화
          }
      });

      window.scrollTo({
        top: 800, // 스크롤할 y축 위치
        behavior: 'smooth' // 부드러운 스크롤 효과
      });

      previousDate = eventStartDate;
    },
    events: [
      { title: '50000', start: '2024-09-01' },
      { title: '40000', start: '2024-09-07' },
      { title: '30000', start: '2024-09-11' },
      { title: '20000', start: '2024-09-12' },
      { title: '10000', start: '2024-09-13' },
      { title: '6000', start: '2024-09-14' },
      { title: '7000', start: '2024-09-15' },
      { title: '8000', start: '2024-09-16' },
      { title: '9000', start: '2024-09-17' },
    ],
    // 각 날짜에 '일' 글씨 빼기
    dayCellContent: function (info) {
      var number = document.createElement("a");
      number.classList.add("fc-daygrid-day-number");
      number.innerHTML = info.dayNumberText.replace("일", '').replace("日","");
      if (info.view.type === "dayGridMonth") {
        return {
          html: number.outerHTML
        };
      }
      return {
        domNodes: []
      };
    },
    buttonText: {
      today: '오늘'
    },
    showNonCurrentDates: false,
    fixedWeekCount: false,
    eventBackgroundColor: 'white',
    eventBorderColor: 'white',
    eventTextColor: '#0A6DA6',
    contentHeight: 450,
  });

  const today = new Date();
  emitter.emit('day_click', today.getDate());
  // 데이터 가져와서 각 날짜에 총 소비 금액 초기값 세팅 해줘야함.


  calendar.render();
};

onMounted(() => {
  initializeCalendar();
});

</script>

<style scoped>
</style>