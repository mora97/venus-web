<template>
  <div>
    <div id="desktop">
      <h6 class="mb-3">فهرست پیش فاکتورها</h6>
      <table class="table table-bordered table-responsive header-fixed">
        <thead>
          <tr>
            <th v-for="(title, index) in titles" :key="index">{{ title }}</th>
          </tr>
        </thead>
        <tbody style="text-align: center">
          <tr v-for="(invoice, index) in invoices" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ invoice.number }}</td>
            <td>{{ invoice.registerDate }}</td>
            <td>{{ invoice.expireDate }}</td>
            <td>{{ invoice.cost }}</td>
            <td>{{ invoice.off }}</td>
            <td>
              <span v-if="invoice.stateId == 1">
                <font color="#19d144">درحال بررسی</font>
              </span>
              <span v-if="invoice.stateId == 0" style="width: 1em">
                <font color="red">منقضی</font>
              </span>
            </td>
            <td>
              <router-link
                to="/check_out"
                tag="button"
                class="btn text-white"
                v-if="invoice.oprationId == 1"
              >تایید و ادامه</router-link>
              <hr
                v-if="invoice.oprationId == 0"
                style="width: 0.5em; margin: 1.5em auto; border: 1px solid red"
              />
            </td>
            <td @click="$router.push('/profile/orders/' + index)">
              <unicon name="stretched-arrow" id="icon-arrow" style="background: white"></unicon>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="mobile">
      <div v-for="invoice in invoices" :key="invoice.id">
        <item :invoice="invoice" class="mt-2"></item>
      </div>
    </div>
  </div>
</template>

<script>
import item from "./profile/Invoices-Items";
import { mapActions } from "vuex";

export default {
  components: {
    item
  },
  data() {
    return {
      titles: [
        "ردیف",
        "شماره پیش فاکتور",
        "تاریخ ثبت",
        "تاریخ اعتبار",
        "مبلغ قابل پرداخت",
        "تخفیف",
        "وضعیت",
        "عملیات",
        "جزئیات"
      ],
      invoices: [
        {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 1,
          oprationId: 1
        },
        {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 1,
          oprationId: 0
        },
        {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 0,
          oprationId: 0
        },
        {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 0,
          oprationId: 0
        },
        {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 1,
          oprationId: 1
        },
        {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 1,
          oprationId: 1
        },
        {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 1,
          oprationId: 1
        },
        {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 1,
          oprationId: 1
        },
        {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 1,
          oprationId: 1
        },
        {
          number: "0925351531581",
          registerDate: "02/02/02",
          expireDate: "02/02/02",
          cost: "1000000000",
          off: "25000",
          stateId: 1,
          oprationId: 1
        }
      ]
    };
  },
  methods: {
    ...mapActions(["asyncSetProfileState"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.asyncSetProfileState(2);
    });
  }
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
  border-radius: 8px;
}
table th {
  text-align: right;
  background: #78e591;
  padding-top: 1em;
  font-size: 0.85em;
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
  width: 11.1%;
  float: right;
  height: 5em;
  text-align: center;
}
.table button {
  font-size: 0.8em;
  background: #2160df;
}
#mobile {
  display: none;
}
@media (max-width: 1120px) {
  .header-fixed > tbody > tr > td,
  .header-fixed > thead > tr > th {
    height: 5.7em;
  }
}
@media (max-width: 768px) {
  #mobile {
    display: block;
    padding: 0 0.5em;
  }
  #desktop {
    display: none;
  }
}
</style>