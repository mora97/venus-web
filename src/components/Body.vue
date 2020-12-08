<template>
  <div id="body" class="pl-1 pr-1">
    <carousel-card class="mt-3"></carousel-card>
    <h6 class="mt-2">وستاپلاست</h6>
    <options class="mt-4" id="option-desktop"></options>
    <options class="mt-4" id="option-mobile-right" :leftSide="false"></options>
    <hr />
    <div class="carousel">
      <multi-item-carousel class="mt-3" title="test"></multi-item-carousel>
    </div>
    <fields-title class="mt-1"></fields-title>
    <hr class="mt-3" />
    <options class="mt-4" id="option-mobile-left" :rightSide="false"></options>
    <hr class="mt-2" />
    <div class="carousel">
      <multi-item-carousel class="mt-1" title="مواد بازیافتی"></multi-item-carousel>
    </div>
    <div class="carousel">
      <multi-item-carousel title="test3"></multi-item-carousel>
    </div>
    <div class="d-flex justify-content-around mt-2" id="guarantee_support">
      <div class="d-flex flex-column">
        <img class="p-2" src="../assets/images/online-support.svg" alt />
        <span>
          <small>پشتیبانی ۲۴ ساعته</small>
        </span>
      </div>
      <div class="d-flex flex-column">
        <img class="p-2" src="../assets/images/guarantee.svg" alt />
        <span>
          <small>ضمانت اصالت کالا</small>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselCard from "./Carousel";
import Options from "./Options";
import MultiItemCarousel from "./Multi-Item-Carousel";
import FieldsTitle from "./Fields-Title";

export default {
  components: {
    CarouselCard,
    Options,
    MultiItemCarousel,
    FieldsTitle
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#body {
  background: var(--background-color);
  padding: 2em 0;
}
#guarantee_support img {
  width: 4.5em;
}
#guarantee_support span {
  margin-top: -0.6em;
  font-size: 1em;
  margin-right: -0.5em;
}
h6 {
  text-align: center;
  font-size: 1.4em;
}
hr {
  display: none;
}
@media (min-width: 768px) {
  #option-mobile-right,
  #option-mobile-left {
    display: none;
  }
}
@media (max-width: 768px) {
  #option-desktop {
    display: none;
  }
  #guarantee_support img {
    width: 3.5em;
  }
  #guarantee_support span {
    margin-top: -0.8em;
    font-size: 0.8em;
  }
  hr {
    display: block;
    border-color: var(--border-color);
    margin: 0.5em 1em;
  }
  h6 {
    font-size: 1em;
  }
}
</style>
