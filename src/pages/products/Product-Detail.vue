<template>
  <div id="product-detail">
    <detail class="mt-2" :detail="detail"></detail>
    <tabs class="mt-3"></tabs>
    <div class="carousel">
      <multi-item-carousel title="محصولات مرتبط" :showAll="false" class="mt-3"></multi-item-carousel>
    </div>
  </div>
</template>

<script>
import Detail from "../../components/products/Detail";
import MultiItemCarousel from "../../components/Multi-Item-Carousel";
import Tabs from "../../components/products/Tabs";
import { mapActions } from "vuex";
import Product from "../../store/models/Product"

export default {
  components: {
    Detail,
    MultiItemCarousel,
    Tabs
  },
  data() {
    return {
      detail: [],
      features: []
    };
  },
  methods: {
    ...mapActions(["asyncProductData"])
  },
  created() {
    this.asyncProductData(this.$route.params.id)
      .then(res => {
        if (res.status == 200) {
          this.detail = new Product(res.data);
        }
        console.log(this.detail);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
* {
  font-family: IRANSans
}
#product-detail {
  padding: 0 2em;
}
@media (max-width: 768px) {
  #product-detail {
    padding: 0 0.5em;
  }
}
</style>