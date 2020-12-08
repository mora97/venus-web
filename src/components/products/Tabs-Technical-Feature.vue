<template>
  <div id="technical-tabs">
    <h6>مشخصات فنی</h6>
    <span>نام کالا</span>
    <div class="card">
      <div class="card-body">
        <div id="general-feature">
          <span class="title">مشخصات کلی</span>
          <general-feature></general-feature>
        </div>
        <div class="mt-3" id="physical-feature">
          <span class="title">مشخصات فیزیکی</span>
          <physical-feature></physical-feature>
        </div>
        <div class="mt-3" id="physical-feature">
          <span class="title">مشخصات شیمیایی</span>
          <physical-feature></physical-feature>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GeneralFeature from "./Tabs-Technical-Feature-General";
import PhysicalFeature from "./Tabs-Technical-Feature-Physical";

export default {
  components: {
    GeneralFeature,
    PhysicalFeature
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-thumb {
  background: rgb(255, 252, 252);
}
::-webkit-scrollbar-track {
  background: rgb(255, 252, 252);
  margin-top: 3px;
}
#technical-tabs {
  border: 1px solid var(--border-color);
  padding: 0.2em 0.5em;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
}
.card {
  height: 26.5em;
  overflow-y: auto;
}
@media (max-width: 768px) {
  #technical-tabs {
    direction: rtl;
    text-align: right
  }
}
</style>