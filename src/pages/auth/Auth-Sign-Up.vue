<template>
  <div id="sign-up" class="container mt-5" @mousedown="getElemetnId" @keyup.tab="getElemetnId">
    <div class="card shadow">
      <p class="mr-3 mt-2">ثبت نام در وستا پلاست</p>
      <hr style="width: 100%; margin-top: -0.5em" />
      <div class="row mr-3 mb-2">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="real"
            v-model="situation"
            @click="isLegal = false, nameField_1_title = 'نام', nameField_2_title = 'نام خانوادگی'"
          />
          <label class="form-check-label mr-4" for="exampleRadios2">حقیقی</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="Legal"
            v-model="situation"
            @click="isLegal = true, nameField_1_title = 'نام نماینده', nameField_2_title = 'نام شرکت'"
          />
          <label class="form-check-label mr-4" for="exampleRadios1">حقوقی</label>
        </div>
      </div>
      <div id="input-group" @click="code = 1" @keyup.tab="code = 1">
        <div v-if="isLegal">
          <transition name="fade">
            <span
              v-if="errors[0] == 0"
              class="text-danger"
            >- {{ nameField_1_title }} خود را وارد نمایید</span>
            <span v-if="errors[0] == 1" class="text-danger">- {{ nameField_1_title }} اشتباه است</span>
          </transition>
          <div
            class="input_place-holder row mt-2"
            id="input-nameField_1"
            @click="$refs.nameField_1.focus()"
          >
            <input class="form-control mb-2" type="text" v-model="nameField_1" ref="nameField_1" />
            <span :class="{ 'place-holder-transition': activePlaceHolder[0] }">نام شرکت</span>
          </div>
          <transition name="fade">
            <span
              v-if="errors[1] == 0"
              class="text-danger"
            >{{nameField_2_title }} خود را وارد نمایید</span>
            <span v-if="errors[1] == 1" class="text-danger">- {{ nameField_2_title }} اشتباه است</span>
          </transition>
          <div
            class="input_place-holder row mt-2"
            id="input-nameField_2"
            @click="$refs.nameField_2.focus()"
          >
            <input class="form-control mb-2" type="text" v-model="nameField_2" ref="nameField_2" />
            <span :class="{ 'place-holder-transition': activePlaceHolder[1] }">نام نماینده</span>
          </div>
        </div>
        <div v-if="!isLegal">
          <transition name="fade">
            <span
              v-if="errors[0] == 0"
              class="text-danger"
            >- {{ nameField_1_title }} خود را وارد نمایید</span>
            <span v-if="errors[0] == 1" class="text-danger">- {{ nameField_1_title }} اشتباه است</span>
          </transition>
          <div
            class="input_place-holder row mt-2"
            id="input-nameField_1"
            @click="$refs.nameField_1.focus()"
          >
            <input class="form-control mb-2" type="text" v-model="nameField_1" ref="nameField_1" />
            <span :class="{ 'place-holder-transition': activePlaceHolder[0] }">نام</span>
          </div>
          <transition name="fade">
            <span
              v-if="errors[1] == 0"
              class="text-danger"
            >- {{ nameField_2_title }} خود را وارد نمایید</span>
            <span v-if="errors[1] == 1" class="text-danger">- {{ nameField_2_title}} اشتباه است</span>
          </transition>
          <div
            class="input_place-holder row mt-2"
            id="input-nameField_2"
            @click="$refs.nameField_2.focus()"
          >
            <input class="form-control mb-2" type="text" v-model="nameField_2" ref="nameField_2" />
            <span :class="{ 'place-holder-transition': activePlaceHolder[1] }">نام خانوادگی</span>
          </div>
        </div>
        <transition name="fade">
          <span v-if="errors[2] == 0" class="text-danger">- تلفن همراه خود را وارد نمایید</span>
          <span v-if="errors[2] == 1" class="text-danger">- تلفن همراه اشتباه است</span>
        </transition>
        <div
          class="input_place-holder row mt-2"
          id="input-phone-number"
          @click="$refs.phoneNumber.focus()"
        >
          <input class="form-control mb-2" type="text" v-model="phoneNumber" ref="phoneNumber" />
          <span :class="{ 'place-holder-transition': activePlaceHolder[2] }">شماره موبایل</span>
        </div>
        <transition name="fade">
          <span v-if="errors[3] == 0" class="text-danger">- ایمیل خود را وارد نمایید</span>
          <span v-if="errors[3] == 1" class="text-danger">- ایمیل اشتباه است</span>
        </transition>
        <div
          class="input_place-holder row mt-2"
          id="input-email"
          @click="$refs.email.focus()"
        >
          <input class="form-control mb-2" type="text" v-model="email" ref="email" />
          <span :class="{ 'place-holder-transition': activePlaceHolder[3] }">ایمیل</span>
        </div>
        <transition name="fade">
          <span v-if="errors[5] == 0" class="text-danger">- رمز عبور خود را وارد نمایید</span>
          <span v-if="errors[5] == 1" class="text-danger">- رمز عبور اشتباه است</span>
        </transition>
        <div
          class="input_place-holder row mt-2"
          id="input-password"
          @click="$refs.password.focus()"
        >
          <input class="form-control mb-2" type="password" v-model="password" ref="password" />
          <span :class="{ 'place-holder-transition': activePlaceHolder[4] }">رمزعبور</span>
        </div>
      </div>
      <transition name="fade">
        <div v-if="errors.length != 0" class="text-danger mr-2">
          <span v-if="errors[4] == 1">- قوانین مطالعه نشده است</span>
        </div>
      </transition>
      <div class="row mr-2 mb-2">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="defaultUnchecked"
            v-model="accepted"
          />
          <label class="custom-control-label" for="defaultUnchecked" style="text-align:right"></label>
        </div>
        <router-link to="/#">
          <p id="privacy">{{ privacy }}</p>
        </router-link>
        <div id="captcha">
          <transition name="fade">
            <div v-if="status != 'submitting'" class="text-danger">
              <span v-if="errors[4] == 1">- کپچا تیک نخورده است</span>
            </div>
          </transition>
          <vue-recaptcha
            ref="recaptcha"
            @verify="onCaptchaVarified"
            @expired="onCaptchaExpired"
            sitekey="6LdVD7UUAAAAAOdVxdNLwdSxJQt0xJ6WANbuWHeH"
          ></vue-recaptcha>
        </div>
      </div>
      <router-link to="/profile" class="row pl-4 pr-4">
        <button type="button" class="btn mb-2 mt-4" id="btn-register">ثبت نام</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import Validations from "../../mixins/Validations";
