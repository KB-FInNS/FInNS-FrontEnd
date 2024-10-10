<template>
  <link rel="stylesheet" href="/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css">
  
  <div id="kt_calendar_app" class="fc fc-direction-ltr fc-theme-standard"></div>
</template>

<script setup>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRoute } from 'vue-router';
import { getCurrentInstance, onMounted } from 'vue';
import axios from 'axios';

const route = useRoute();
const userNo = route.params.userNo;

const internalInstance = getCurrentInstance(); 
const emitter = internalInstance.appContext.config.globalProperties.emitter;

let calendar;

const addCalendarEvent = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/users/${userNo}/amountByDate`);

    let events = response.data.map(item => ({
      title: `${item.amount.toLocaleString()}원`, // amount 값을 포맷하여 title로 사용
      start: item.transactionDate, // transaction_date를 start로 사용
    }));

    // 이벤트를 캘린더에 추가
    events.forEach(event => calendar.addEvent(event));

  } catch (error) {
    console.error('Error geting posts:', error);
  }
};

const initializeCalendar = () => {
  const calendarEl = document.getElementById('kt_calendar_app');
  
  calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true,
    locale: "ko",
    headerToolbar: {
      left: '',
      center: 'title',
      right: '',
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
        top: 950,
        behavior: 'smooth' // 부드러운 스크롤 효과
      });
    },
    eventClick: (info) => {         
      calendar.select(info.event.startStr);
    },
    events: [
    ],
  });

  addCalendarEvent();
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
