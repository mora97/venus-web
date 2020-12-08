<template>
  <div id="home">
    <!-- <header-mobile></header-mobile> -->
    <div id="app-body">
      <app-body></app-body>
    </div>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
import HeaderMobile from "../components/Header";
import AppFooter from "../components/Footer";
import AppBody from "../components/Body";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    HeaderMobile,
    AppFooter,
    AppBody
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['setProfileSubject', 'setProfileUserColor'])
  },
  created() {
    var token_time = localStorage.getItem("authToken_Time");
    console.log(token_time);

    if (token_time != null) {
      console.log("token is not empty");
      this.setProfileSubject("نام کاربری");
      this.setProfileUserColor(true)
    } else {
      this.setProfileSubject("ورود / عضویت");
    }
  }
};
</script>

<style scoped>
#app-body {
  font-family: IRANSans;
}
@media (max-width: 576px) {
  #app-body {
    overflow: auto;
    font-family: IRANSans;
  }
}
</style>
