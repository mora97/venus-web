<template>
  <div id="footer-middle">
    <div class="row">
      <div class="col-4">
        <div class="row mt-1" v-for="(option, index) in options_1" :key="index">
          <span>
            <strong>{{ option }}</strong>
          </span>
        </div>
      </div>
      <div class="col-4">
        <div class="row mt-1" v-for="(option, index) in options_2" :key="index">
          <span>
            <strong>{{ option }}</strong>
          </span>
        </div>
      </div>
      <div class="col-4">
        <div class="row mt-1" v-for="(option, index) in options_3" :key="index">
          <span>
            <strong>{{ option }}</strong>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options_1: ["راهنمای خرید", "نحوه ثبت سفارش", "پاسخ به سوالات متداول"],
      options_2: ["خدمات مشتریان", "حریم خصوصی", "شرایط استفاده"],
      options_3: [
        "تیم وستا پلاست",
        "تماس با وستا پلاست",
        "استخدام در وستاپلاست"
      ]
    };
  }
};
</script>

<style scoped>
#footer-middle {
  font-family: IRANSans;
  font-size: 0.8em;
  direction: rtl;
  padding: 0 0em;
}
span {
    margin: 0.3em 0; 
    text-align: right;
}
.col-4 {
  padding: 0 0 !important;
}
@media (max-width: 576px) {
    #footer-middle {
        font-size: 0.7em;
    }
}
</style>
