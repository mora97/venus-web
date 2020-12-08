<template>
  <div id="searchbar">
    <div>
      <div id="input-search-mobile">
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <vs-input
            style="right: 0.8em; top: 0.8em; width: 50%; z-index: 500"
            icon-after="true"
            icon="search"
            v-model="search"
            @focus="activeInput = !activeInput, disp='none'"
            @mouseout="activeInput = !activeInput, disp='flex'"
            v-if="activeInput"
          />
        </transition>
      </div>
      <div id="input-search-desktop">
        <vs-input
          icon="search"
          style="text-align: right; width: 80%"
          v-model="search"
          placeholder="جست و جو کنید..."
        />
      </div>
      <div id="basket_user-side" class="row ml-0 mt-1" :style="{display: disp}">
        <router-link to="/check_out">
          <div id="badge" @click="setCheckOutAddress('/check_out/sending')">
            <span>{{ badge1 }}</span>
            <img src="../assets/images/cart-industry.svg" alt class="ml-4 mt-4" />
          </div>
        </router-link>
        <router-link to="/profile" exact>
          <unicon name="user" id="icon-user" @click="goToAuth()" :class="{'icon-user-bottom-color': getProfileUserColor()}"></unicon>
        </router-link>
        <div id="text-user" @click="active = !active, goToAuth()" @mouseleave="active = false">
          <div id="prof">
            <span class="mr-2">{{ getProfileSubject() }}</span>
            <unicon name="left-arrow" id="icon-arrow" v-if="getProfileSubject() != 'ورود / عضویت'"></unicon>
          </div>
          <dropdown
            style="position: absolute; margin-top: -0.5em; margin-right: -0.25em"
            v-if="active && getProfileSubject() != 'ورود / عضویت'"
          ></dropdown>
        </div>
      </div>
      <logo id="logo"></logo>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";
import dropdown from "./profile/Dropdown-Menu";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    Logo,
    dropdown
  },
  data() {
    return {
      search: "",
      badge1: "۲",
      active: false,
      elementWidth: 50,
      activeInput: true,
      clienWidth: "",
      disp: "",
      userColor: false
    };
  },
  methods: {
    ...mapMutations(["setCheckOutAddress"]),
    ...mapGetters(["getProfileSubject", "getProfileUserColor"]),
    goToAuth() {
      if (this.getProfileSubject() == "ورود / عضویت") {
        this.$router.push("/sign_in");
      }
    },
    created() {
      
    },
    beforeEnter(el) {
      // console.log("before enter");
      this.elementWidth = 90;
      el.style.width = this.elementWidth + "%";
    },
    enter(el, done) {
      // console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "%";
        round++;
        if (el.style.width == "50%") {
          clearInterval(interval);
          // done();
        }
      }, 15);
      console.log("enter");
    },
    afterEnter(el) {
      // console.log("after enter");
    },
    enterCancelled(el) {
      // console.log("enter cancelled");
    },
    beforeLeave(el) {
      // console.log("beforeLeave");
      this.elementWidth = 50;
      el.style.width = this.elementWidth + "%";
    },
    leave(el, done) {
      // console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "%";
        round++;
        if (el.style.width == "90%") {
          clearInterval(interval);
        }
      }, 15);
    },
    afterLeave(el) {
      // console.log("after leave");
    },
    leaveCancelled(el) {
      // console.log("leave cancelled");
    }
  }
};
</script>

<style scoped>
* {
  font-family: IRANSans;
}
#logo {
  position: absolute;
  left: 2em;
  top: 1em;
}
#searchbar {
  height: 4.2em;
  background: var(--background-color);
}
#badge {
  margin-top: -1.5em;
}
#badge span {
  color: rgb(30, 192, 130);
  font-size: 1.5em;
  font-weight: 800;
  border-radius: 50%;
  padding: 0px 0px;
  position: relative;
  margin-left: -0.5em;
}
#badge img {
  width: 1.6em;
}
#input-search-mobile,
#icon-user {
  display: none;
}
#input-search-desktop {
  padding: 0.8em 0;
  padding-left: 30%;
  margin-right: 15em;
}
#text-user {
  cursor: pointer;
}
#text-user #icon-arrow {
  transform: rotate(-90deg);
}
a {
  text-decoration: none;
}
@media (min-width: 769px) {
  #basket_user-side {
    position: absolute;
    top: 1.2em;
    right: 1.5em;
  }
}
@media (max-width: 768px) {
  #searchbar {
    border-bottom: 1px solid var(--border-color);
  }
  #basket_user-side {
    position: absolute;
    top: 4.8em;
    left: 1.1em;
  }
  #badge img {
    width: 1.6em;
  }
  #input-search-mobile,
  #icon-user {
    display: block;
  }
  #logo,
  #input-search-desktop,
  #text-user {
    display: none;
  }
  #icon-user,
  #badge img {
    height: 2em;
    width: 1.8em;
  }
  #icon-user {
    border-bottom: 1px solid;
    border-bottom-color: red
  }
  .icon-user-bottom-color {
    border-bottom-color: green !important
  }
}
</style>
