<template>
  <div id="view-product">
    <!-- <loadbar style="height: 1em"></loadbar> -->
    <div id="desktop">
      <div class="row">
        <div class="col-3">
          <div id="filter-side">
            <result-part class="mt-2"></result-part>
            <search-filter class="mt-1"></search-filter>
            <check-box-filter class="mt-1"></check-box-filter>
            <toggleable-filter title="فقط کالاهای موجود" class="mt-1"></toggleable-filter>
            <toggleable-filter title="فقط کالاهای آماده ارسال" class="mt-1"></toggleable-filter>
          </div>
        </div>
        <div class="col-9">
          <div id="address">
            <span class="mr-4">دسته۱/نام زیرگروه/نام کالا</span>
          </div>
          <div class="d-flex flex-wrap mt-3" id="list">
            <div v-for="(product, index) in fakeProducts" :key="index">
               <product-item :product="product" class="m-2"></product-item>
            </div>
          </div>
          <!-- <div class="row mt-1">
            <div class="col-4" v-for="(product, index) in fakeProducts" :key="index">
              <product-item :product="product" class="mt-1"></product-item>
            </div>
            <div class="col-3" v-for="(product, index) in fakeProducts" :key="index + 10">
              <product-item :product="product" class="mt-1"></product-item>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div id="mobile">
      <div class="border-bottom border-top row d-flex justify-content-center" id="filter">
        <router-link to="/view_products/advance_search">
          <input type="button" class="btn shadow-sm ml-2" value="جست و جوی پیشرفته" />
        </router-link>
        <input type="button" class="btn shadow-sm mr-2" value="پربازدیدترین" />
      </div>
      <div id="address">
        <span class="mr-4">دسته۱/نام زیرگروه/نام کالا</span>
      </div>
      <div id="product-list">
        <div class="p-2">
          <div class="mt-3" id="list">
            <div v-for="(product, index) in fakeProducts" :key="index">
               <product-item :product="product" class="m-2"></product-item>
            </div>
          </div>
        </div>
        <div class="p-2">
          <div class="card pl-2 pr-2" id="description">
            <h6 class="d-flex justify-content-center mt-2">توضیحات دسته</h6>
            <hr class="mt-1" />
          </div>
        </div>
      </div>
    </div>
    <div id="pagination">
      <pagination :pages="pages" url="/view_products"></pagination>
    </div>
  </div>
</template>

