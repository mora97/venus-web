<template>
  <div id="general-feature">
    <div class="d-flex flex-column">
      <h4 id="product-name">{{ feature.name }}</h4>
      <hr />
      <span id="brand">
        برند:
        <span class="tab">{{ feature.brandName }}</span>
      </span>
      <span class="mt-2" id="filters">
        دسته:
        <span class="tab">دسته ۱/ دسته۱-۲</span>
      </span>
      <div class="row mt-2" id="packet-type">
        <span>انتخاب نوع بسته بندی:</span>
        <div class="tab" id="drop-down-menu">
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div class="d-felx">
        <div id="product-count" class="mt-4">
          <div class="row">
            <input type="text" v-model="count" placeholder="تعداد براساس نوع بسته بندی" />
            <div class="d-flex flex-column" id="icon-drop-down_up">
              <img
                src="../../assets/images/arrow-drop-down.svg"
                alt
                id="icon-drop-up"
                style="transform: rotate(180deg)"
                @click="counter('inc')"
              />
              <img
                src="../../assets/images/arrow-drop-down.svg"
                alt
                id="icon-drop-down"
                @click="counter('dec')"
              />
            </div>
            <input class="tab" type="text" placeholder="مقدار براساس کیلوگرم" />
          </div>
        </div>
        <hr />
        <div id="price" class="d-flex flex-column text-center">
          <span>مبلغ</span>
          <div class="mt-4">
            <button class="btn btn-primary">افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["feature"],
  data() {
    return {
      count: ""
    };
  },
  methods: {
    counter(mode) {
      if (mode == 'inc') {
        this.count++
      } else {
        if (this.count > 0) {
          this.count--;
        }
      }
    }
  }
};
</script>

<style scoped>
::-webkit-input-placeholder {
  font-size: 0.7em;
}
::-moz-placeholder {
  font-size: 0.7em;
}
:-ms-input-placeholder {
  font-size: 0.7em;
}
::placeholder {
  font-size: 0.7em;
}
.tab {
  margin-right: 4%;
}
#general-feature {
  direction: rtl;
  text-align: right;
}
span {
  font-size: 1em;
}
select {
  padding: 0 0;
  font-size: 0.9em;
  height: 2.5em;
  width: 9em;
  margin-right: 1em;
}
#icon-drop-down_up {
  position: absolute;
  margin-top: -0.1em;
  margin-right: 8em;
}
#icon-drop-down_up #icon-drop-down {
  margin-top: -0.1em;
}
#product-count input {
  border-radius: 4px;
  border: 1px solid var(--border-color);
  padding: 0 0.5em;
  font-size: 0.9em;
  height: 3em;
  width: 10.5em;
}
#product-count input:last-child {
  width: 9em !important;
}
#product-count input:focus {
  box-shadow: 0px 0px 3px 3px rgb(104, 201, 240);
}
#product-count .tab {
  margin-right: 5%;
}
button {
  width: 12em;
}
@media (max-width: 1030px) {
  .tab {
    margin-right: -0.5em;
  }
  #product-count .tab {
    margin-right: 0em;
  }
}
@media (max-width: 768px) {
  .tab {
    margin-right: 0;
  }
  #packet-type .tab {
    margin-right: -0.5em;
  }
  #product-name {
    position: absolute;
    top: 1em;
    right: 1em;
    font-size: 1em;
  }
  #brand {
    position: absolute;
    margin-right: 2.9em;
    margin-top: -0.8em;
  }
  #filters {
    margin-right: 3em;
  }
  hr {
    display: none;
  }
  #packet-type span:first-child {
    display: none;
  }
  #packet-type #drop-down-menu {
    padding: 0 1.5em;
    width: 100%;
  }
  select {
    padding: 0 0;
    font-size: 1em;
    /* height: 2.5em; */
    width: 100%;
  }
  #product-count {
    margin: 0 0;
    margin-left: 1em;
  }
  #product-count input:first-child {
    float: right;
    margin-right: 2em;
  }
  #product-count input:last-child {
    margin-right: 1em;
  }
  #icon-drop-down_up {
    margin-top: 0em;
    margin-right: 9.7em;
  }
  #icon-drop-down_up #icon-drop-down {
    margin-top: -0.1em;
  }
  #price {
    margin-top: 1.5em;
  }
}
</style>