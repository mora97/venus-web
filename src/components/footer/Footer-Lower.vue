<template>
  <div id="footer-lower">
    <div class="row">
      <div class="col-4">
        <p>هفت روز هفته، ۲۴ساعته با شما هستیم</p>
        <p>تلفن تماس:۴۱۲۲۲۱۳۱۲۱</p>
      </div>
      <div class="col-4">
        <p>آدرس ایمیل:</p>
        <p>ما را در شبکه های اجماعی دنبال کنید</p>
      </div>
      <div class="row">
        <div id="left-icons">
          <img src="../../assets/images/linkedin.svg" alt id="icon-linkedin" />
          <img src="../../assets/images/instagram.svg" alt />
          <img src="../../assets/images/twitter.svg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer-lower {
  font-size: 0.9em;
}
.col-4 {
  padding: 0 0;
  text-align: right;
}
img {
  width: 2em;
  height: 2em;
  margin-top: -0.5em;
}
#left-icons {
  position: absolute;
  left: 1.8em;
  margin-top: 2.8em
}
img {
  width: 2.5em;
  height: 2.5em;
  margin-top: -0.5em;
}
#icon-linkedin {
  width: 2em;
}
@media (max-width: 576px) {
}
</style>
