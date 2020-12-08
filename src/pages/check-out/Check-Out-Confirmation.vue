<template>
  <div>
    <div id="desktop">
      <h6>انتخاب نحوه پرداخت</h6>
      <table class="table table-bordered table-responsive">
        <tbody>
          <tr v-for="(option, index) in options" :key="index">
            <td>
              <div class="form-check-input mt-0">
                <input
                  type="radio"
                  class="form-check-input"
                  name="sendingTime"
                  :id="'radio' + index"
                  value="option1"
                />
                <label
                  class="form-check-label mr-4"
                  :for="'radio' + index"
                  :id="'label-' + index"
                >{{ option.text }}</label>
              </div>
              <img :src="getImageUrl(option.imgUrl)" alt />
            </td>
          </tr>
        </tbody>
      </table>
      <span>خلاصه سفارش</span>
      <div class="carousel mb-2">
        <carousel
          :dots="false"
          :nav="false"
          :autoplay="false"
          :responsive="{0: {items: 1}, 500: {items: 2}, 950: {items: 3}}"
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
          <div v-for="(step, index) in 8" :key="index">
            <item class="ml-4"></item>
          </div>
        </carousel>
      </div>
      <!-- <div id="off">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column">
              <span>
                <small>استفاده از کد تخفیف</small>
              </span>
              <span>کد تخفیف خود را وارد نمایید:</span>
            </div>
            <div class="row d-felx mr-2">
              <input type="text" class="border rounded mt-1" />
              <button class="btn mr-1 mt-1">ثبت کد تخفیف</button>
            </div>
          </div>
        </div>
      </div>-->
      <div class="row d-flex justify-content-between mb-3 mt-2">
        <span
          @click="$router.go(-1), setCheckOutAddress('/check_out/confirmation');"
        >بازگشت به شیوه ارسال</span>
        <span>
          <font color="#2620D3">تایید نهایی</font>
        </span>
      </div>
    </div>
    <div id="mobile">
      <factor :preFactor="false"></factor>
      <span>خلاصه سفارش</span>
      <div class="carousel mt-2 mb-2">
        <carousel
          :dots="false"
          :nav="false"
          :autoplay="false"
          :responsive="{0: {items: 1}, 500: {items: 2}, 950: {items: 3}}"
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
          <div v-for="(step, index) in 8" :key="index">
            <item class="ml-4"></item>
          </div>
        </carousel>
      </div>
      <span>انتخاب شیوه پرداخت</span>
      <table class="table table-bordered table-responsive">
        <tbody>
          <tr v-for="(option, index) in options" :key="index">
            <td>
              <div class="form-check-input mt-0">
                <input
                  type="radio"
                  class="form-check-input"
                  name="sendingTime"
                  :id="'radio' + index"
                  value="option1"
                />
                <label
                  class="form-check-label mr-4"
                  :for="'radio' + index"
                  :id="'label-' + index"
                >{{ option.text }}</label>
              </div>
              <img :src="getImageUrl(option.imgUrl)" alt />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import carousel from "vue-owl-carousel";
import item from "../../components/Carousel-Item";
import Factor from "../../components/check-out/Pre-Factor";

export default {
  components: {
    carousel,
    item,
    Factor
  },
  data() {
    return {
      options: [
        {
          text:
            "پرداخت اینترنتی (آنلاین با تمامی کارت های بانکی) سرعت بیشتر در ارسال و پردازش سفارش",
          imgUrl: "online-payment.svg"
        },
        {
          text: "پرداخت به صورت کارت به کارت",
          imgUrl: "bank-cards.svg"
        },
        {
          text: "پرداخت با ارز دیجیتال",
          imgUrl: "bitcoin.svg"
        }
      ],
      situation: "",
      selected: ""
    };
  },
  methods: {
    ...mapMutations(["setCheckOutAddress"]),
    getImageUrl(img) {
      return require("../../assets/images/" + img);
    }
  }
};
</script>

<style scoped>
.card {
  direction: rtl;
  text-align: right;
  padding: 0.8em 0;
  width: 21em;
  margin: 0 auto;
}
.card-body {
  padding: 0.5em 0.5em;
}
h6 {
  text-align: right;
}
tbody td,
tr {
  width: 100em;
  height: 4em;
}
img {
  left: 1.5em;
  height: 2em;
  width: 2em;
  position: absolute;
}
label {
  direction: rtl;
  text-align: right;
}
#label-0 {
  width: 23em;
}
button {
  background: #2733c7;
  color: white;
  font-size: 0.85em;
}
.carousel {
  direction: ltr;
  background: #ffffff;
}
#btn-prev,
#btn-next {
  height: 100%;
  width: 2.5em;
  background: white;
  z-index: 200;
  position: absolute;
  opacity: 0.5;
}
#btn-prev #icon-prev {
  position: absolute;
  top: 50%;
  left: 1em;
}
#btn-next {
  right: 0em;
  top: 0em;
}
#btn-next #icon-next {
  transform: rotate(180deg);
  position: absolute;
  top: 50%;
  right: 1em;
}
#mobile {
  display: none;
}
@media (max-width: 768px) {
  #mobile {
    display: block;
    text-align: right;
    padding: 0 0.5em;
  }
  #mobile .card {
    height: 9.2em;
    width: 21.2em;
    padding: 0 0.25em;
  }
  #mobile #label-0,
  #label-1,
  #label-2 {
    width: 20em;
    font-size: 0.8em;
  }
  #desktop {
    display: none;
  }
}
</style>