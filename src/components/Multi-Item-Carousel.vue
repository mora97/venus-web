<template>
  <div id="carousel">
    <router-link to="view_products?page=1" exact>
      <span class="ml-2" v-if="showAll">
        <small>مشاهده همه</small>
      </span>
    </router-link>
    <h6 :class="{'title-position-1': !showAll, 'title-position-0': showAll}">{{ title }}</h6>
    <div class="border" id="carousel-items">
      <carousel :dots="false" :nav="false" :autoplay="true" :responsive="{0: {items: 1}, 500: {items: 2}, 800: {items: 4}}">
        <template slot="prev">
          <div id="btn-prev">
            <unicon name="stretched-arrow" id="icon-prev"></unicon>
          </div>
        </template>
        <template slot="next">
          <div id="btn-next">
            <unicon name="stretched-arrow" id="icon-next"></unicon>
          </div>
        </template>
        <div v-for="i in 10" :key="i">
          <item id="carousel-item"></item>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import item from "./Carousel-Item";
import carousel from "vue-owl-carousel";

export default {
  props: {
    showAll: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    item,
    carousel
  }
};
</script>

<style scoped>
h6 {
  height: 0em;
  font-size: 1.3em;
  margin: 0.2em 0;
}

a {
  text-decoration: none;
}

#carousel {
  padding: 0 1em;
  direction: ltr;
  background: #ffffff;
  /* padding: 0 2em; */
  
}
.carousel {
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  padding: 0 0em;
  margin: 1em 0;
}
.title-position-0 {
  float: right;
}
.title-position-1 {
  position: relative;
  text-align: right;
  height: 1.5em;
}
.item {
  margin: 1em auto;
}
#carousel-items {
  margin: 0.5em 0;
  
}
#btn-prev,
#btn-next {
  height: 14.5em;
  width: 2.5em;
  background: white;
  z-index: 200;
  position: absolute;
  opacity: 0.5;
}
#btn-prev #icon-prev {
  position: absolute;
  top: 46%;
  left: 1em;
}
#btn-next {
  right: 1em;
  top: 2em;
}
#btn-next #icon-next {
  transform: rotate(180deg);
  position: absolute;
  top: 45%;
  right: 1em;
}
#carousel-item {
  padding-left: 2em
}
@media (max-width: 768px) {
  h6 {
    height: 0em;
    font-size: 1em;
    margin: 0.2em 0;
  }
  #carousel-item {
    padding-left: 4em
  }
}
</style>
