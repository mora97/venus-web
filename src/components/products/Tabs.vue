<template>
  <div>
    <div id="desktop">
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a role="tab" class="nav-link active" href="#analyze" data-toggle="tab" active="true">
                <span>نقد و بررسی</span>
                <img src="../../assets/images/preview-file.svg" alt />
              </a>
            </li>
            <li class="nav-item">
              <a role="tab" class="nav-link" href="#technical-feature" data-toggle="tab">
                <span>مشخصات فنی</span>
                <img src="../../assets/images/check-book.svg" alt />
              </a>
            </li>
            <li class="nav-item">
              <a role="tab" class="nav-link" href="#comments" data-toggle="tab">
                <span>نظرات کاربران</span>
                <img src="../../assets/images/talk.svg" alt />
              </a>
            </li>
            <li class="nav-item">
              <a role="tab" class="nav-link" href="#Q_A" data-toggle="tab">
                <span>پرسش و پاسخ</span>
                <img src="../../assets/images/ask-question.svg" alt />
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="analyze">
              <analyze></analyze>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="technical-feature">
              <technical-feature></technical-feature>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="comments">
              <comments></comments>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="Q_A">
              <q-a></q-a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mobile">
      <div class="card" id="analyze-card">
        <div class="card-body">
          <div class="row">
            <img src="../../assets/images/preview-file.svg" alt />
            <span class="mr-1">نقد و بررسی</span>
          </div>
          <analyze class="mt-2"></analyze>
        </div>
      </div>
      <div class="card" id="technical-feature-card">
        <div class="card-body">
          <div class="row">
            <img src="../../assets/images/check-book.svg" alt />
            <span class="mr-1">مشخصات فنی</span>
          </div>
          <hr />
          <span>نام کالا: ۰۰۰</span>
          <div id="more">
            <router-link to="/view_products/technical_feature">
              <span>ادامه</span>
              <img src="../../assets/images/arrow-left.svg" alt />
            </router-link>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img src="../../assets/images/talk.svg" alt />
          <span class="mr-1">نظرات کاربران</span>
          <router-link to="/view_products/Write_comment" tag="button" class="btn btn-info">ثبت نظر / امتیاز</router-link>
          <comments class="mt-3"></comments>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img src="../../assets/images/ask-question.svg" alt />
          <span>پرسش و پاسخ</span>
        </div>
        <q-a></q-a>
      </div>
    </div>
  </div>
</template>

<script>
import Analyze from "../../components/products/Tabs-Analyze";
import TechnicalFeature from "../../components/products/Tabs-Technical-Feature";
import Comments from "../../components/products/Tabs-Comments";
import Q_A from "../../components/products/Tabs-Q&A";

export default {
  components: {
    Analyze,
    TechnicalFeature,
    Comments,
    "q-a": Q_A
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.card {
  text-align: right;
}
img {
  width: 1.3em;
  height: 1.5em;
}
#mobile {
  display: none;
}
@media (max-width: 768px) {
  #mobile {
    display: block;
  }
  .card {
    margin-top: 1em
  }
  #mobile .card:last-child {
    padding: 0.2em 0.75em
  }
  #more {
    display: block;
    position: absolute;
    left: 0.5em;
    margin-top: -1.5em
  }
  #more span {
    margin-left: -0.5em;
  }
  .btn-info {
    font-size: 0.9em;
    float: left;
    margin-top: -0.5em;
  }
  #desktop {
    display: none;
  }
}
</style>