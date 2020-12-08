<template>
  <div id="header">
    <div id="header-mobile">
      <navbar></navbar>
      <searchbar></searchbar>
    </div>
    <div id="header-desktop">
        <searchbar></searchbar>
        <navbar></navbar>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

export default {
  components: {
    Navbar,
    Searchbar
  }
};
</script>

<style scoped>
#header {
  position: fixed;
  width: 100%;
  /* position: sticky; */
  /* position: -webkit-sticky; */
  top: 0rem;
  z-index: 800;
  background: var(--background-color)
}
#header-mobile {
    display: none;
}
@media (max-width: 768px) {
    #header-desktop {
        display: none
    }
    #header-mobile {
        display: block;
    }
}
</style>
