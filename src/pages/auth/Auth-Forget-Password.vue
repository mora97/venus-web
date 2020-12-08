<template>
  <div class="container" id="forget-password">
    <!-- <div @mousedown="getElemetnId" @keyup.tab="getElemetnId" v-if="!hideReset">
      <div class="card shadow mt-5">
        <p class="mr-3 mt-2">یادآوری رمز عبور</p>
        <hr style="width: 100%; margin-top: -0.5em" />
        <div id="input-group" @click="code = 2" @keyup.tab="code = 2">
          <div
            class="input_place-holder row mt-2"
            id="input-confirm-new-password"
            @click="$refs.emailResetpass.focus()"
          >
            <input
              class="form-control mb-2"
              type="password"
              v-model="emailResetpass"
              ref="emailResetpass"
            />
            <span
              :class="{ 'place-holder-transition': activePlaceHolder[2] }"
            >ایمیل خود را وارد نمایید</span>
          </div>
        </div>
        <router-link to="/profile/personal_info" class="ml-1 mb-2 pr-3 pl-3">
          <button type="button" class="btn mt-4" id="btn-enter" @click="hideReset = true">ارسال</button>
        </router-link>
      </div>
    </div> -->
    <send-reset-pass v-if="!getSentResetPass()"></send-reset-pass>
    <sent-reset-pass v-if="getSentResetPass()"></sent-reset-pass>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Validation from "../../mixins/Validations";
import GetId from "../../mixins/GetId";
import SentResetPass from "../../components/auth-forgetpass/Sent-Reset-Pass";
import SendResetPass from "../../components/auth-forgetpass/Send-Reset-Pass"

export default {
  components: {
    SentResetPass,
    SendResetPass
  },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      errorCode: -1, //-1: no error, 0: incorrect olc, 1: new and repear are not the same,
      hideReset: false
    };
  },
  methods: {
    ...mapGetters(["getSentResetPass"])
  },
  beforeRouteLeave(to, from, next) {
    if (this.newPassword == this.repeatNewPassword) {
      next();
    } else {
      this.errorCode = 1;
    }
  },
  created() {
    this.code = 2;
  },
  mixins: [Validation, GetId]
};
</script>

<style scoped>
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
#forget-password {
  width: 30rem;
}
.card {
  font-family: IRANSans;
  text-align: right;
  background: #f4f4f4;
  margin: 1em auto;
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
  background-image: url("../../assets/images/user.svg");
  background-repeat: no-repeat;
  background-size: 1.7em 1.7em;
  background-position: 98% 0.5em;
}
button {
  background: #c3d1e3;
  height: 2.3em;
  color: var(--login-fonts-color);
  width: 100%;
  font-size: 1.2em;
}
#btn-enter {
  background-image: url("../../assets/images/key.svg");
  background-repeat: no-repeat;
  background-size: 2em 2em;
  background-position: 75% 0.2em;
}
@media (max-width: 768px) {
  #change-password {
    width: auto;
  }
}
</style>