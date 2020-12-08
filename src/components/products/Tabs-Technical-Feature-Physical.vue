<template>
  <div id="physical">
    <div id="desktop">
      <div class="row d-flex flex-nowrap">
        <div v-for="(item, index) in physicalData" :key="index">
          <div class="d-flex flex-column" :id="'col-' + index">
            <span class="title border">{{ item.key }}</span>
            <span class="value border">{{ item.value }}</span>
            <span class="value border">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="mobile">
      <div v-for="(item, index) in physicalData" :key="index">
          <div class="col">
            <span class="title border">{{ item.key }}</span>
            <span class="value border">{{ item.value }}</span>
            <span class="value border">{{ item.value }}</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      physicalData: [
        {
          key: "نام",
          value: ""
        },
        {
          key: "مقدار",
          value: ""
        },
        {
          key: "واحد",
          value: ""
        },
        {
          key: "شرایط",
          value: ""
        },
        {
          key: "استاندارد",
          value: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
span {
  width: 5.5em;
  height: 3.5em;
  text-align: center;
  margin: 0.5em 1.5em;
  border-radius: 4px;
  background-color: var(--background-color);
  padding: 0.75em 0;
}
#mobile {
  display: none
}
@media (max-width: 768px) {
  span {
    width: 3.9em;
    height: 3em;
    margin: 0.5em 0.2em;
    font-size: 0.9em
  }
  #col-0 {
    margin-right: 0
  }
}
</style>