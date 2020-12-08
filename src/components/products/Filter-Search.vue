<template>
  <div id="filter-search">
    <vs-input style="text-align: right; width: 100%; z-index: 100" icon="search" placeholder="جست و جو کنید..." v-model="search"/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    }
};
</script>

<style scoped>
</style>