<template>
  <div id="footer-upper">
    <p class="mt-1">از تخفیف ها و جدیدترین ها با خبر شوید</p>
    <div>
      <input class="form-control mt-2" type="text" placeholder="آدرس ایمیل" />
      <input class="form-control shadow mt-2" type="submit" value="ارسال" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer-upper {
  width: 90%;
}
#footer-upper p {
  text-align: center;
}
input {
  border-radius: var(--border-radius);
}

input[type="text"] {
  text-align: right;
}
@media (min-width: 769px) {
  input[type="submit"] {
    position: relative;
    width: 5em;
    height: 2.7em;
    top: -3.3em;
    font-size: 0.95em;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background: #78e591;
    border-style: none;
  }
}
@media (max-width: 768px) {
  #footer-upper {
    width: 20em;
  }
  input[type="submit"] {
    position: relative;
    width: 11em;
    margin: 0.5em auto;
    background: #78e591;
  }
}
</style>
