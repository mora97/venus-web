<template>
  <div id="pre-factor">
    <div id="factor-desktop">
      <div class="card">
        <div class="card-body">
          <div class="row d-flex justify-content-between">
            <span>مبلغ کل (۱کالا)</span>
            <span>{{ factor.totalPrice }} تومان</span>
          </div>
          <div class="mt-2" id="list">
            <div v-for="product in factor.products" :key="product.id" class="item">
              <span>هزینه ارسال مرسوله {{ product.id }}</span>
              <div class="d-flex flex-column mt-2">
                <span>شهر مبداء: {{ product.origin }}</span>
                <span>شهر مقصد: {{ product.dist }}</span>
              </div>
              <span class="price">{{ product.price }} تومان</span>
              <hr />
            </div>
          </div>
          <div class="row d-flex justify-content-between mt-2">
            <span>تخفیف</span>
            <span class="ml-1">{{ factor.off }} تومان</span>
          </div>
          <hr>
          <div class="d-flex flex-column text-center mt-3" id="final-view">
            <span>مبلغ قابل پرداخت</span>
            <span>تومان {{ factor.totalPrice }}</span>
            <router-link :to="getCheckOutAddress()" tag="button" class="btn mt-1 text-white" id="register">ادامه ثبت سفارش</router-link>
            <button class="btn text-white mt-2">تایید و صدور پیش فاکتور</button>
            <p>کالاهای موجود در سبد شما ثبت و رزرو نشده اند برای ثبت سفارش مرحله بعد را تکمیل کنید</p>
          </div>
        </div>
      </div>
    </div>
    <div id="factor-mobile">
      <div class="card">
        <div class="card-body">
          <div class="row d-flex justify-content-between border-bottom pb-2 mt-2">
            <span>مبلغ کل</span>
            <span>102900</span>
          </div>
          <div class="row d-flex justify-content-between border-bottom pb-2 mt-3">
            <span>تخفیف</span>
            <span>2900</span>
          </div>
          <div class="row d-flex justify-content-between border-bottom pb-2 mt-3">
            <span>مبلغ قابل پرداخت</span>
            <span>100000</span>
          </div>
          <p>کالاهای موجود در سبد شما ثبت و رزرو نشده اند برای ثبت سفارش مرحله بعد را تکمیل کنید</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    preFactor: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      address: "/check_out/sending",
      factor: {
        totalPrice: 2500000,
        off: 15000,
        products: [
          {
            id: 1,
            price: 1000000,
            origin: "تهران",
            dist: "قزوین"
          },
          {
            id: 2,
            price: 1000000,
            origin: "تهران",
            dist: "تبریز"
          },
          {
            id: 3,
            price: 1000000,
            origin: "تهران",
            dist: "تبریز"
          },
          {
            id: 4,
            price: 1000000,
            origin: "تهران",
            dist: "تبریز"
          },
          {
            id: 5,
            price: 1000000,
            origin: "تهران",
            dist: "تبریز"
          },
          {
            id: 6,
            price: 1000000,
            origin: "تهران",
            dist: "تبریز"
          }
        ]
      }
    };
  },
  methods: {
    ...mapGetters(["getCheckOutAddress"])
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
#factor-desktop .card {
  max-width: 23em;
  min-width: 14em;
  margin: auto 0;
}
.card-body {
  direction: rtl;
  text-align: right;
  padding: 0.5em 0.75em;
}
.card #register, button {
  background: #78e591;
  width: 70%;
  margin: 0 auto
}
.card button {
  background: #2F5EE2
} 
#list {
  height: 25em;
  overflow-y: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.25em 0.25em
}
.item span{
  font-size: 0.8em
}
hr {
  margin: 0.25em 0
}
.price {
  position: relative;
  float: left;
  left: 0.5em;
  bottom: 2em;
}
.price {
  font-size: 0.9em !important;
  font-weight: 800;
  height: 0;
}
#final-view span{
  font-weight: 800
}
p {
  font-size: 0.7em;
  margin-top: 2em;
}
#factor-mobile {
  display: none;
}
@media (max-width: 768px) {
  #factor-mobile {
    display: block;
    text-align: center;
  }
  #factor-mobile .card {
    margin: 0 auto;
  }

  #factor-desktop {
    display: none;
  }
}
</style>