<template>
  <div id="dropdown">
    <unicon name="left-arrow" id="arrow"></unicon>
    <div class="border" id="dropdown-frame">
      <div id="header-color"></div>
      <router-link to="/profile/personal_info">
        <div class="row border-bottom pb-1 mt-2">
          <unicon name="user" class="icon"></unicon>
          <span>پروفایل</span>
        </div>
      </router-link>
      <router-link to="/profile/orders">
        <div class="row border-bottom mt-2 pb-1">
          <img src="../../assets/images/cargo.svg" alt class="icon" />
          <span>سفارش های من</span>
        </div>
      </router-link>
      <router-link to="/profile/products">
        <div class="row border-bottom mt-2 pb-1">
          <img src="../../assets/images/cargo.svg" alt class="icon" />
          <span>کالاهای من</span>
        </div>
      </router-link>
      <div class="row mt-2" @click="logout()">
        <img src="../../assets/images/logout.svg" alt class="icon" />
        <span>خروج</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setProfileSubject']),
    logout() {
      localStorage.removeItem('authToken_Time');
      this.setProfileSubject('ورود / عضویت')
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
* {
  font-family: IRANSans;
  font-size: 1em;
}
#dropdown {
  z-index: 900;
}
#header-color {
  height: 0.75em;
  background: #9cebaf;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
#dropdown-frame {
  width: 9em;
  margin-top: 1em;
  border-radius: 8px;
  background: white;
  /* height: 8em */
}
#arrow {
  position: absolute;
  transform: rotate(90deg);
  right: 5em;
  top: 0em;
}
.icon {
  width: 1.5em;
  height: 1.5em;
  padding-right: 0.3em;
}
span {
  margin-right: 0.5em;
}
a {
  text-decoration: none !important;
  color: black;
}
</style>