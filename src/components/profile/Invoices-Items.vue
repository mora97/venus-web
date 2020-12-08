<template>
  <div id="invoices-item">
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="row border-bottom mt-2">
          <span class="border-left pl-2">شماره پیش فاکتور: {{ invoice.number}}</span>
          <div class="vr mr-2"></div>
          <router-link :to="'/profile/orders/' + 1">
            <span>جزيیات</span>
            <img src="../../assets/images/arrow-left.svg" alt />
          </router-link>
        </div>
        <div class="d-flex flex-column">
          <span class="border-bottom mt-2 pb-1">تاریخ ثبت: {{ invoice.registerDate }}</span>
          <span class="border-bottom mt-2 pb-1">تاریخ اعتبار: {{ invoice.expireDate }}</span>
          <span class="border-bottom mt-2 pb-1">مبلغ: {{ invoice.cost }}</span>
          <span class="border-bottom mt-2 pb-1">تخفیف: {{ invoice.off }}</span>
          <span v-if="invoice.stateId == 1" class="border-bottom mt-2 pb-1">
            <font color="#19d144">درحال بررسی</font>
          </span>
          <span v-if="invoice.stateId == 0" class="border-bottom mt-2 pb-1">
            <font color="red">منقضی</font>
          </span>
          <router-link
            to="/check_out"
            tag="button"
            class="btn text-white btn-primary mt-1"
            v-if="invoice.oprationId == 1"
          >تایید و ادامه</router-link>
          <button
            class="btn text-white btn-primary mt-1"
            v-if="invoice.oprationId == 0"
            disabled
          >تایید و ادامه</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    invoice: {
      type: Object,
      default: () => {
        return {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 1,
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
  padding: 0.5em 10px;
  text-align: right;
}
img {
  position: absolute;
  left: 0.5em;
  top: 1em;
}
a {
  text-decoration: none;
  color: black;
}
</style>