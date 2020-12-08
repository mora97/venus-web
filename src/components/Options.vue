<template>
  <div class="row">
    <div class="col d-flex flex-column" v-if="rightSide">
      <img src="../assets/images/consulting.svg" />
      <span class="mt-0">مشاوره رایگان</span>
    </div>
    <div class="col d-flex flex-column" v-if="rightSide">
      <img src="../assets/images/price-tag.svg" alt />
      <span class="mt-0">قیمت مواد به روز اولیه</span>
    </div>
    <div class="col d-flex flex-column" alt v-if="leftSide">
      <img src="../assets/images/low-price.svg" />
      <span class="mt-0">ارزانترین خرید</span>
    </div>
    <div class="col d-flex flex-column" alt v-if="leftSide">
      <img src="../assets/images/deliver-truck.svg" />
      <span class="mt-0">بهترین تجربه در لجستیک</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rightSide: {
      type: Boolean,
      default: true
    },
    leftSide: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.col {
  text-align: center;
}
span {
  font-size: 0.9em;
  margin-top: 0.6em;
  color: #0e0e0e;
}
img {
  width: 3em;
  height: 3em;
  margin: 0 auto
}
@media (max-width: 768px) {
  span {
    font-size: 0.6em;
    margin-top: 0.6em;
    color: #0e0e0e;
  }
}
</style>
