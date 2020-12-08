<template>
  <div id="comment-write">
    <div id="desktop">
      <h5 class="mt-1">نوشتن نظر</h5>
      <div class="row mt-2 mr-4">
        <span class="mt-2">عنوان نظر</span>
        <input id="input-title" class="form-control mr-2" type="text" />
      </div>
      <div class="row mt-3 mr-4">
        <span>متن نظر</span>
        <textarea name id rows="10" class="mb-4 mr-3 mt-1"></textarea>
      </div>
      <div class="row">
        <button class="btn btn-success">ثبت نظر</button>
        <div class="mr-2">
          <div class="mr-2">
            <p>
              با انتخاب دکمه "ثبت نظر"، موافقت خود را با
              <router-link to="#">قوانین انتشار محتوا</router-link>در وبسایت وستاپلاست اعلام می کنم
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
    <div id="mobile">
      <div class="card">
        <div class="card-body">
          <div class="row" id="submit-point">
            <div v-for="i in 5" :key="i">
              <span
                class="fa fa-star text-red mt-2 mr-1"
                :style="{ color: starsColor[5 - i] }"
                @click="changeColor(i)"
              ></span>
            </div>
            <button class="btn btn-primary" id="btn-submit-point">ثبت امتیاز</button>
          </div>
          <hr class="mt-4" />
          <div id="title">
            <h6>عنوان</h6>
            <input id="input-title" class="form-control mr-2" type="text" />
          </div>
          <div id="content" class="mt-2">
            <h6>متن نظر</h6>
            <textarea name id cols="30" rows="8" class="mr-1"></textarea>
          </div>
          <button class="btn btn-success">ثبت نظر</button>
          <div class="mr-2">
            <div class="mr-2">
              <p>
                با انتخاب دکمه "ثبت نظر"، موافقت خود را با
                <router-link to="#">قوانین انتشار محتوا</router-link>در وبسایت وستاپلاست اعلام می کنم
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h5 style="display: none">{{ changeColor[colorIndex] }}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starsColor: ["", "", "", "", ""],
      colorIndex: 0 
    };
  },
  methods: {
    changeColor(index) {
      index = 5 - index
      console.log(index);
      this.colorIndex = index
      for (let i = 0; i <= index; i++) {
        this.starsColor[i] = "orange";
      }
      for (let i = index + 1; i <= 5; i++) {
        this.starsColor[i] = "";    
      }
      console.log(this.starsColor);
      
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
  width: 50%;
  border-radius: 5px;
  border-color: var(--border-color);
  padding: 0.25em 0.5em;
}
#desktop button {
  width: 8em;
  height: 3em;
  margin-right: 5.5em;
}
#input-title {
  width: 10em;
}
p {
  width: 70%;
}
#mobile {
  display: none;
}
@media (max-width: 768px) {
  #mobile {
    display: block;
    text-align: right;
    padding: 1em 1em;
  }
  #desktop {
    display: none;
  }
  #btn-submit-point {
    position: absolute;
    left: 1em;
  }
  #submit-point span {
      font-size: 1.2em
  }
  textarea {
    width: 100%;
  }
  .btn-success {
    width: 100%;
    margin: 1em 0em;
  }
  p {
    width: 100%;
  }
}
</style>