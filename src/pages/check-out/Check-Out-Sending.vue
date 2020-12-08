<template>
  <div id="step_2">
    <div id="desktop">
      <item-address title="آدرس صورت حساب" class="mt-4"></item-address>
      <div>
        <div v-for="address in addresses" :key="address.id">
          <item-address :title="'انتخاب آدرس تحویل سفارش - مرسوله' + address.id" class="mt-3 mb-2"></item-address>
          <span>مرسوله {{ address.id }}</span>
          <div class="carousel mb-2">
            <carousel
              :dots="false"
              :nav="false"
              :autoplay="false"
              :responsive="{0: {items: 1}, 600: {items: 2}, 950: {items: 3}}"
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
          <h6 class="mt-3">لطفا زمان ارسال را انتخاب نمایید:</h6>
          <check-out-table></check-out-table>
          <hr />
        </div>
      </div>
      <div class="row d-flex justify-content-between mb-3">
        <span @click="$router.go(-1), setCheckOutAddress('/check_out/sending')">بازگشت به سبد خرید</span>
        <router-link to="/check_out/confirmation">
          <span>
            <font color="#2620D3">ادامه ثبت سفارش</font>
          </span>
        </router-link>
      </div>
    </div>
    <div id="mobile">
      <!-- <div class="row d-flex justify-content-between" id="show-steps">
        <div class="d-flex flex-column">
          <img src="../../assets/images/cart-industry.svg" alt id="icon-cart" />
          <span>تکمیل خرید</span>
        </div>
        <hr />
        <div class="d-flex flex-column">
          <img src="../../assets/images/delivery-truck-black.svg" alt id="icon-delivery" />
          <span>انتخاب نحوه ارسال</span>
        </div>
        <hr />
        <div class="d-flex flex-column">
          <img src="../../assets/images/credit-card.svg" alt id="icon-credit-card"/>
          <span>انتخاب نحوه پرداخت</span>
        </div>
      </div>-->
      <div class="mt-2">
        <div v-for="address in addresses" :key="address.id">
          <item-address :title="'انتخاب آدرس تحویل سفارش - مرسوله' + address.id" class="mt-3 mb-2"></item-address>
          <span>مرسوله {{ address.id }}</span>
          <div class="carousel mt-2 mb-2">
            <carousel
              :dots="false"
              :nav="false"
              :autoplay="false"
              :responsive="{0: {items: 1}, 600: {items: 2}, 950: {items: 3}}"
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
          <div id="btn-sending-time">
            <button
              class="btn btn-primary mb-2"
              @click="activeTable = !activeTable"
            >{{ sendingTime.date }} : {{ sendingTime.time }}</button>
            <div id="table-father">
              <transition name="expand-bottom">
                <div id="table-list" v-if="activeTable">
                  <unicon
                    name="times"
                    class="float-right mt-1 mr-1"
                    @click="activeTable = !activeTable, test()"
                  ></unicon>
                  <div class="row mr-1 mt-5">
                    <div v-for="(item, index) in days" :key="index" class="col">
                      <span
                        @click="selectDay(index), sendingTime.date = item.date"
                        :class="{ changeColor: day[index] }"
                      >{{ item.day }}: {{ item.date }}</span>
                    </div>
                  </div>
                  <hr />
                  <div class="form-check-input mt-0" id="items">
                    <div v-for="i in 7" :key="i" class="row mt-2 mb-2">
                      <input
                        type="radio"
                        class="form-check-input mr-1"
                        name="sendingTime"
                        :id="'radio' + i"
                        :value="'option' + i"
                        v-model="sendingTime.time"
                      />
                      <label class="form-check-label mr-4" :for="'radio' + i">ساعت ۷ تا ۹</label>
                      <hr class="mt-1" />
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <span style="display: none">{{ day[index] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemAddress from "../../components/check-out/Item-Address";
import MultiItemCarousel from "../../components/Multi-Item-Carousel";
import { mapMutations, mapActions } from "vuex";
import carousel from "vue-owl-carousel";
import item from "../../components/Carousel-Item";
import CheckOutTable from "../../components/check-out/Table";

export default {
  components: {
    ItemAddress,
    MultiItemCarousel,
    carousel,
    item,
    CheckOutTable
  },
  data() {
    return {
      days: [
        {
          day: "شنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "یکشنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "دوشنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "سه شنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "چهارشنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "پنج شنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "جمعه",
          date: "۹۸/۵/۲۶"
        }
      ],
      day: [],
      index: -1,
      activeTable: false,
      elementHeight: 0,
      addresses: [
        {
          id: 1
        },
        {
          id: 2
        }
      ],
      sendingTime: {
        date: 'انتخاب بازه زمانی ارسال',
        time: ''
      }
    };
  },
  methods: {
    ...mapMutations(["setCheckOutAddress"]),
    beforeEnter(el) {
      console.log("before enter");
      this.elementHeight = 0;
      el.style.height = this.elementHeight + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.height = this.elementHeight + round * 10 + "px";
        round++;
        if (el.style.height == "280px") {
          clearInterval(interval);
        }
      }, 15);
      console.log("enter");
    },
    afterEnter(el) {
      console.log("after enter");
    },
    enterCancelled(el) {
      console.log("enter cancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementHeight = 300;
      el.style.height = this.elementHeight + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.height = this.elementHeight - round * 10 + "px";
        round++;
        if (el.style.height == "0px") {
          clearInterval(interval);
        }
      }, 15);
    },
    afterLeave(el) {
      // console.log("after leave");
    },
    leaveCancelled(el) {
      // console.log("leave cancelled");
    },
    selectDay(index) {
      this.index = index;
      this.day[index] = true;
      for (let i = 0; i < 7; i++) {
        if (i != index) this.day[i] = false;
      }
    },
    test() {
      console.log(this.sendingTime.date + ' - ' + this.sendingTime.time);
      
    }
  },
  mounted() {
    this.setCheckOutAddress("/check_out/confirmation");
  }
};
</script>

