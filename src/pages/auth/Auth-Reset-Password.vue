<template>
  <div class="container" id="change-password" @mousedown="getElemetnId" @keyup.tab="getElemetnId">
    <div class="card shadow mt-5">
      <!-- <unicon name="lock"></unicon> -->
      <p class="mr-3 mt-2">بازیابی رمز عبور</p>
      <hr style="width: 100%; margin-top: -0.5em" />
      <div id="input-group" @click="code = 2" @keyup.tab="code = 2">
        <div class="d-flex flex-column">
          <div
            class="input_place-holder row mt-2"
            id="input-new-password"
            @click="$refs.newPassword.focus()"
          >
            <input
              class="form-control mb-2"
              type="password"
              v-model="newPassword"
              ref="newPassword"
            />
            <span :class="{ 'place-holder-transition': activePlaceHolder[1] }">رمز جدید</span>
          </div>
          <div
            class="input_place-holder row mt-2"
            id="input-confirm-new-password"
            @click="$refs.confirmNewPassword.focus()"
          >
            <input
              class="form-control mb-2"
              type="password"
              v-model="confirmNewPassword"
              ref="confirmNewPassword"
            />
            <span :class="{ 'place-holder-transition': activePlaceHolder[2] }">تکرار رمز جدید</span>
          </div>
        </div>
      </div>
      <router-link to="/profile/personal_info" class="ml-1 mb-2 pr-3 pl-3">
        <button type="button" class="btn mt-4" id="btn-enter">رمز جدید</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Validation from "../../mixins/Validations";
import GetId from "../../mixins/GetId";

export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      errorCode: -1 //-1: no error, 0: incorrect olc, 1: new and repear are not the same
    };
  },
  methods: {
    ...mapActions(["asyncAuthChangePassword"])
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
#change-password {
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
  background-image: url("../../assets/images/lock.svg");
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