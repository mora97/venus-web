<template>
  <div id="product-item">
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="d-flex flex-column">
          <span class="border-bottom mt-2 pb-1">نام کالا: {{ porduct.name }}</span>
          <span class="border-bottom mt-2 pb-1">واحد سنجش: {{ porduct.analyticsUnit }}</span>
          <span class="border-bottom mt-2 pb-1">فی امروز: {{ porduct.cost }}</span>
          <span class="border-bottom mt-2 pb-1">تولید کننده: {{ porduct.producer }}</span>
          <router-link
            to="/check_out"
            tag="button"
            class="btn text-white btn-primary mt-1"
            v-if="porduct.oprationId == 1"
          >ثبت سفارش</router-link>
          <button
            class="btn text-white btn-primary mt-1"
            v-if="porduct.oprationId == 0"
            disabled
          >ثبت سفارش</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    porduct: {
      type: Object,
      default: () => {
        return {
          name: "",
          analyticsUnit: "",
          cost: "",
          producer: "",
          oprationId: 1
        };
      }
    }
  }
};
</script>

<style scoped>
.card {
  border-style: none;
  border-radius: 8px;
}
.card-body {
  padding: 0.5em 20px;
  text-align: right;
}
</style>