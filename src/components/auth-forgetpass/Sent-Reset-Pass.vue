<template>
  <div id="sent-reset-pass">
    <div class="card shadow mt-5">
      <h6 class="text-right mr-3 mt-2">ارسال ایمیل بازیابی</h6>
      <hr style="width: 100%; margin-top: -0.15em" />
      <div class="card-body text-center">
        <div class="rounded-circle border">
          <img src="../../assets/logo.png" alt class="mt-4" />
        </div>
        <h3 class="mt-3">ایمیل بازیابی ارسال گردید</h3>
        <p class="pl-4 pr-4 text-right mt-3 mr-2">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:
        "یک لینک برای بازیابی رمزعبور شما به ایمیل شما ارسال گردید. لطفا به ایمیل خودر مراجعه کرده و بر روی لینک ارسال شده کلیک نمایید"
    };
  }
};
</script>

<style scoped>
h6 {
    color: var(--login-fonts-color);
}

img {
  width: 5rem;
  /* border: 1px solid red */
}

p {
    color: #4e4c4c;
}

.card {
  background: #f4f4f4;
}

.rounded-circle {
  margin: 0 auto;
  width: 7rem;
  height: 7rem;
  border-color: #4be091 !important
}

#sent-reset-pass {
  background: var(--background);
}
</style>