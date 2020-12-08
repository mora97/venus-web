<template>
  <div id="main">
    <go-back></go-back>
    <router-view></router-view>
  </div>
</template>

<script>
import GoBack from "../../components/GoBack";

export default {
  components: {
    GoBack
  }
};
</script>

<style scoped> 
#go-back {
  display: none
}
@media (max-width: 768px) {
  #go-back {
    display: block
  }
}
</style>