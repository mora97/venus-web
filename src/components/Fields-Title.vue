<template>
  <div id="fileds">
    <div class="row">
      <div class="col-4">
        <input id="sheet" type="button" class="btn" value="تولید ورق سبک" />
      </div>
      <div class="col-4">
        <input id="poly" type="button" class="btn" value="پلیمرهای مهندسی" />
      </div>
      <div class="col-4">
        <input id="recycle" type="button" class="btn" value="مواد بازیافتی" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#fileds {
  padding: 0 0.5em;
}
#sheet {
  background: #ede6ff;
}
#poly {
  background: #cbe6f7;
}
#recycle {
  background: #fff3e0;
}
.col-4 {
  padding: 0 0;
}
input {
  width: 95%;
  height: 5.5em;
  margin-left: 0.8em;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 1.5em;
}
@media (max-width: 768px) {
  input {
    width: 95%;
    height: 6em;
    margin-left: 0.8em;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.2em
  }
}
@media (max-width: 576px) {
  input {
    width: 95%;
    height: 5em;
    padding: 0 0.5em;
    font-size: 0.9em;
  }
}
@media (max-width: 400px) {
  input {
    width: 7.8em;
    height: 5em;
    padding: 0 0;
    font-size: 0.8em;
  }
}
@media (max-width: 320px) {
  input {
    width: 7.5em;
    height: 5em;
    padding: 0 0;
    font-size: 0.8em;
  }
}
</style>
