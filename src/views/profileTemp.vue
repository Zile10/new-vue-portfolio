<template>
    <div class="container">
      <div class="profile d-flex flex-column">
        <div class="profile-banner" :class="{'adjust-banner': adjustBanner}" :style="{'background-image': 'url(' + user.bannerURL + ')'}">
        </div>
        <img class="profile-img" :src="user.profileURL" alt="">
        <div class="profile-info text-start p-5">
          <h2 class="m-0">{{ user.username }}</h2>
          <h5 class="m-0">{{ user.firstName + ' ' + user.lastName}}</h5>
          <p>{{ user.description ? user.description : "'Nothing to see here...'" }}</p>
          <p>Age {{ age }}</p>
          <p>Joined on {{ JSON.stringify(user.joinDate).slice(1, 11) }}</p>
        </div>
      </div>
  
      <div class="posts">
        <h2>Posts</h2>
      </div>
    </div>
  </template>
  <script>
  export default {
    computed: {
      user(){
        return this.$store.state.user
      },
      age(){
        let now = new Date()
        let dob = {}
        dob.year = new Number(JSON.stringify(this.user.DOB).slice(1, 5))
        dob.month = new Number(JSON.stringify(this.user.DOB).slice(6, 8))
  
        return Math.floor((now.getFullYear() + now.getMonth()/12) - (dob.year + dob.month/12))
      },
      adjustBanner(){
        if (this.user.bannerURL == 'https://i.postimg.cc/Hk7TQLGB/placeholder-image-better-removebg-preview.png') {
          return true
        } else return false
      }
    }
  }
  </script>
  <style scoped>
    .container {
      width: 80%;
      display: grid;
      grid-template-columns: 7fr 4fr;
      gap: 10px;
    }
    .profile {
      width: 100%;
      margin: auto;
    }
    .profile-banner {
      height: 200px;
      overflow: hidden;
      background-color: #fff;
      background-size: cover;
      background-position: 0 55%;
      border-radius: 16px 16px 0 0;
    }
    .adjust-banner {
      background-size: 80%;
      background-position: 150px -135px;
    }
    .profile-img {
      border-radius: 100%;
      z-index: 2;
      width: 120px;
      position: relative;
      left: 20px;
      top: -80px;
    }
    .profile-info {
      height: 300px;
      position: relative;
      top: -120px;
      color: black;
      border-radius: 0 0 16px 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
      background: rgba(255, 255, 255, 0.35);
      backdrop-filter: blur(6px);
    }
    .profile-info p {
      font-style: italic;
    }
  
    .posts {
      width: 100%;
      height: 81%;
      position: relative;
      /* top: -120px; */
      color: black;
      background: rgba(255, 255, 255, 0.35);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(6px);
  
    }
  </style>