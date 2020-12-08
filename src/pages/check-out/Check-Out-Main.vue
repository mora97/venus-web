<template>
  <div id="main">
    <div id="desktop">
      <div class="row mt-3">
        <div class="col-8 text-right">
          <router-view></router-view>
        </div>
        <div class="col-4 mb-2">
          <pre-factor class="mt-2" id="pre-factor"></pre-factor>
        </div>
      </div>
    </div>
    <div id="mobile">
      <div>
        <go-back></go-back>
        <div class="row d-flex justify-content-between mb-3" id="show-steps">
          <router-link to="/check_out" exact>
            <div class="d-flex flex-column">
              <img src="../../assets/images/cart-industry.svg" alt id="icon-cart" />
              <span>تکمیل خرید</span>
            </div>
          </router-link>
          <hr />
          <router-link to="/check_out/sending" exact>
            <div class="d-flex flex-column">
              <img src="../../assets/images/delivery-truck-black.svg" alt id="icon-delivery" />
              <span>انتخاب نحوه ارسال</span>
            </div>
          </router-link>
          <hr />
          <router-link to="/check_out/confirmation" exact>
            <div class="d-flex flex-column">
              <img src="../../assets/images/credit-card.svg" alt id="icon-credit-card" />
              <span>انتخاب نحوه پرداخت</span>
            </div>
          </router-link>
        </div>
        <router-view></router-view>
        <div id="btn-confirmation">
          <router-link :to="getCheckOutAddress()">
            <button class="btn">ادامه و ثبت شفارش</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreFactor from "../../components/check-out/Pre-Factor";
import { mapGetters, mapActions } from "vuex";
import GoBack from "../../components/GoBack";

export default {
  components: {
    PreFactor,
    GoBack
  },
  data() {
    return {
      iconsOpacity: []
    };
  },
  methods: {
    ...mapGetters(["getCheckOutAddress",, "getProfileSubject"]),
    ...mapActions(["asyncGetCheckOutData"])
  },
  created() {
    this.asyncGetCheckOutData();
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     if (vm.getProfileSubject() == "ورود / عضویت") {
  //       vm.$router.push("/");
  //     }
  //   });
  // }
};
</script>

<style scoped>
* {
  font-family: IRANSans;
}
#desktop {
  padding: 0 2em;
  background: #f4f4f4;
}
#desktop #pre-factor {
  position: -webkit-sticky;
  position: sticky;
  top: 7.5em;
}
#desktop #cart {
  padding: 0.5em 0;
}
#desktop .col-4 {
  direction: ltr;
  text-align: left;
}
#mobile {
  display: none;
}
@media (max-width: 768px) {
  #mobile {
    display: block;
  }
  #desktop {
    display: none;
  }
  #btn-confirmation {
    position: sticky;
    position: -webkit-sticky;
    bottom: 0em;
    z-index: 500;
    text-align: center;
    background: #f4f4f4;
  }
  #mobile #btn-confirmation button {
    background: #78e591;
    margin-top: 0.5em;
    margin-bottom: 1em;
    width: 80%;
    z-index: 200;
  }
  #mobile img {
    width: 2.5em;
    height: 2.5em;
    margin: 0em auto;
    margin-top: 1em;
  }
  #mobile #show-steps {
    margin-top: 2.5em;
    padding: 0 0.3em;
    background: #f4f4f4;
  }
  #mobile #show-steps span {
    font-size: 0.65em;
  }
  #mobile #show-steps hr {
    width: 3em;
    margin: auto 0;
    border: 1px solid rgb(39, 37, 37);
  }
  #mobile #show-steps a {
    opacity: 0.4;
    text-decoration: none !important;
    color: black;
  }
  #mobile .router-link-active {
    opacity: 1 !important;
  }
}
</style>