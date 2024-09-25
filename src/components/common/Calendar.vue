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
    selectable: true,
    select: (info) => {             // 캘린더에서 특정 날짜를 클릭했을 때
      emitter.emit('day_click', info.startStr);

      // var events = calendar.getEvents();
      // events.forEach(function(event) {
      //   if (event.startStr === info.startStr) {
      //     // 이벤트 배경색을 회색으로 변경
      //     event.setProp('backgroundColor', 'grey');
      //   }
      // });
    },
    eventClick: () => {         // 캘린더의 특정 이벤트를 클릭했을 때
      emitter.emit('day_click', info.startStr);
      
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