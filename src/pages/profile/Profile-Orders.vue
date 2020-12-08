<template>
  <div id="orders">
    <h6 class="text-right mb-3">همه سفارش های من</h6>
    <div id="orders-mobile">
      <div v-for="index in 10" :key="index" class="mt-2">
        <orders-item :orderId="index"></orders-item>
      </div>
    </div>
    <div id="orders-desktop">
      <table class="table table-bordered table-responsive header-fixed">
        <thead>
          <tr>
            <th v-for="(title, index) in titles" :key="index">{{ title }}</th>
          </tr>
        </thead>
        <tbody style="text-align: center">
          <tr v-for="(order, index) in orders" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ order.number }}</td>
            <td>{{ order.registerDate }}</td>
            <td>{{ order.status }}</td>
            <td>{{ order.cost }}</td>
            <td>{{ order.totalCost }}</td>
            <td>{{ order.paied }}</td>
            <td @click="$router.push('/profile/orders/' + index)">
              <unicon name="stretched-arrow" id="icon-arrow" style="background: white"></unicon>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import OrdersItem from "../../components/profile/Orders-Item";
import { mapActions } from "vuex";

export default {
  components: {
    OrdersItem
  },
  data() {
    return {
      titles: [
        "ردیف",
        "شماره سفارش",
        "تاریخ ثبت سفارش",
        "وضعیت سفارش",
        "مبلغ قابل پرداخت",
        "مبلغ کل",
        "وضعیت پرداخت",
        "جزئیات"
      ],
      orders: [
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        },
        {
          number:"0925351531581",
          registerDate: "02/02/02",
          status:"تحویل داده شده",
          cost: "1000000000",
          totalCost: "10000000000",
          paied: "پرداخت شده",
          detail: ""
        }
      ]
    };
  },
  methods: {
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-thumb {
  background: rgb(255, 252, 252);
}
::-webkit-scrollbar-track {
  background: rgb(255, 252, 252);
  margin-top: 3px;
}
* {
  font-family: IRANSans;
  background-color: #f7f4f4;
}
table {
  overflow: auto;
  height: 40em !important;
  width: 100%;
  margin: 0 0;
  background: white;
  border-radius: 8px
}
table th {
  text-align: right;
  background: #78e591;
  padding-top: 1em;
}
table td {
  background: white;
}
.header-fixed {
  width: 100%;
}

.header-fixed > thead,
.header-fixed > tbody,
.header-fixed > thead > tr,
.header-fixed > tbody > tr,
.header-fixed > thead > tr > th,
.header-fixed > tbody > tr > td {
  display: block;
}
.header-fixed > tbody > tr > td {
  padding: 1em 0;
  font-size: 0.8em;
}
.header-fixed > tbody > tr:after,
.header-fixed > thead > tr:after {
  content: " ";
  display: block;
  visibility: hidden;
  clear: both;
}
.header-fixed > tbody {
  overflow-y: auto;
  height: 35em;
}

.header-fixed > tbody > tr > td,
.header-fixed > thead > tr > th {
  width: 12.5%;
  float: right;
  height: 5em;
  text-align: center;
}
#orders {
  padding: 0em 0.5em;
}
#orders-mobile {
  display: none;
}
#orders-desktop {
  font-size: 0.9em;
}
#orders-list {
  height: 36em;
  overflow-y: auto;
}
#icon-arrow {
  position: relative;
  margin: 0.5em 1%;
}
#option-0,
#order-item-0 {
  width: 8.4em;
}
#option-0,
#order-item-0 {
  width: 8.4em;
}
@media (max-width: 950px) {
 thead th {
    font-size: 0.9em;
  }
  .header-fixed > thead > tr > th {
    height: 5.5em;
  }
}
@media (max-width: 768px) {
  #orders-mobile {
    display: block;
  }
  #orders-desktop {
    display: none;
  }
}
</style>