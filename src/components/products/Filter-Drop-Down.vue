<template>
  <div id="drop-down">
    <div v-for="(title, i) in titles" :key="i" class="mt-1">
      <button class="btn border text-right bg-white" data-toggle="collapse" :data-target="'#inside-items' + i"> + {{ title }}</button>
      <div class="collapse border" :id="'inside-items' + i">
        <check-box-filter></check-box-filter>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBoxFilter from "./Filter-CheckBox";

export default {
  components: {
    CheckBoxFilter
  },
  data() {
      return {
          titles: ['دسته بندی نتایج', 'برند', 'نوع بسته بندی', 'کاربردها', 'صنعت', 'تولید کننده']
      }
  },
};
</script>

<style scoped>
button {
  width: 100%;
}
</style>