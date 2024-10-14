// import api from 'axios';
import api from '@/api';

const BASE_URL = '/api/member';
const headers = { 'Content-Type': 'multipart/form-data' };

export default {
  // username 중복 체크, true: 중복(사용불가), false: 사용 가능
  async checkUsername(username) {
    try {
      const { data } = await api.get(`${BASE_URL}/checkusername/${username}`);
      console.log('AUTH GET CHECKUSERNAME', data);
      return data;
    } catch (error) {
      console.error('Error checking username:', error.response || error);
      throw error;
    }
  },
  async create(member) {
    // 아바타 파일 업로드 – multipart 인코딩 필요 → FormData 객체 사용
    const formData = new FormData();
    formData.append('username', member.username);
    formData.append('password', member.password);
    formData.append('password2', member.password2);
    formData.append('birth', member.birth);
    formData.append('renew_date', member.renew_date);

    try {
      const { data } = await api.post(BASE_URL, formData, { headers });
      console.log('AUTH POST: ', data);
      return data;
    } catch (error) {
      console.error('Error creating member:', error.response || error);
      throw error;
    }
  },
  async update(member) {
    try {
      const { data } = await api.put(`${BASE_URL}/${member.username}`, member, {
        headers,
      });
      console.log('AUTH PUT: ', data);
      return data;
    } catch (error) {
      console.error('Error updating member:', error.response || error);
      throw error;
    }
  },

  // async changePassword(formData) {
  //   try {
  //     const { data } = await api.put(
  //       `${BASE_URL}/${formData.username}/changepassword`,
  //       formData,
  //       { headers }
  //     );
  //     console.log('AUTH PUT: ', data);
  //     return data;
  //   } catch (error) {
  //     console.error('Error changing password:', error.response || error);
  //     throw error;
  //   }
  // },
};
