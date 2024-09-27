// import api from 'axios';
import api from '@/api';

const BASE_URL = '/api/member';
const headers = { 'Content-Type': 'multipart/form-data' };
export default {
  // username 중복 체크, true: 중복(사용불가), false: 사용 가능
  async checkUsername(username) {
    const { data } = await api.get(`${BASE_URL}/checkusername/${username}`);
    console.log('AUTH GET CHECKUSERNAME', data);
    return data;
  },
  async create(member) {
    // 아바타 파일 업로드 – multipart 인코딩 필요 → FormData 객체 사용
    const formData = new FormData();
    formData.append('username', member.username);
    formData.append('email', member.email);
    formData.append('password', member.password);
    formData.append('birth', member.birth);

    if (member.avatar) {
      formData.append('avatar', member.avatar);
    }
    const { data } = await api.post(BASE_URL, formData, headers);
    console.log('AUTH POST: ', data);
    return data;
  },
  async update(member) {
    console.log('업데이트 요청 username:', member.username); // username 확인 로그
    const formData = new FormData();
    formData.append('username', member.username);
    formData.append('password', member.password);
    formData.append('email', member.email);
    // birth 형식 변환 확인
    formData.append(
      'birth',
      member.birth instanceof Date
        ? member.birth.toISOString().split('T')[0]
        : member.birth
    );

    if (member.avatar) {
      formData.append('avatar', member.avatar);
    }

    // 올바른 URL과 헤더 전달 확인
    const { data } = await api.put(`${BASE_URL}/${member.username}`, formData, {
      headers,
    });
    console.log('AUTH PUT: ', data);
    return data;
  },
  // async changePassword(formData) {
  //   const { data } = await api.put(
  //     `${BASE_URL}/${formData.username}/changepassword`,
  //     formData
  //   );
  //   console.log('AUTH PUT: ', data);
  //   return data;
  // },
};
