<template>
  <div id="arrow-back">
    <img
      src="../assets/images/arrow-back-img.svg"
      alt
      id="icon-arrow-back"
      class="ml-3"
      @click="$router.go(-1)"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#arrow-back {
  display: none
}
@media (max-width: 768px) {
  #arrow-back {
    display: block;
    position: sticky;
    position: -webkit-sticky;
    top: 7.75em;
    z-index: 500;
    background-color: #f7f4f4;
  }
}
</style>