<style scoped>
h6 {
  text-align: right;
}
input:checked {
  background: red !important;
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
  .expand-bottom-enter {
    height: 0;
  }
  .expand-bottom-enter-active {
    animation: equalize 1.25s ease 0s;
    height: 75%;
  }
  .expand-bottom-leave {
    height: 75%;
  }
  .expand-bottom-leave-active {
    animation: equalize2 1.25s ease 0s;
    height: 0;
  }
  @keyframes equalize {
    0% {
      height: 0;
    }
    100% {
      height: 75%;
    }
  }
  @keyframes equalize2 {
    0% {
      height: 75%;
    }
    100% {
      height: 0%;
    }
  }
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 2s ease-out forwards;
    transition: opacity 2s;
  }
  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
    transition: opacity 0.2s;
    opacity: 0;
  }
  #mobile {
    display: block;
    direction: rtl;
    text-align: right;
    padding: 0.5em;
  }
  /* #mobile img {
    width: 2.5em;
    height: 2.5em;
    margin: 0 auto;
  }
  #mobile #show-steps span {
    font-size: 0.65em;
  }
  #mobile #show-steps hr {
    width: 3em;
    margin: auto 0;
    border: 1px solid rgb(39, 37, 37);
  } */
  #mobile .card {
    direction: rtl;
    text-align: right;
  }
  #mobile #btn-sending-time {
    text-align: center;
    margin-top: 1em;
  }
  #mobile #btn-sending-time button {
    background-image: url("../../assets/images/back.svg");
    background-repeat: no-repeat;
    font-size: 0.85em;
    background-size: 1em;
    background-position: 0.5em 0.75em;
    width: 12.5em;
    padding: 0.25 0.25em;
    text-align: right;
  }
  /* #mobile #icon-cart,
  #icon-credit-card {
    opacity: 0.4;
    filter: alpha(opacity=40); 
  } */
  #mobile .col {
    padding: 0 0;
    text-align: right;
  }
  #mobile #table-list {
    height: 75%;
    background: rgb(235, 230, 230);
    border-radius: 8px;
    position: fixed;
    bottom: 0;
    overflow: hidden;
    z-index: 600;
  }
  #mobile #table-list span {
    font-size: 0.72em;
  }
  #mobile #table-list #items {
    width: 100%;
  }
  #mobile #table-list hr {
    width: 98% !important;
    margin: 0 0;
  }
  #mobile label {
    font-size: 0.8em;
  }
  #mobile #table-cover {
    height: 100px;
    width: 100%;
    background: #ffffff;
    border-radius: 8px;
  }
  .changeColor {
    color: #45e217 !important;
  }
  #desktop {
    display: none;
  }
}
</style>