<template>
  <div>
    <div class="card">
      <div class="card-img-top">
        <img src="../assets/images/polymer.jpg" alt />
      </div>
      <div class="card-body d-flex flex-column">
        <span class="mb-1">نام کالا</span>
        <span class="mb-1">نوع بسته بندی</span>
        <span>قیمت</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
    width: 8em;
    height: 8em;
    border-radius: 5px;
    /* margin-right: -1em !important; */
}
.card {
  width: 11em;
  height: 14.4em;
  padding: 0.5em 1.5em;
  /* padding-left: 0.5em; */
}
span {
    text-align: center;
    font-size: 0.7em;
}
</style>
