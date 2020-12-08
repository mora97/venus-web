<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import { mapMutations, mapActions } from "vuex";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
    ...mapMutations(["setProfileUserColor", "setProfileSubject"])
  },
  created() {
    console.log("App.vue\n");
    var token_time = localStorage.getItem("authToken_Time");
    console.log(token_time);

    if (token_time != null) {
      console.log("token is not empty");
      this.setProfileSubject("نام کاربری");
      this.setProfileUserColor(true);
    } else {
      this.setProfileSubject("ورود / عضویت");
    }
  }
};
</script>

<style>
body {
  direction: rtl;
  font-family: IRANSans;
}

:root {
  --border-radius: 8px;
  --border-color: #cac7c7;
  --background-color: #f4f4f4;
  --login-fonts-color: #1d37df;
  --font-color: #1d37df;
}

@font-face {
  font-family: "IRANSans";
  src: url("./assets/fonts/IRANSans.ttf");
}
@font-face {
  font-family: "IRANSansBlack";
  src: url("./assets/fonts/IRANSans_Black.ttf");
}
@font-face {
  font-family: "IRANSansBold";
  src: url("./assets/fonts/IRANSans_Bold.ttf");
}
@font-face {
  font-family: "IRANSansLight";
  src: url("./assets/fonts/IRANSans_Light.ttf");
}
@font-face {
  font-family: "IRANSansMedium";
  src: url("./assets/fonts/IRANSans_Medium.ttf");
}
@font-face {
  font-family: "IRANSansUltraLight";
  src: url("./assets/fonts/IRANSans_UltraLight.ttf");
}

.input_place-holder {
  position: relative;
}

.input_place-holder input+span {
  position: absolute;
  right: 2.7em;
  top: 0.75em;
  font-size: 0.9em;
  transition: all 0.2s ease-in;
  color: var(--login-fonts-color);
}
.input_place-holder .place-holder-transition {
  top: -1.3em;
  right: 0.7em;
  font-size: 0.6em;
  transition: all 0.2s ease-out;
}
</style>
