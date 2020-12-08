<template>
  <div id="auth">
    <div class="container">
      <logo></logo>
      <sign-in v-if="getAuthUrl()"></sign-in>
      <sign-up v-if="!getAuthUrl()"></sign-up>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { mapMutations,mapGetters } from "vuex"

export default {
  components: {
    Logo,
    SignIn,
    SignUp
  },
  data() {
    return {
      isSignedIn: true,
    };
  },
  methods: {
    ...mapMutations(["setAuthUrl"]),
    ...mapGetters(["getAuthUrl"])  
  },
  created() {
    this.setAuthUrl(true)
  },
  updated() {
      
  }
};
</script>

<style scoped>
#auth {
  background: #fafafa;
}
</style>
