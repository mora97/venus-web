<template>
  <div id="sign-in" class="container mt-5" @mousedown="getElemetnId" @keyup.tab="getElemetnId">
    <div class="card shadow">
      <!-- <unicon name="lock"></unicon> -->
      <p class="mr-3 mt-2">ورود به وستا پلاست</p>
      <hr style="width: 100%; margin-top: -0.5em" />
      <div id="input-group" @click="code = 0" @keyup.tab="code = 0">
        <div class="d-flex flex-column mb-3" v-if="errors.length != 0">
          <transition name="fade">
            <span class="text-danger" v-if="errors[0] == 0">- نام کاربری خود را وارد نمایید</span>
            <span class="text-danger" v-if="errors[0] == 1 || notRegister">- نام کاربری اشتباه است</span>
          </transition>
          <transition name="fade">
            <span class="text-danger" v-if="errors[1] == 0">- رمز عبور خود را وارد نمایید</span>
            <span class="text-danger" v-if="errors[1] == 1 || notRegister">- رمز عبور اشتباه است</span>
          </transition>
        </div>
        <div
          class="input_place-holder row mt-2"
          id="input-username"
          @click="$refs.text.focus()"
        >
          <input class="form-control" type="text" v-model="email_phone" ref="text" />
          <span :class="{ 'place-holder-transition': activePlaceHolder[0] }">ایمیل یا شماره موبایل</span>
        </div>
        <div
          class="input_place-holder row mt-3"
          id="input-password"
          @click="$refs.text2.focus()"
        >
          <input class="form-control" type="password" v-model="password" ref="text2" />
          <span :class="{ 'place-holder-transition': activePlaceHolder[1] }">رمزعبور</span>
        </div>
      </div>
      <router-link to="/forget_password" exact>
        <p class="mt-1 ml-3" id="pass">رمز عبور خود را فراموش کرده ام</p>
        <hr id="forgotten-pass-underline" />
      </router-link>
      <vue-recaptcha
        id="captcha"
        ref="recaptcha"
        @verify="onCaptchaVarified"
        @expired="onCaptchaExpired"
        sitekey="6LdVD7UUAAAAAOdVxdNLwdSxJQt0xJ6WANbuWHeH"
        v-if="notRegister"
      ></vue-recaptcha>
      <router-link to="/" class="ml-1 pr-3 pl-3">
        <button
          type="button"
          class="btn mt-4 mb-1"
          @click="checkForm(0), goNext = true"
          id="btn-enter"
        >ورود</button>
      </router-link>
      <hr class="mt-1" />
      <router-link to="/sign_up" class="mt-1" exact>
        <p id="register-link">ثبت نام در وستاپلاست</p>
        <!-- <hr id="sign-up-underline" /> -->
        <img src="../../assets/images/profile.svg" alt id="icon-profile" />
      </router-link>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import Validations from "../../mixins/Validations";
import Test from "../../mixins/GetId";
import { mapMutations, mapActions, mapGetters } from "vuex";
import Logo from "../../components/Logo";

export default {
  components: {
    Logo,
    VueRecaptcha
  },
  data() {
    return {
      email_phone: "",
      password: "",
      countUserAttempt: 0,
      notRegister: false,
      status: "acceppted",
      goNext: false
    };
  },
  methods: {
    ...mapMutations(["setAuthUrl"]),
    ...mapActions(["asyncAuthSignIn"]),
    changeRoute() {
      this.setAuthUrl(false);
      this.$router.push({ name: "sign_up" });
    },
    onCaptchaVarified(recaptchaToken) {
      console.log("varified: " + recaptchaToken);
      status = "acceppted";
    },
    onCaptchaExpired: function() {
      console.log("Expired");

      this.$refs.recaptcha.reset();
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/") {
      if (this.next == true && this.status == "acceppted" && this.goNext) {
        var signIn = {
          email: this.email_phone,
          password: this.password
        };

        this.asyncAuthSignIn(signIn)
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              next();
            }
            if (res.status == 401) {
              this.status = "notAcceppted";
              notRegister = true;
            }
          })
          .catch(err => console.log(err));
      }
    } else if (to.path == "/sign_up" || to.path == "/forget_password") {
      next();
    }
  },
  created() {
    this.code = 0
  },
  mixins: [Validations, Test]
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-move {
  position: absolute;
}
::placeholder {
  color: var(--login-fonts-color);
  font-family: IRANSans;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--login-fonts-color);
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--login-fonts-color);
}
#sign-in {
  width: 30rem;
}
.card {
  font-family: IRANSans;
  text-align: right;
  background: #f4f4f4;
}
#pass {
  text-align: left;
}
hr {
  border-color: #cac7c7;
}

#input-group {
  padding: 0 0.9em;
}
input {
  padding-right: 2.5em;
  border-radius: 8px;
  height: 2.8em;
  font-size: 0.9em;
  position: relative;
}
button {
  background: #c3d1e3;
  height: 2.3em;
  color: var(--login-fonts-color);
  width: 100%;
  font-size: 1.2em;
}
p {
  color: var(--login-fonts-color);
}
a {
  text-decoration: none !important;
}
router-link a {
  text-decoration: none !important;
}
#forgotten-pass-underline {
  width: 12.3em;
  margin-top: -0.8em;
  margin-left: 1em;
  float: left;
}
#sign-up-underline {
  width: 9em;
  margin-top: -0.9em;
  float: left;
}
#register-link {
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
  width: 9.5em;
  padding-right: 2px;
  margin: 0 auto;
}
img {
  width: 1.6em;
  height: 1.6em;
  margin-top: -2em;
  margin-right: 0.3em;
}
#icon-user {
  padding-bottom: 4px;
}
#icon-entry {
  width: 2em;
  height: 2em;
  margin-top: -4.2em;
  margin-right: 8em;
}
#icon-profile {
  width: 2em;
  height: 2em;
  margin-top: -3.2em;
  margin-right: 6em;
}
#btn-enter {
  background-image: url("../../assets/images/log-in.svg");
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  background-position: 70% 0.5em;
}
#input-username input {
  background-image: url("../../assets/images/user.svg");
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  background-position: 98% 0.5em;
}
#input-password input {
  background-image: url("../../assets/images/lock.svg");
  background-repeat: no-repeat;
  background-size: 1.7em 1.7em;
  background-position: 98% 0.5em;
}
#captcha {
  margin: auto auto;
  padding-left: 0em;
}
@media (max-width: 576px) {
  #sign-in {
    width: auto;
  }
  #icon-entry {
    margin-right: 4.5em;
  }
  #icon-profile {
    margin-right: 3em;
  }
}
@media (max-width: 320px) {
  #icon-profile {
    margin-right: 1em;
  }
}
</style>