import GetId from "../../mixins/GetId";
import { mapMutations, mapActions } from "vuex";
import Logo from "../../components/Logo";

export default {
  components: {
    VueRecaptcha,
    Logo
  },
  data() {
    return {
      accepted: false,
      isLegal: true,
      nameField_1: "",
      nameField_2: "",
      phoneNumber: "",
      email: "",
      password: "",
      privacy:
        "حریم خصوصی و شرایط و قوانین استفاده از سرویس های سایت " +
        "وستا پلاست را مطالعه نموده و با کلیه موارد آن موافقم",
      situation: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      status: "",
      sucessfulServerResponse: "",
      serverError: "",
      nameField_1_title: "نام",
      nameField_2_title: "نام خانوادگی",
    };
  },
  methods: {
    ...mapMutations(["setAuthUrl"]),
    ...mapActions(["asyncAuthSignUp"]),
    submit() {},
    route() {
      this.$router.push({ name: "sign_up" });
    },
    onCaptchaVarified(recaptchaToken) {
      console.log("varified: " + recaptchaToken);
      this.status = "submitting";
    },
    onCaptchaExpired: function() {
      console.log("Expired");
      this.status = "not submitted";
      this.$refs.recaptcha.reset();
    }
  },
  // beforeRouteLeave(to, from, next) {
  //   if (this.next == true && this.status == "submitting") {
  //     var signUpParmas = {
  //       nameField_1: this.nameField_1,
  //       nameField_2: this.nameField_2,
  //       email: this.email,
  //       password: this.password
  //     };

  //     this.asyncAuthSignUp(signUpParmas)
  //       .then(res => {
  //         if (res.status == 200) {
  //           next();
  //         }
  //       })
  //       .catch(err => console.log(err));
  //   }
  //   if (to.path == "/sign_in") {
  //     next();
  //   }
  // },
  created() {
    this.code = 1
  },
  mounted() {
    this.isLegal = false;
    this.situation = "real";
  },
  mixins: [Validations, GetId]
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

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5 s;
}

.fade-leave-active {
  transition: opacity 0s;
  position: absolute;
}

.fade-move {
  transition: transform 0.5s;
}

#sign-up {
  width: 30rem;
}

.card {
  font-family: IRANSans;
  text-align: right;
  background: #f4f4f4;
  margin-bottom: 1em;
}

#pass {
  text-align: left;
}

hr {
  border-color: #cac7c7;
}

#input-group {
  padding: 0 0.5em;
}

button {
  background: #c3d1e3;
  color: var(--login-fonts-color);
  height: 2.3em;
  width: 100%;
  font-size: 1.2em;
}

input {
  color: var(--login-fonts-color);
}

input[type="text"],
[type="password"] {
  border-radius: var(--border-radius);
  height: 2.8em;
  font-size: 0.9em;
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

label {
  color: var(--login-fonts-color);
}

.input_place-holder span {
  right: 1em;
}

#forgotten-pass-underline {
  width: 12.3em;
  margin-top: -0.8em;
  margin-left: 1em;
}

#sign-up-underline {
  width: 9em;
  margin-top: -0.9em;
}

#privacy {
  position: absolute;
  margin-right: 5px;
  line-height: 1.2em;
  font-size: 0.9em;
  padding-left: 0.9em;
}

#captcha {
  margin-top: 5em;
  margin-right: 2em;
  padding-left: 0em;
}

#icon-lock {
  position: absolute;
  width: 1.6em;
  height: 1.6em;
  bottom: 16em;
  left: 1.2em;
}

#icon-profile {
  width: 2em;
  height: 2em;
  margin-top: -2.8em;
  margin-right: 6em;
}

#btn-register {
  background-image: url("../../assets/images/profile.svg");
  background-repeat: no-repeat;
  background-size: 1.7em 1.7em;
  background-position: 75% 0.3em;
}

#input-password input{
  background-image: url("../../assets/images/lock.svg");
  background-repeat: no-repeat;
  background-size: 1.7em 1.7em;
  background-position: 3% 0.5em;
}

@media (max-width: 576px) {
  #captcha {
    margin-right: -1.3em;
  }
  #sign-up {
    width: auto;
  }
  #icon-profile {
    margin-right: 5em;
  }
}
@media (max-width: 320px) {
  #icon-profile {
    margin-right: 2.5em;
  }
}
</style> 
                        