<script>
import ProductItem from "../../components/products/Products-Item";
import ResultPart from "../../components/products/Result-Part";
import SearchFilter from "../../components/products/Filter-Search";
import CheckBoxFilter from "../../components/products/Filter-CheckBox";
import ToggleableFilter from "../../components/products/Filter-Toggleable";
import Product from "../../store/models/Product";
import Pagination from "../../components/Pagination";
import Loadbar from "../../components/Loadbar";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    ProductItem,
    ResultPart,
    SearchFilter,
    CheckBoxFilter,
    ToggleableFilter,
    Pagination,
    Loadbar
  },
  data() {
    return {
      products: [],
      fakeProducts: [
        {
          partID: "productData.partID",
          code: "productData.code",
          price: "67.555",
          name: "productData.name",
          latinName: "productData.latinName",
          technicalSpecification: "productData.technicalSpecification",
          description: "productData.description",
          brandName: "Puma",
          unit: "productData.unit"
        },
        {
          partID: "productData.partID",
          code: "productData.code",
          price: "67.555",
          name: "productData.name",
          latinName: "productData.latinName",
          technicalSpecification: "productData.technicalSpecification",
          description: "productData.description",
          brandName: "Puma",
          unit: "productData.unit"
        },
        {
          partID: "productData.partID",
          code: "productData.code",
          price: "67.555",
          name: "productData.name",
          latinName: "productData.latinName",
          technicalSpecification: "productData.technicalSpecification",
          description: "productData.description",
          brandName: "Puma",
          unit: "productData.unit"
        },
        {
          partID: "productData.partID",
          code: "productData.code",
          price: "67.555",
          name: "productData.name",
          latinName: "productData.latinName",
          technicalSpecification: "productData.technicalSpecification",
          description: "productData.description",
          brandName: "Puma",
          unit: "productData.unit"
        },
        {
          partID: "productData.partID",
          code: "productData.code",
          price: "67.555",
          name: "productData.name",
          latinName: "productData.latinName",
          technicalSpecification: "productData.technicalSpecification",
          description: "productData.description",
          brandName: "Puma",
          unit: "productData.unit"
        },
        {
          partID: "productData.partID",
          code: "productData.code",
          price: "67.555",
          name: "productData.name",
          latinName: "productData.latinName",
          technicalSpecification: "productData.technicalSpecification",
          description: "productData.description",
          brandName: "Puma",
          unit: "productData.unit"
        },
        {
          partID: "productData.partID",
          code: "productData.code",
          price: "67.555",
          name: "productData.name",
          latinName: "productData.latinName",
          technicalSpecification: "productData.technicalSpecification",
          description: "productData.description",
          brandName: "Puma",
          unit: "productData.unit"
        }
      ], //offline
      pages: 1,
      count: 0
    };
  },
  methods: {
    ...mapGetters(["getProductsList"]),
    ...mapMutations(["setActiveLoadbar"]),
    ...mapActions(["asyncProductsList"])
  },
  beforeCreate() {
    // this.setActiveLoadbar(true)
  },
  created() {
    //connection to api
    this.asyncProductsList()
      .then(res => {
        if (res.status == 200) {
          if (res.data.length <= 20) {
            this.pages = 6;
          } else {
            this.pages = Math.ceil(res.data.length / 20);
          }
          console.log(this.pages);
          for (let i = 0; i < res.data.length; i++) {
            this.products.push(new Product(res.data[i]));
          }

          this.setActiveLoadbar(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
#view-product {
  background: var(--background-color);
  font-family: IRANSans;
}
#filter-side {
  position: sticky;
  position: -webkit-sticky;
  top: 7.5em;
}
.col-3 {
  margin-top: 2em;
  padding: 0.3em 0.4em;
}
.col-9 .col-4 {
  display: none;
}
#address {
  position: sticky;
  position: -webkit-sticky;
  top: 3.8em;
  height: 2.2em;
  background: var(--background-color);
  text-align: right;
  z-index: 300;
}
#address span {
  position: absolute;
  top: 0.8em;
}
#pagination {
  padding: 0 auto;
}
#mobile {
  display: none;
}
@media (max-width: 890px) {
  .col-9 .col-3 {
    display: none;
  }
  .col-9 .col-4 {
    display: block;
    padding: 0.3em 0.4em;
  }
}
@media (max-width: 768px) {
  #desktop {
    display: none;
  }
  #mobile {
    display: block;
  }
  #mobile #product-list {
    width: 100%;
    overflow-y: auto;
  }
  #mobile input {
    padding: 0em 0.5em;
    width: 12em;
    background-color: #ffffff !important;
    text-align: right;
    border-radius: 10px;
    height: 2.5em;
    border: 1px solid var(--border-color);
    margin: 1em 0;
  }
  #mobile .row input:first-child {
    background: url("../../assets/images/settings.svg");
    background-repeat: no-repeat;
    background-position: 0.5em 0.25em;
    background-size: 1.7em;
  }
  #mobile .row input:last-child {
    background: url("../../assets/images/sort.svg");
    background-repeat: no-repeat;
    background-position: 0.6em 0.3em;
    background-size: 1.6em;
  }
  #mobile hr {
    border-color: var(--border-color);
  }
  #mobile .card {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    height: 15em;
  }
  #mobile #filter {
    position: sticky;
    position: -webkit-sticky;
    top: 9em !important;
    z-index: 400;
    background: var(--background-color);
  }

  #mobile #address {
    top: 11.5em !important;
  }
}
@media (max-width: 576px) {
  input {
    width: 12em;
  }
}
@media (max-width: 375px) {
  #mobile #address {
    top: 10.5em;
  }
  input {
    width: 12.5em;
    font-size: 0.7em;
  }
}
</style>
