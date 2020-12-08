<template>
  <div id="item-address">
    <div id="desktop">
      <h6>{{ title }}</h6>
      <div class="card">
        <div class="card-body">
          <span id="change-address">تغییر آدرس</span>
          <span>گیرنده: ...........</span>
          <div class="row mt-4">
            <span>شماره تماس: ۰۹۱۲۳۲۳۲۳۲۲</span>
            <div class="vr mr-2"></div>
            <span class="mr-2">۰۲۱-۱۱۲۲۳۳۴۴</span>
            <div class="vr mr-2"></div>
            <span class="mr-2">کد پستی: ................</span>
          </div>
          <div class="mt-4">
            <span id="address">آدرس: ................</span>
            <span class="mt-4 float-left" id="edit-address">اطلاح این آدرس</span>
          </div>
        </div>
      </div>
    </div>
    <div id="mobile">
      <h6>{{ title }}</h6>
      <div class="card">
            <div class="card-body">
              <span>نام تحویل گیرنده</span>
              <hr />
              <div class="d-flex flex-column">
                <span>آدرس</span>
                <span class="mt-5">کد پستی</span>
              </div>
              <div class="row d-flex justify-content-between mt-2">
                <span>شماره همراه</span>
                <span>
                  <font color="#2620D3">تغییر آدرس ارسال</font>
                </span>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.card {
  width: 100%;
}
.card-body {
  direction: rtl;
  text-align: right;
  padding: 0.5em 0.5em;
}
.vr {
  border-left: 1px solid var(--border-color);
}
#change-address {
  position: absolute;
  left: 0.5em;
}
h6 {
  text-align: right;
}
#mobile {
  display: none
}
@media (max-width: 768px) {
  #desktop {
    display: none
  }
  #mobile {
    display: block;
    direction: rtl;
    text-align: right;
  }
  #mobile .card {
    direction: rtl;
    text-align: right;
  }
}
</style>