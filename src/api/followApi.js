import api from '@/api'; // 인터셉터가 적용된 axios 인스턴스

const BASE_URL = 'http://localhost:8080';

// 토큰에서 user_no 추출
function getUserNoFromToken() {
  const auth = localStorage.getItem('auth'); // 토큰이 저장된 위치
  const parsedAuth = JSON.parse(auth);
  const user_no = parsedAuth.user.user_no;
  console.log(user_no);

  return user_no;
}

export default {
  async follow(to_user_no, isFollowing) {
    console.log(isFollowing);
    const user_no = getUserNoFromToken(); // 토큰에서 user_no 추출
    const followDTO = { user_no, to_user_no }; // followDTO 정의

    try {
      if (isFollowing) {
        const { data } = await api.delete(`${BASE_URL}/unfollow`, {
          data: followDTO,
        });
        console.log('Unfollowed successfully:', data);
        return data;
      } else {
        const { data } = await api.post(`${BASE_URL}/follow`, followDTO);
        console.log('Followed successfully:', data);
        return data;
      }
    } catch (error) {
      console.error('Error in follow/unfollow:', error.response || error);
      throw error;
    }
  },
  async getFollowingList() {
    const user_no = getUserNoFromToken();
    try {
      const { data } = await api.get(`${BASE_URL}/follow/following/${user_no}`);
      console.log('Following List:', data);
      return data;
    } catch (error) {
      console.error('Error fetching following list:', error.response || error);
      throw error;
    }
  },

  async getFollowerList() {
    const user_no = getUserNoFromToken();
    try {
      const { data } = await api.get(`${BASE_URL}/follow/followers/${user_no}`);
      console.log('Follower List:', data);
      return data;
    } catch (error) {
      console.error('Error fetching follower list:', error.response || error);
      throw error;
    }
  },
};
