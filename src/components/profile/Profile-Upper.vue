<template>
  <div id="profile-upper">
    <div id="main-frame">
      <div class="card text-center shadow-sm">
        <div id="avatar">
          <img :src="getProfileAvatar()" alt class="rounded-circle" />
          <hr />
        </div>
        <span>نام کابر</span>
        <hr id="underline-user" />
        <div id="btn-group-mobile">
          <div class="row d-flex justify-content-around">
            <router-link to="/change_password">
              <button class="btn shadow-sm mb-2" id="btn-password">نغییر رمزعبور</button>
            </router-link>
            <button class="btn shadow-sm mb-2" id="btn-logout" @click="logout()">خروج از حساب</button>
          </div>
        </div>
        <div id="btn-group-desktop">
          <div class="row">
            <div class="col">
              <router-link to="/change_password">
                <button class="shadow-sm fill" id="btn-password">تغییر رمزعبور</button>
              </router-link>
            </div>
            <div class="col">
              <button class="shadow-sm" id="btn-logout" @click="logout()">خروج از حساب</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapGetters(["getProfileAvatar"]),
    ...mapMutations(["setProfileSubject", "setProfileUserColor"]),
    logout() {
      localStorage.removeItem('authToken_Time');
      this.setProfileSubject('ورود / عضویت');
      this.setProfileUserColor(false)
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
* {
  font-family: IRANSans;
}
.card {
  border-radius: 8px;
}
img {
  width: 8em;
  height: 8em;
  overflow: hidden;
  z-index: 100;
  margin: 0.5 10em;
  position: relative;
}
#avatar {
  padding: 1em 0;
}
.col {
  padding: 0 0;
}
#avatar hr {
  position: absolute;
  top: 4em;
  width: 100%;
}
#btn-group-desktop button {
  width: 100%;
  height: 3em;
  background-color: #f3fff3;
  border-style: none;
  margin-top: 1em;
}
#btn-logout {
  border-bottom-left-radius: 8px;
  border-right: 1px solid var(--borer-color);
}
#btn-password {
  border-bottom-right-radius: 8px;
}
a {
  text-decoration: none;
  color: black;
}
#btn-group-mobile {
  display: none;
}
#underline-user {
  display: none;
}
@media (max-width: 768px) {
  #btn-group-desktop {
    display: none;
  }
  #btn-group-mobile {
    display: block;
  }
  button {
    margin-top: -1em;
    font-size: 0.8em;
    height: 2.5em;
    width: 11em;
    padding-right: 2em;
    border-radius: 8px;
    background-color: #f3fff3;
  }
  #btn-logout {
    background-image: url("../../assets/images/logout.svg");
    background-repeat: no-repeat;
    background-position: 8.5em 0.3em;
  }
  #btn-password {
    background-image: url("../../assets/images/locked.svg");
    background-repeat: no-repeat;
    background-position: 8.5em 0.3em;
  }
  #btn-group {
    padding: 0.75em 0;
  }
  #underline-user {
    display: block;
  }
}
</style>