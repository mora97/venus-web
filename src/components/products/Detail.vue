<template>
  <div id="detail">
    <div id="desktop">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-1">
              <options class="mt-1 float-rights"></options>
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col-lg-4">
                  <img src="../../assets/images/polymer3.jpg" alt />
                </div>
                <div id="general-feature" class="col-lg-8">
                  <general-feature :feature="detail"></general-feature>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <specifics class="specifics" title="ویژگی محصولات"></specifics>
                <specifics class="specifics" title="موارد استفاده"></specifics>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mobile">
      <div class="card">
        <div class="card-body">
          <hr />
          <div class="row">
            <options class="mr-2"></options>
            <img src="../../assets/images/polymer3.jpg" alt />
          </div>
          <general-feature :feature="detail"></general-feature>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Options from "./Detail-Options";
import GeneralFeature from "./Detail-General-Feature";
import Specifics from "./Detail-Specifics";

export default {
  props: ['detail'],
  components: {
    Options,
    GeneralFeature,
    Specifics
  }
};
</script>

<style scoped>
.col-3,
.col-4 {
  padding: 0 0;
  direction: rtl;
}
.col-lg-4 {
  text-align: right;
}
.col-7 .col-lg-8 {
  padding-right: 1em;
  text-align: left;
}
.card-body {
  padding: 1em 0;
}
#detail {
  padding: 0 20px;
}
img {
  width: 14em;
  height: 14em;
  margin-right: -3em;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
#specifics {
  width: 40%;
  direction: ltr;
}
.col-4 .row .specifics:last-child {
  margin-right: 1em;
}
#mobile {
  display: none;
}
@media (max-width: 1060px) {
  img {
    width: 12em;
    height: 12em;
    margin-top: 1em;
  }
  .col-7 #general-feature {
    margin-top: 1em;
  }
  .col-4 {
    padding-left: 1em;
  }
}
@media (max-width: 992px) {
  #specifics {
    width: 100%;
  }
  .col-7 .col-lg-4 {
    direction: rtl;
    text-align: center;
  }
  .col-4 .row .specifics:last-child {
    margin-top: 1em;
    margin-right: 0;
  }
}
@media (max-width: 768px) {
  #mobile {
    display: block;
  }
  #detail {
    padding: 0 0px;
  }
  img {
    min-width: 80%;
    height: 9em;
    margin: 0 auto;
  }
  hr {
    margin: 1.8em 0.5em 1em 1em;
  }
  #desktop {
    display: none;
  }
}
</style>