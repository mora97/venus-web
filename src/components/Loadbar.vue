<template>
  <transition name="fade">
    <div id="loadbar" v-if="getActiveLoadbar()">
      <div id="box"></div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    methods: {
        ...mapGetters(['getActiveLoadbar'])
    }
};
</script>

<style scoped>
#loadbar {
  width: 100%;
  height: 0.7em;
  background: rgb(122, 192, 248);
  direction: ltr;
  border-radius: 8px
}

#box {
  width: 1.5em;
  height: 0.4em;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.719),
    rgba(253, 253, 253, 0.692)
  );
  border-radius: 8px;
  -webkit-animation: move-left 2s; /* Safari 4.0 - 8.0 */
  -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
  animation: move-left 2s;
  animation-iteration-count: infinite;
}
@keyframes move-left {
  from {
    transform: translateX(-1em);
  }
  to {
    transform: translateX(100em);
  }
}

.fade-enter {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  /* opacity: 0; */
}

.fade-leave-active {
  opacity: 1;
  transition: opacity 1s;
}
</style>