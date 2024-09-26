// src/api/weatherApi.js
import axios from 'axios';

// BASE_URL과 headers 설정
const BASE_URL = '/api/weather';
const headers = { 'Content-Type': 'application/json' };

// 날씨 데이터를 가져오는 함수 정의
export default {
  async fetchWeather(city = 'seoul') {
    try {
      // API 요청 URL에 city를 포함시킴
      const response = await axios.get(`${BASE_URL}/${city}`, { headers });
      return response.data; // API에서 받은 데이터를 반환
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  },
};
