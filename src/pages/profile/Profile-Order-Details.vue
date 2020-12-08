<template>
  <div id="orders-details">
    <div id="order-details-mobile">
      <h6>سفارش: 46544546446444646</h6>
      <div class="card shadow-sm mt-3">
        <div class="card-body">
          <div v-for="(option, index) in (options)" :key="index" class="border-bottom mt-4 pb-2">
            <span>{{ option }}</span>
          </div>
          <div class="mt-3">
            <span>آدرس</span>
            <hr class="mt-4" />
          </div>
        </div>
      </div>
    </div>
    <div id="order-details-desktop">
      <div class="row" id="header">
        <img src="../../assets/images/circle-back-arrow.svg" alt class="border-left mt-2" @click="$router.go(-1)"/>
        <div class="d-flex flex-column mr-2">
          <span>سفارش 2313211123132</span>
          <span style="font-size: 0.8em">ثبت شده در تاریخ ۱۲ خرداد ۹۸</span>
        </div>
      </div>
      <div class="card mb-3 mt-2" id="detail">
        <div class="card-body">
          <div class="row">
            <div class="col-6 d-flex flex-column">
              <span>{{ items[0]}}</span>
              <hr />
              <span>{{ items[2]}}</span>
              <hr />
              <span>{{ items[4]}}</span>
            </div>
            <div class="vr"></div>
            <div class="col-6 d-flex flex-column">
              <span>{{ items[1]}}</span>
              <hr />
              <span>{{ items[3]}}</span>
              <hr />
              <span>{{ items[5]}}</span>
            </div>
          </div>
        </div>
      </div>
      <span>مرسوله ۱ از ۱</span>
      <div id="steps">
        <div class="card">
          <div class="card-body">
            <div id="title">
              <span class="mt-1 mb-1 mr-1">
                <small>تحویل مرسوله به مشتری</small>
              </span>
            </div>
            <div class="carousel">
              <carousel
                :dots="false"
                :nav="false"
                :autoplay="false"
                :responsive="{0: {items: 1}, 500: {items: 5}, 800: {items: 5}}"
              >
                <template slot="prev">
                  <div id="btn-prev">
                    <unicon name="stretched-arrow" id="icon-prev"></unicon>
                  </div>
                </template>
                <template slot="next">
                  <div id="btn-next">
                    <unicon name="stretched-arrow" id="icon-next"></unicon>
                  </div>
                </template>
                <div v-for="(step, index) in forwardSteps" :key="index">
                  <div class="d-flex flex-column ml-4">
                    <img :src="getImageUrl(step.img)" alt/>
                    <span class="text-left">{{ step.title }}</span>
                  </div>
                </div>
              </carousel>
            </div>
          </div>
        </div>
      </div>
      <div id="table_1" class="mt-3">
        <div class="row border-bottom">
          <div class="col border-left p-2" v-for="(item, index) in table_1_DetailsR_1" :key="index">
            <span>{{ item }}</span>
          </div>
        </div>
        <div class="row border-bottom">
          <div class="col border-left p-2" v-for="(item, index) in table_1_DetailsR_2" :key="index">
            <span>{{ item }}</span>
          </div>
        </div>
        <div class="col-12 text-center pt-1 pb-1">
          <span>{{ table_1_DetailsR_3 }}</span>
        </div>
      </div>
      <div id="table_2" class="mt-3">
        <div class="row border-bottom">
          <div
            class="col border-left text-center"
            style="padding: 0 0;"
            v-for="(item, index) in table_2_Title"
            :key="index"
          >
            <div id="header">
              <span>{{ item }}</span>
            </div>
            <div id="body">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: {
    carousel
  },
  data() {
    return {
      options: [
        "نام تحویل گیرنده",
        "شماره تماس",
        "شماره بارنامه",
        "مقدار کل",
        "مبلغ کل",
        "وضعیت تحویل",
        "وضعیت پرداخت"
      ],
      items: [
        "نام تحویل گیرنده",
        "شماره تماس تحویل گیرنده",
        "آدرس تحویل گیرنده",
        "تعداد مرسوله",
        "مبلغ قابل پرداخت",
        "مبلغ کل"
      ],
      forwardSteps: [
        {
          img: "receive.svg",
          title: "تحویل سفارش",
          on: false
        },
        {
          img: "delivery.svg",
          title: "ارسال سفارش",
          on: false
        },
        {
          img: "cargo-checkout.svg",
          title: "آماده سازی",
          on: false
        },
        {
          img: "clipboard.svg",
          title: "تایید سفارش",
          on: false
        },
        {
          img: "clipboard_2.svg",
          title: "در صف بررسی",
          on: false
        }
      ],
      table_1_DetailsR_1: ["کد مرسوله", "زمان تحویل", "شماره بارنامه"],
      table_1_DetailsR_2: ["هزینه ارسال", "نحوه ارسال", ""],
      table_1_DetailsR_3: "مبلغ کل",
      table_2_Title: [
        "ردیف",
        "کد کالا",
        "عنوان کالا",
        "واحد سنجش",
        "نوع بسته بندی",
        "قیمت واحد",
        "تخفیف",
        "قیمت کل"
      ]
    };
  },
  methods: {
    getImageUrl(img) {
      return require("../../assets/images/" + img);
    }
  }
};
</script>

<style scoped>
* {
  font-family: IRANSans;
}
#order-details-desktop #header img {
  width: 1.7em;
  height: 1.7em;
}
#steps #title {
  background: #9cebaf;
}
#steps .card-body {
  padding: 0 0;
}
#steps img {
  width: 3em;
  height: 3em;
}
#table_1,
#table_2 {
  border: 1px solid var(--border-color);
  background: #ffffff;
}
#table_1 span {
  color: rgb(129, 126, 126);
}
#table_2 #header {
  background: #9cebaf;
  height: 3em;
}
#table_2 #header span {
  font-size: 0.9em;
}
#table_2 #body span {
  font-size: 0.8em;
}
#table_2 #body {
  background: white;
  height: 5em;
}
#orders-details {
  text-align: right;
  padding: 1em 0.5em;
  background: #f7f4f4;
  width: 100%;
}
.card {
  border-style: none;
  border-radius: 8px;
}
.card-body {
  padding: 0 20px;
  direction: ltr;
}
#order-details-mobile {
  display: none;
}
.vr {
  position: absolute;
  height: 100%;
  border-left: 1px solid var(--border-color);
  right: 50%;
  top: 0;
}
.card-body,
.col-6 {
  padding: 0.2em 0;
}
#detail span {
  margin: 0.75em 1em;
}
#btn-prev,
#btn-next {
  height: 5em;
  width: 2em;
  background: white;
  z-index: 200;
  position: absolute;
  opacity: 0.5;
}
#btn-prev #icon-prev {
  position: absolute;
  top: 40%;
  left: 0.5em;
}
#btn-next {
  right: 0em;
  top: 0em;
}
#btn-next #icon-next {
  transform: rotate(180deg);
  position: absolute;
  top: 40%;
  right: 0.5em;
}
.carousel img {
  width: 4.5;
  height: 4.5;
}
.carousel span {
  font-size: 0.7em;
  text-align: center;
}
@media (max-width: 768px) {
  #order-details-desktop {
    display: none;
  }
  #order-details-mobile {
    display: block;
  }
}
</style>