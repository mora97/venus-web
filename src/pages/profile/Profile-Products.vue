<template>
  <div id="products">
    <h6 class="mb-3">فهرست کالاهای من</h6>
    <div id="desktop">
      <table class="table table-bordered table-responsive header-fixed">
        <thead>
          <tr>
            <th v-for="(title, index) in titles" :key="index">{{ title }}</th>
          </tr>
        </thead>
        <tbody style="text-align: center">
          <tr v-for="(porduct, index) in porducts" :key="index">
            <td>{{ porduct.row }}</td>
            <td>{{ porduct.name }}</td>
            <td>{{ porduct.analyticsUnit }}</td>
            <td>{{ porduct.cost }}</td>
            <td>{{ porduct.producer }}</td>
            <td>
              <router-link
                to="/check_out"
                tag="button"
                class="btn text-white"
                v-if="porduct.oprationId == 1"
              >ثبت سفارش</router-link>
              <hr
                v-if="porduct.oprationId == 0"
                style="width: 0.5em; margin: 1.5em auto; border: 1px solid red"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="mobile">
      <div v-for="(porduct, index) in porducts" :key="index">
        <item :porduct="porduct" class="mt-2 mb-1"></item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import item from "../../components/profile/Product-Item";

export default {
  components: {
    item
  },
  data() {
    return {
      titles: [
        "ردیف",
        "نام کالا",
        "واحد سنجش",
        "فی امروز",
        "تولید کننده",
        "عملیات"
      ],
      porducts: [
        {
          row: "1",
          name: "PVC",
          analyticsUnit: "کیسه",
          cost: "1000000000",
          producer: "پتروشیمی آبادان",
          oprationId: 0
        },
        {
          row: "2",
          name: "PVC",
          analyticsUnit: "کیسه",
          cost: "1000000000",
          producer: "پتروشیمی آبادان",
          oprationId: 1
        },
        {
          row: "3",
          name: "PVC",
          analyticsUnit: "کیسه",
          cost: "1000000000",
          producer: "پتروشیمی آبادان",
          oprationId: 1
        },
        {
          row: "4",
          name: "PVC",
          analyticsUnit: "کیسه",
          cost: "1000000000",
          producer: "پتروشیمی آبادان",
          oprationId: 1
        },
        {
          row: "5",
          name: "PVC",
          analyticsUnit: "کیسه",
          cost: "1000000000",
          producer: "پتروشیمی آبادان",
          oprationId: 1
        },
        {
          row: "6",
          name: "PVC",
          analyticsUnit: "کیسه",
          cost: "1000000000",
          producer: "پتروشیمی آبادان",
          oprationId: 1
        },
        {
          row: "7",
          name: "PVC",
          analyticsUnit: "کیسه",
          cost: "1000000000",
          producer: "پتروشیمی آبادان",
          oprationId: 1
        },
        {
          row: "8",
          name: "PVC",
          analyticsUnit: "کیسه",
          cost: "1000000000",
          producer: "پتروشیمی آبادان",
          oprationId: 1
        },
        {
          row: "9",
          name: "PVC",
          analyticsUnit: "کیسه",
          cost: "1000000000",
          producer: "پتروشیمی آبادان",
          oprationId: 1
        },
        {
          row: "10",
          name: "PVC",
          analyticsUnit: "کیسه",
          cost: "1000000000",
          producer: "پتروشیمی آبادان",
          oprationId: 1
        }
      ]
    };
  },
  methods: {
  },
};
</script>

<style scoped>
#products {
    direction: rtl;
    text-align: right
}
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
  width: 16.6%;
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
@media (max-width: 768px) {
  #mobile {
    display: block;
    padding: 0 0.5em;
  }
  #desktop {
    display: none;
  }
  h6 {
    margin-right: 0.5em   
  }
}
</style>