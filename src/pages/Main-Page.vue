<template>
  <div id="main-page">
      <app-header></app-header>
      <router-view style="margin-top: 5em"></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/Header'
import AppFooter from '../components/footer'

export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<style scoped>
#main-page {
    background: #f4f4f4;
}
</style>