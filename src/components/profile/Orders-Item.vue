<template>
  <div id="orders-item">
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="row border-bottom mt-2">
          <span>شماره سفارش: ۱۳۲۱۲۳۱۲۳۱۲۳</span>
          <div class="vr mr-2"></div>
          <router-link :to="'/profile/orders/' + orderId">
            <span class="mr-2">تحویل شده</span>
            <img src="../../assets/images/arrow-left.svg" alt />
          </router-link>
        </div>
        <div v-for="(option, index) in options" :key="index" class="border-bottom mt-4 pb-2">
          <span>{{ option }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["orderId"],
  data() {
    return {
      options: ["تاریخ", "شماره بارنامه", "مبلغ کل", "وضعیت پرداخت"],
    };
  }
};
</script>

<style scoped>
#orders-item {
  background: var(--background-color);
}
.vr {
  border-left: 2px solid var(--border-color);
  height: 2em;
}
.row {
    height: 2.5em
}
.card {
  border-style: none;
  border-radius: 8px;
}
.card-body {
  padding: 0.5em 20px;
  text-align: right;
}
img {
  position: absolute;
  left: 1.5em;
  top: 1em
}
a {
  text-decoration: none !important;
  color: black
}
</style>