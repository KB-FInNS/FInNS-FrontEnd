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

  const todayDate = new Date().toISOString().slice(0, 10);
  emitter.emit('day_click', todayDate);
  
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
    height: '500px',
    eventDidMount: function(info) {
      info.el.style.display = 'flex';
      info.el.style.alignItems = 'center';
      info.el.style.justifyContent = 'center';
      info.el.style.backgroundColor = 'transparent'; // 배경색 제거
      info.el.style.border = 'none'; // 경계선 제거
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
      { title: '50000', start: '2024-09-01' },
      { title: '40000', start: '2024-09-07' },
      { title: '30000', start: '2024-09-11' },
      { title: '20000', start: '2024-09-12' },
      { title: '10000', start: '2024-09-13' },
      { title: '6000', start: '2024-09-14' },
      { title: '7000', start: '2024-09-15' },
      { title: '8000', start: '2024-09-16' },
      { title: '9000', start: '2024-09-17' },
      { title: '9000', start: '2024-09-27' },
    ],
  });

  calendar.render();
};

onMounted(() => {
  initializeCalendar();
});

</script>

<style scoped>

</style>
