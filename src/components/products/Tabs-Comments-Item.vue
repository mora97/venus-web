<template>
  <div id="comments-item">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-center" id="comment-detail">
          <span class="ml-3">
            <font>نظر کاربر ساعت:</font> ۱۲:۴۵
          </span>
          <span>۱۳۹۸/۲/۲</span>
        </div>
        <hr />
        <div id="user">
          <img src="../../assets/images/customer.svg" alt />
          <span>نام کاربر</span>
        </div>
        <div id="status">
          <span class="mr-2">خریدار</span>
        </div>
        <div class="d-flex flex-column mt-4" id="comment-body">
          <span>مقدار خریداری شده:‌</span>
          <span>تامین کننده:</span>
          <div class="d-flex flex-column" id="suggestion">
            <span>خرید این محصول را توصیح میکنم</span>
            <span>خرید این محصول را توصیح نمیکنم</span>
          </div>
          <div id="was-help-full">
            <span>آیا این نظر مفید بود؟</span>
            <img src="../../assets/images/good-quality.svg" alt />
            <img src="../../assets/images/unlike.svg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
hr {
  width: 40%;
  margin: 0 auto;
}
img {
  width: 1.5em;
  height: 1.5em;
}
#user {
  position: absolute;
  top: 1.2em;
  right: 0.5em;
}
#status {
  position: absolute;
  left: 0.5em;
  top: 1em;
  width: 3.5em;
  height: 2.5em;
  border: 1px solid #add8e6;
  border-radius: 50%;
  padding-top: 0.35em;
  background: #add8e6;
}
#status span {
  font-size: 0.9em;
}
#comment-body #suggestion {
  margin-top: 2em;
}
#suggestion span:first-child {
  color: #43c223;
}
#suggestion span:last-child {
  color: red;
}
#was-help-full {
  position: absolute;
  left: 0.5em;
  bottom: 0.5em;
}
#was-help-full img {
  cursor: pointer;
  width: 2em;
  height: 2em;
}
@media (max-width: 768px) {
  #user img {
    display: none;
  }
  .card-body {
    padding: 0.25em;
  }
  #user {
    margin-right: 3em;
    margin-top: -0.5em
  }
  #status {
    position: absolute;
    right: 0.5em;
    margin-top: -0.5em;
    font-size: 0.8em;
  }
  #comment-detail {
    float: left;
    margin-top: 0.5em;
    margin-left: 0.5em
  }
  #comment-detail font {
    display: none;
  }
  hr {
    margin-top: 2.5em;
  }
  #comment-body {
    font-size: 0.9em;
    margin-top: -5em;
  }
  #comment-body #suggestion {
    margin-top: 0em;
  }
  #comment-body #was-help-full {
    position: relative;
    margin-top: 1em;
    text-align: left;
  }
}
</style>