<template>
  <div id="cart">
    <div id="cart-desktop">
      <invoice-table></invoice-table>
      <transition-group name="slide">
        <div v-for="(item, index) in items" :key="item.id" class="mt-2">
          <item :item="item" :id="index"></item>
        </div>
      </transition-group>
    </div>
    <div id="cart-mobile">
      <!-- <div class="text-right mb-1" id="title">
        <span class="mr-4">سبد خرید</span>
      </div>-->
      <factor :preFactor="false" class="mb-5 mt-1"></factor>
      <transition-group name="slide">
        <div v-for="(item, index) in items" :key="item.id" class="mt-2">
          <item :item="item" :id="index"></item>
        </div>
      </transition-group>
      <div id="btn-pre-factor">
        <button class="btn btn-primary mb-3">تایید و صدور پیش فاکتور</button>
        <router-link to="/check_out/pre_invoices">مشاهده پیش فاکتورها</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../../components/check-out/Item";
import Factor from "../../components/check-out/Pre-Factor";
import InvoiceTable from "../../components/Invoice-Table";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    Item,
    Factor,
    InvoiceTable
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    ...mapGetters(["getCheckOutItems"]),
    ...mapMutations(["setCheckOutAddress"]),
    addItem() {
      this.items.splice(0, 0, this.items.length + 1);
    },
    removeItem(index) {
      this.items.splice(index, 1);
      console.log(this.items);
    }
  },
  created() {
    this.items = this.getCheckOutItems();
    this.setCheckOutAddress("/check_out/sending");
  }
};
</script>

<style scoped>
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
#cart {
  margin-top: -0.5em;
}
#cart-mobile {
  display: none;
}
@media (max-width: 768px) {
  #cart-mobile {
    display: block;
    padding: 0 0.5em;
  }
  #cart-desktop {
    display: none;
  }
  #title {
    background: #f7f4f4;
    position: sticky;
    position: -webkit-sticky;
    top: 9.5em;
    z-index: 200;
  }
  #btn-pre-factor {
    text-align: center;
    margin: 1em auto;
  }
  #btn-pre-factor a {
    position: absolute;
    right: 0.5em;
    margin-top: 2.8em;
    font-size: 0.9em;
  }
}
</style>