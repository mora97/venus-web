<template>
  <div id="item">
    <div class="card">
      <div class="card-body row">
        <unicon name="times-circle" id="icon-remove" @click="asyncRemoveCheckOutItem(id)"></unicon>
        <img src="../../assets/images/polymer.jpg" alt class />
        <div class="d-flex flex-column mr-4 mt-3">
          <span>{{ item.name }}</span>
          <span>{{ item.quantity }}</span>
          <span>{{ item.producer }}</span>
          <span>{{ item.type }}</span>
          <span>{{ item.off }}</span>
          <span id="price" class>{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          id: 1,
          name: "نام کالا",
          quantity: "مقدار",
          producer: "تولید کننده",
          type: "نوع بسته بندی",
          off: "تخفیف",
          price: "مبلغ: ۱۸۰۰۰۰۰تومان"
        };
      }
    },
    id: {
      type: Number
    }
  },
  methods: {
    ...mapActions(["asyncRemoveCheckOutItem"])
  }
};
</script>

<style scoped>
img {
  width: 9em;
  height: 8em;
  margin: auto 0
}
.card {
  width: 100%;
}
.card-body {
  padding: 0.25em 0
}
#price {
  position: absolute;
  left: 1.5em;
  top: 1.5em;
}
span {
  text-align: right;
}
#icon-remove {
  margin: auto 0.5em;
  z-index: 100;
}
@media (max-width: 768px) {
  #item {
    padding: .5em 0
  }
  .card-body {
    padding: 0.5em 0.5em;
  }
  img {
    width: 7em;
    height: 7em;
    margin: 1em 0.25em;
  }
  #icon-remove {
    margin: auto 0;
  }
  #price {
    position: static;
    margin-bottom: 1em;
  }
  span {
    font-size: 0.9em;
  }
}
</style>