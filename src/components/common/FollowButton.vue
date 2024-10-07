<template>
  <div>
    <button @click="followUser(2)">Follow User 2</button>
    <button @click="unfollowUser(2)">Unfollow User 2</button>
    <button @click="fetchFollowingList">Get Following List</button>
    <button @click="fetchFollowerList">Get Follower List</button>
  </div>
</template>

<script>
import followApi from '@/api/followApi';

export default {
  methods: {
    async followUser(to_user_no) {
      try {
        const response = await followApi.follow(to_user_no);
        console.log(response);
      } catch (error) {
        console.error('Error following user:', error);
      }
    },
    async unfollowUser(to_user_no) {
      try {
        const response = await followApi.unfollow(to_user_no);
        console.log(response);
      } catch (error) {
        console.error('Error unfollowing user:', error);
      }
    },
    async fetchFollowingList() {
      try {
        const followingList = await followApi.getFollowingList();
        console.log('Following List:', followingList);
      } catch (error) {
        console.error('Error fetching following list:', error);
      }
    },
    async fetchFollowerList() {
      try {
        const followerList = await followApi.getFollowerList();
        console.log('Follower List:', followerList);
      } catch (error) {
        console.error('Error fetching follower list:', error);
      }
    },
  },
};
</script>
