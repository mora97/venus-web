<template>
  <div id="advance-search">
    <!-- <div id="btn-close">
      <unicon name="times" class="float-right mt-1 mr-1" @click="$router.go(-1)"></unicon>
    </div> -->
    <hr>
    <div id="delete-filters" class="text-center mt-3">
      <button class="btn border btn-danger">پاک کردن فیلترها</button>
    </div>
    <div id="filter-toggle" class="mt-3">
      <filter-toggleable title="فقط کالاهای موجود"></filter-toggleable>
      <filter-toggleable title="فقط کالاهای آماده ارسال"></filter-toggleable>
    </div>
    <filter-search class="mt-3"></filter-search>
    <filter-drop-down class="mt-3 mb-3"></filter-drop-down>
    <div class="text-center mb-3 mt-2" id="btn-do-filter">
      <button class="btn" >اعمال فیلتر</button>
    </div>
  </div>
</template>

<script>
import FilterToggleable from "../../components/products/Filter-Toggleable";
import FilterSearch from "../../components/products/Filter-Search";
import FilterDropDown from "../../components/products/Filter-Drop-Down";

export default {
  components: {
    FilterToggleable,
    FilterSearch,
    FilterDropDown
  }
};
</script>

<style scoped>
#advance-search {
  padding: 0em 0.5em;
}
#btn-close {
  height: 1em;
}
#btn-do-filter {
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  height: 3em;
  z-index: 500;
  background-color: var(--background-color)
}
#btn-do-filter button{
  background-color: #78e591;
  color: white;
  width: 15em;
  margin-top: 0.25em;
}
</style>