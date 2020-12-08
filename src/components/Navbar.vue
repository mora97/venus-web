<template>
  <div id="navbar">
    <div id="navbar-mobile" @mousedown="getPosition">
      <unicon name="bullet" @click="active = !active" id="icon-bullet"></unicon>
      <div class="row" id="logo_FAQ">
        <logo id="logo" class="mt-3 ml-3"></logo>
        <unicon name="FAQ" id="icon-FAQ" class="ml-1"></unicon>
      </div>
      <div id="cover-over" v-if="active"></div>
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
        <div class="shadow" id="sidebar" v-if="active"></div>
      </transition>

      <transition name="slide">
        <div id="list" v-if="active">
          <logo></logo>
          <hr />
          <div v-for="(folder, index1) in folders" :key="index1">
            <span @click="toggle(folder.name)" style="cursor: pointer;" v-if="active">
              <font v-if="folder.pages.length != 0">+</font>
              <font v-if="folder.pages.length == 0">-</font>
              {{ folder.name }}
            </span>
            <div v-show="false" :id="folder.name">
              <div v-for="(page, index2) in folder.pages" id="list-subitem" :key="index2">
                <span v-if="active">- {{ page.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div id="realtive navbar-desktop">
      <!-- <nav class="navbar navbar-expand-sm">
        <ul class="navbar-nav">
          <div v-for="(folder, index1) in folders" :key="index1">
            <li class="nav-item mr-5" v-if="folder.pages.length == 0">
              <a class="nav-link" href="#">{{ folder.name }}</a>
            </li>
            <div v-if="folder.pages.length != 0">
              <li class="nav-item dropdown mr-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >{{ folder.name }}</a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style="margin-left: -5em"
                >
                  <a
                    class="dropdown-item"
                    href="#"
                    v-for="(page, index2) in folder.pages"
                    :key="index2"
                  >{{ page.name }}</a>
                </div>
              </li>
            </div>
          </div>
        </ul>
        <span id="pappers">
          <small>جدیدترین مقالات</small>
        </span>
      </nav> -->
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";

export default {
  components: {
    Logo
  },
  data() {
    return {
      active: false,
      folders: [
        {
          name: "دسته ۱",
          pages: [
            {
              name: "دسته ۱-۱"
            },
            {
              name: "دسته ۱-۲"
            }
          ]
        },
        {
          name: "دسته ۲",
          pages: []
        },
        {
          name: "دسته ۳",
          pages: [
            {
              name: "دسته ۳-۱"
            },
            {
              name: "دسته ۳-۲"
            },
            {
              name: "دسته ۳-۲"
            }
          ]
        }
      ]
    };
  },
  methods: {
    toggle(idname) {
      if (document.getElementById(idname).style.display == "none") {
        document.getElementById(idname).style.display = "inline";
      } else {
        document.getElementById(idname).style.display = "none";
      }
    },
    getPosition(event) {
      var path = event.path || (event.composedPath && event.composedPath());
      let flag = 0;
      for (let i = 0; i < path.length; i++) {
        if (path[i].id == "sidebar") {
          flag = 1;
          break;
        }
        if (path[i].id == "list") {
          flag = 1;
          break;
        }
      }

      if (flag == 0) {
        this.active = false;
      }
    },
    beforeEnter(el) {
      this.elementWidth = 0;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (el.style.width == "250px") {
          clearInterval(interval);
        }
      }, 15);
      console.log("enter");
    },
    afterEnter(el) {
    },
    enterCancelled(el) {
    },
    beforeLeave(el) {
      this.elementWidth = 250;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (el.style.width == "0px") {
          clearInterval(interval);
        }
      }, 15);
    },
    afterLeave(el) {
    },
    leaveCancelled(el) {
    }
  }
};
</script>

<style scoped>
* {
  font-family: IRANSans;
}
ul {
  position: absolute;
  right: 5em;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 2s ease-out forwards;
  transition: opacity 2s;
}
.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 0.2s;
  opacity: 0;
}
#cover-over {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 500;
}
.navbar {
  /* direction: rtl;
  text-align: right; */
  /* position: fixed; */
  right: 0;
  top: 0;
  width: 100%;
  z-index: 500;
  background: #ffffff;
}
.navbar-nav.navbar-center {
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
}
#navbar-frame {
  height: 3.5em;
  background: var(--background-color);
  border-bottom: 1px solid var(--border-color);
}
#btn-toggle {
  float: right;
}
#icon-bullet {
  position: absolute;
  height: 2em;
  width: 2em;
  top: 0.75em;
  right: 0.75em;
}
font {
  font-size: 1.7em !important;
  margin-top: 2px;
}
span {
  font-size: 1.2em;
}
#navbar-mobile {
  display: none;
}
#navbar-desktop {
  padding: 0 0.5em;
  direction: ltr;
}
@media (max-width: 768px) {
  #navbar-mobile {
    display: block;
    background: var(--background-color);
    border-bottom: 1px solid var(--border-color);
    
  }
  #sidebar {
    top: 0;
    width: 0px;
    height: 100vh;
    background-color: var(--background-color);
    padding: 0 0;
    z-index: 800;
    position: absolute;
    text-align: right;
  }
  #logo_FAQ {
    direction: ltr;
  }
  #icon-FAQ {
    width: 1.8em;
    height: 2em;
    margin-top: 0.75em;
  }
  #navbar-desktop {
    display: none;
  }
  #list {
    position: absolute;
    right: 1.4em;
    top: 2em;
    z-index: 900;
    text-align: right;
  }
  #list-subitem span {
    margin-right: 20px;
  }
}
</style>
