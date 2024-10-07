import api from '@/api'; // 인터셉터가 적용된 axios 인스턴스

const BASE_URL = '/api/follow';

// 토큰에서 user_no 추출
function getUserNoFromToken() {
  const auth = localStorage.getItem('auth'); // 토큰이 저장된 위치
  if (auth) {
    // 토큰을 디코드하고 user_no 추출 (예: JWT의 경우 Base64 디코딩)
    const payload = JSON.parse(atob(auth.split('.')[1]));
    return payload.user_no;
  }
  return null;
}

export default {
  // 팔로우
  async insertFollow(to_user_no) {
    const user_no = getUserNoFromToken(); // 토큰에서 user_no 추출
    const followDTO = { user_no, to_user_no };
    try {
      const { data } = await api.post(`${BASE_URL}`, followDTO);
      console.log('Followed successfully:', data);
      return data;
    } catch (error) {
      console.error('Error following user:', error.response || error);
      throw error;
    }
  },

  // 언팔로우
  async unfollow(to_user_no) {
    const user_no = getUserNoFromToken(); // 토큰에서 user_no 추출
    const followDTO = { user_no, to_user_no };

    try {
      const { data } = await api.delete(`${BASE_URL}`, { data: followDTO });
      console.log('Unfollowed successfully:', data);
      return data;
    } catch (error) {
      console.error('Error unfollowing user:', error.response || error);
      throw error;
    }
  },

  // 팔로잉 목록 조회
  async getFollowingList() {
    const user_no = getUserNoFromToken(); // 토큰에서 user_no 추출

    try {
      const { data } = await api.get(`${BASE_URL}/following/${user_no}`);
      console.log('Following List:', data);
      return data;
    } catch (error) {
      console.error('Error fetching following list:', error.response || error);
      throw error;
    }
  },

  // 팔로워 목록 조회
  async getFollowerList() {
    const user_no = getUserNoFromToken(); // 토큰에서 user_no 추출

    try {
      const { data } = await api.get(`${BASE_URL}/followers/${user_no}`);
      console.log('Follower List:', data);
      return data;
    } catch (error) {
      console.error('Error fetching follower list:', error.response || error);
      throw error;
    }
  },
};
