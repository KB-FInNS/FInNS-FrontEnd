<template>
  <div class="m-10">
    <div id="kt_calendar_app" class="fc fc-direction-ltr fc-theme-standard"></div>
  </div>
  
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

const initializeCalendar = () => {
  const calendarEl = document.getElementById('kt_calendar_app');
  
  calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true,
    locale: "ko",
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'today prev,next',
    },
    showNonCurrentDates: false,
    fixedWeekCount: false,
    eventTextColor: '#0A6DA6',
    height: '410px',
    eventDidMount: function(info) {
      info.el.style.display = 'flex';
      info.el.style.alignItems = 'center';
      info.el.style.justifyContent = 'center';
      info.el.style.backgroundColor = 'transparent'; // 배경색 제거
      info.el.style.border = 'none'; // 경계선 제거
      info.el.style.fontSize = '16px'; // 원하는 글자 크기로 설정
    },
    dayCellContent: function (info) {
      var number = document.createElement("a");
      number.classList.add("fc-daygrid-day-number");
      number.innerHTML = info.dayNumberText.replace("일", '').replace("日", "");
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
    select: (info) => {
      emitter.emit('day_click', info.startStr);

      window.scrollTo({
        top: 800, // 스크롤할 y축 위치
        behavior: 'smooth' // 부드러운 스크롤 효과
      });
    },
    eventClick: (info) => {         
      calendar.select(info.event.startStr);
    },
    events: [
      { title: (-50000).toLocaleString() + '원', start: '2024-09-01' },
      { title: (-9020).toLocaleString() + '원', start: '2024-09-02' },
      { title: (-4500).toLocaleString() + '원', start: '2024-09-03' },
      { title: (-56700).toLocaleString() + '원', start: '2024-09-04' },
      { title: (-900).toLocaleString() + '원', start: '2024-09-05' },
      { title: (-68000).toLocaleString() + '원', start: '2024-09-07' },
      { title: (-190000).toLocaleString() + '원', start: '2024-09-08' },
      { title: (-2400).toLocaleString() + '원', start: '2024-09-09' },
      { title: (-33000).toLocaleString() + '원', start: '2024-09-11' },
      { title: (-12000).toLocaleString() + '원', start: '2024-09-12' },
      { title: (-17500).toLocaleString() + '원', start: '2024-09-13' },
      { title: (-9900).toLocaleString() + '원', start: '2024-09-14' },
      { title: (-7900).toLocaleString() + '원', start: '2024-09-16' },
      { title: (-21000).toLocaleString() + '원', start: '2024-09-17' },
      { title: (-1600).toLocaleString() + '원', start: '2024-09-19' },
    ],
  });

  calendar.render();
  // 캘린더가 펼쳐지면 디폴트로 오늘 날짜를 emit
  emitter.emit('day_click', new Date().toISOString().slice(0, 10));
};

onMounted(() => {
  initializeCalendar();
});

</script>

<style scoped>

</style>
