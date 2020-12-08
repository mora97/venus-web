<template>
  <div id="product">
    <div id="desktop">
      <div class="card">
        <router-link :to="'/view_products/product_detail/' + product.partID">
          <div class="card-body">
            <div class="d-flex flex-column">
              <img src="../../assets/images/polymer2.jpg" alt />
              <span class="mt-2" id="product-name">{{ product.name }}</span>
              <span class="mt-3" style="font-size: 0.7em">{{ product.code }}</span>
              <div class="d-flex justify-content-between mt-4">
                <span style="font-size: 0.8em">{{ product.brandName }}</span>
                <span>{{ product.price }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div id="mobile">
      <div class="card shadow">
        <router-link :to="'/view_products/product_detail/' + product.partID">
          <img class="float-right" src="../../assets/images/polymer2.jpg" alt />
          <div class="card-body d-flex flex-column">
            <span>{{ product.name }}</span>
            <span>{{ product.brandName }}</span>
            <span>{{ product.price }}</span>
            <span>{{ product.code }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {
        return {
          partID: "productData.partID",
          code: "productData.code",
          price: "67.555",
          name: "productData.name",
          latinName: "productData.latinName",
          technicalSpecification: "productData.technicalSpecification",
          description: "productData.description",
          brandName: "Puma",
          unit: "productData.unit"
        };
      }
    }
  }
};
</script>

<style scoped>
#desktop .card {
  width: 12rem;
  /* height: 15rem; */
}
img {
  width: 97%;
  height: 9em;
  border-radius: 5px;
  margin: auto;
}
.card-body {
  padding: 0.5em 0.5em;
  text-align: center;
}
#product-name {
  font-size: 0.9em;
  line-height: 1em;
}
#mobile {
  display: none;
}
span {
  height: 1em;
}
a {
  text-decoration: none !important;
  color: black;
}
@media (max-width: 768px) {
  #desktop {
    display: none;
  }
  #mobile {
    display: block;
  }
  #mobile img {
    width: 8.5em;
    height: 8.5em;
    padding: 0.4em 0.4em;
    border-radius: 10px;
  }
  #mobile .card-body {
    position: absolute;
    padding: 0; 
    right: 9em;
    text-align: right;
    direction: rtl;
  }
  #mobile p {
    margin: 0 0;
    font-size: 0.9em;
  }
  #mobile span {
    font-size: 0.8em;
    margin-top: 0.5em;
  }
}
@media (max-width: 320px) {
  img {
    width: 6em;
    height: 6em;
    border-radius: 5px;
  }
}
</style>
