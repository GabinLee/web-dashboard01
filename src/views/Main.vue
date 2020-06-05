<template>
  <div class="dashboard">
    <header>
      <p class="b-head">Dashboard</p>
      <div class="info-bx">
        <button class="alarm-btn" v-ripple>
          <v-icon>mdi-email</v-icon>
        </button>
        <button class="message-btn" v-ripple>
          <v-icon>mdi-bell</v-icon>
        </button>
        <router-link to="" class="profile-bx">
          <p class="fs16">Admin</p>
          <img src="../assets/profile.jpg" alt="">
        </router-link>
      </div>
    </header>
    

    <main>
      <nav>
        <router-link to="/" v-ripple @click.native="clickedNav(1)" :class="{ checked : selectedIndex == 1 ? true : false }">
          <v-icon>mdi-home</v-icon>
          <p class="b-title">home</p>
        </router-link>

        <router-link to="/components" v-ripple @click.native="clickedNav(2)" :class="{ checked : selectedIndex == 2 ? true : false }">
          <v-icon>mdi-folder-multiple</v-icon>
          <p class="b-title">components</p>
        </router-link>

        <!-- <router-link to="/setting" v-ripple @click.native="clickedNav(3)" :class="{ checked : selectedIndex == 3 ? true : false }">
          <v-icon>mdi-cog</v-icon>
          <p class="b-title">setting</p>
        </router-link> -->
      </nav>

      <div class="main-contents">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedIndex: 1,
  }),
  methods: {
    clickedNav(index) {
      this.selectedIndex = index;
    }
  }
}
</script>


<style lang="scss" scoped>
.dashboard{
  background-color: #669df6;
  min-width: 1280px;
  max-width: 1600px;
  height: 100vh;
}

/* header */
  header{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .b-head{
      width: 240px;
      height: 100%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .info-bx{
      height: 40px;
      color: #fff;
      display: flex;
      .v-icon{
        color: #fff;
      }
    }
    
    .alarm-btn{
      width: 40px;
      margin: 0 5px;
      border-radius: 50%;
      position: relative;
      transition: all .25s;
    }
    .message-btn{
      width: 40px;
      margin: 0 5px;
      border-radius: 50%;
      position: relative;
      transition: all .25s;
    }
    .alarm-btn:after{
      content: "N";
      width: 16px;
      height: 16px;
      font-size: 12px;
      border-radius: 4px;
      background-color: #EC5246;
      position: absolute;
      top: 0;
      right: 0;
    }
    .message-btn:after{
      content: "N";
      width: 16px;
      height: 16px;
      font-size: 12px;
      border-radius: 4px;
      background-color: #EC5246;
      position: absolute;
      top: 0;
      right: 0;
    }
    .alarm-btn:hover, .message-btn:hover{
      background-color: #4285F4;
    }
    .profile-bx{
      margin: 0 15px 0 5px;
      display: flex;
      align-items: center;
      p{ padding: 0 5px; transition: all .25s; }
      img{
        width: 36px;
        border-radius: 50%;
      }
    }
    .profile-bx:hover p{
      text-decoration: underline;
    }
  }



/* main */
  main{
    height: calc(100vh - 60px);
    display: flex;
  }

  nav{
    width: 240px;
    padding: 20px 0 0 10px;
    a{
      height: 56px;
      margin-bottom: 10px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      padding: 0 0 0 10px;
      color: #fff;
      display: flex;
      align-items: center;
      transition: .2s;
    }
    a:hover{ background-color: #4285F4; }
    .v-icon{
      font-size: 20px;
      color: #fff;
      margin-right: 12px;
    }
    p{ color: #fff; }
    .checked, .checked:hover{
      background-color: #fff;
      .v-icon{ color: #555; }
      p{ color: #555; }
    }
  }

  .main-contents{
    background-color: #fff;
    width: calc(100% - 240px);
    margin: 0 10px 10px 0;
    border-radius: 6px;
    overflow: auto;
  }
  .main-contents > div{
    padding: 15px;
    overflow: auto;
  }


  @media ( max-width: 1280px) {
    .main-contents{
      margin: 0 10px 27px 0;
    }
    
  }
</style>